import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import * as ReactDOM from "react-dom/client";
import Marker from "./Marker";
import Popup from "./Popup";
import { Event } from "../../types/types";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

interface Props {
  events: Array<Event>;
  focusedEvent: Event | null;
  setFocusedEvent: (event: Event | null) => void;
}
interface MapMarker {
  id: number;
  mapBoxMarker: mapboxgl.Marker;
  markerRoot: ReactDOM.Root;
  popupRoot: ReactDOM.Root;
}

const Map = ({ events, focusedEvent, setFocusedEvent }: Props) => {
  const [markers, setMarkers] = useState<Array<MapMarker>>([]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();

  const flyTo = (event: Event) => {
    if (!map.current) return;
    map.current.flyTo({
      center: [event.coordinates[0], event.coordinates[1]],
      offset: [0, 140],
    });
  };

  const hideAllPopups = () => {
    if (!markers) return;
    markers.forEach((marker) => {
      if (marker.mapBoxMarker?.getPopup().isOpen()) {
        marker.mapBoxMarker.togglePopup();
      }
    });
  };

  const removeMarkers = () => {
    if (!markers) return;
    markers.forEach((marker) => {
      const popup = marker.mapBoxMarker.getPopup();
      const popupEl = popup.getElement();
      const markerEl = marker.mapBoxMarker.getElement();

      marker.markerRoot.unmount();

      console.log(markerEl);
      if (popupEl) popupEl.parentElement?.removeChild(popupEl);
      if (markerEl) markerEl.parentElement?.removeChild(markerEl);

      marker.mapBoxMarker.remove();
    });
  };

  const getMarker = (event: Event) => {
    const geoObject = markers.find((geoObject) => {
      return geoObject.id === event.id;
    });
    return geoObject;
  };

  const createMarkerPopupDOMElements = (event: Event) => {
    const popupEl = document.createElement("div");
    const popupRoot = ReactDOM.createRoot(popupEl);
    popupRoot.render(<Popup event={event} />);

    const markerEl = document.createElement("div");
    const markerRoot = ReactDOM.createRoot(markerEl);
    markerRoot.render(
      <Marker event={event} onClick={() => setFocusedEvent(event)} />
    );
    return { markerEl, popupEl, markerRoot, popupRoot };
  };

  // initialize map when container is ref is available
  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [19.94, 50.04],
      zoom: 9,
    });
  });
  // initialize map and focus on user location on first render
  useEffect(() => {
    if (!map.current) return;
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      showAccuracyCircle: false,
      trackUserLocation: true,
    });
    map.current.addControl(geolocate);
    map.current.on("load", function () {
      //Focus on user location
      geolocate.trigger();
    });
  });

  // add markers to map every time events change
  useEffect(() => {
    removeMarkers();
    const newMarkers = events.map((event) => {
      const { markerEl, popupEl, markerRoot, popupRoot } =
        createMarkerPopupDOMElements(event);
      const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupEl);
      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([event.coordinates[0], event.coordinates[1]])
        .setPopup(popup)
        // @ts-ignore
        .addTo(map.current);
      return {
        id: event.id,
        mapBoxMarker: marker,
        markerRoot: markerRoot,
        popupRoot: popupRoot,
      } as MapMarker;
    });
    setMarkers(newMarkers);
  }, [events]);

  // focus event on map when event is clicked in list view or when event is clicked on map
  useEffect(() => {
    hideAllPopups();
    if (!focusedEvent) return;
    const geoObject = getMarker(focusedEvent);
    if (!geoObject) return;
    flyTo(focusedEvent);
    const timeout = setTimeout(() => {
      if (!geoObject.mapBoxMarker.getPopup().isOpen()) {
        geoObject.mapBoxMarker.togglePopup();
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [focusedEvent]);

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
