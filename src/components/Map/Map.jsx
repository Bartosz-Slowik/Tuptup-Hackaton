import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import * as ReactDOM from "react-dom/client";
import typeConverter from "../../utils/typeConverter";
import Marker from "./Marker";
import Popup from "./Popup";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = ({ events }) => {
  const [geoObjects, setGeoObjects] = useState([]);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(19.94);
  const [lat, setLat] = useState(50.04);
  const [zoom, setZoom] = useState(9);

  const flyTo = (lng, lat, offsetY) => {
    map.current.flyTo({
      center: [lng, lat],
      offset: [0, offsetY],
    });
  };

  const createMarkerPopupDOMElements = (event) => {
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
      <Marker event={event} popupEl={popupEl} mapFlyTo={flyTo} />
    );

    return [markerEl, popupEl];
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    const newGeoObjects = events.map((event) => {
      console.log(event);

      const feature = typeConverter(event);

      const [el, el2] = createMarkerPopupDOMElements(event);

      const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(el2);

      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(popup)
        .addTo(map.current);

      return feature;
    });
    setGeoObjects(newGeoObjects);
  }, [events]);

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
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("load", function () {
      //Focus on user location
      geolocate.trigger();
    });
  });

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
