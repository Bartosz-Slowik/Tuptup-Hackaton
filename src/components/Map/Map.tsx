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
}

const Map = ({ events, focusedEvent, setFocusedEvent }: Props) => {
  const [markers, setMarkers] = useState<Array<MapMarker>>([]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const [lng, setLng] = useState(19.94);
  const [lat, setLat] = useState(50.04);
  const [zoom, setZoom] = useState(9);

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
    markers.forEach((geoObject) => {
      geoObject.mapBoxMarker.remove();
    });
  };

  const getGeoObject = (event: Event) => {
    const geoObject = markers.find((geoObject) => {
      return geoObject.id === event.id;
    });
    return geoObject;
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    const createMarkerPopupDOMElements = (event: Event) => {
      const popupEl = document.createElement("div");
      const popupRoot = ReactDOM.createRoot(popupEl);
      popupRoot.render(
        <Popup
          title={event.title}
          description={event.description}
          image={event.image}
          friends={event.participants}
        />
      );

      const markerEl = document.createElement("div");
      const markerRoot = ReactDOM.createRoot(markerEl);
      markerRoot.render(
        <Marker
          event={event}
          onClick={() => {
            setFocusedEvent(event);
          }}
        />
      );
      return [markerEl, popupEl];
    };

    const newMarkers = events.map((event) => {
      const [markerEl, popupEl] = createMarkerPopupDOMElements(event);
      const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupEl);
      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([event.coordinates[0], event.coordinates[1]])
        .setPopup(popup)
        // @ts-ignore
        .addTo(map.current);
      return { id: event.id, mapBoxMarker: marker } as MapMarker;
    });

    removeMarkers();
    setMarkers(newMarkers);
  }, [events]);

  useEffect(() => {
    hideAllPopups();
    if (!focusedEvent) return;
    const geoObject = getGeoObject(focusedEvent);
    if (!geoObject) return;
    flyTo(focusedEvent);

    const timeout = setTimeout(() => {
      if (!geoObject.mapBoxMarker.getPopup().isOpen()) {
        geoObject.mapBoxMarker.togglePopup();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [focusedEvent]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      showAccuracyCircle: false,
      trackUserLocation: true,
    });
    map.current.addControl(geolocate);

    map.current.on("move", () => {
      if (!map.current) return;
      setLng(map.current.getCenter().lng);
      setLat(map.current.getCenter().lat);
      setZoom(map.current.getZoom());
    });

    map.current.on("load", function () {
      //Focus on user location
      geolocate.trigger();
    });
  });

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
