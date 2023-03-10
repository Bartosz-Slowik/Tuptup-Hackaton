import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import geoJson from "../places.json";
import * as ReactDOM from "react-dom/client";
import Overview from "../overview";


mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/navigation-day-v1",
      center: [19.94, 50.04],
      zoom: 12,
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      showAccuracyCircle: false,
      trackUserLocation: true
    });
    // Add the control to the map.
    map.addControl(geolocate);

    //FUNKCJA PODCZAS ŁADOWANIA MAPY
    map.on("load", function () {

      //LOKALIZACJA USERA
      geolocate.trigger();

      // Add marker for each feature in places.json
      for (const feature of geoJson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.dataset.id = feature.properties.id;
        if (feature.properties.type === 'party') {
          el.className = 'markerParty';
        }
        if (feature.properties.type === 'sport') {
          el.className = 'markerSport';
        }
        else if (feature.properties.type === 'event') {
          el.className = 'markerEvent';
        }
        el.addEventListener('click', () => {
          map.flyTo({
            center: [feature.geometry.coordinates[0], feature.geometry.coordinates[1]],
            offset: [0, 120],
          });
          setTimeout(() => {
            const root = ReactDOM.createRoot(document.querySelector(`[data-overview="${feature.properties.id}"]`));
            root.render(
            <Overview 
            title={feature.properties.title}
            description={feature.properties.description}
            image={`/uploads/${feature.properties.image}`}
            friends={feature.properties.participants} />);
          }, 100);
          
          });
           
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
          new mapboxgl.Popup({ offset: 25, anchor: "bottom" }) // add popups
            .setHTML(
              `
              <div data-overview="${feature.properties.id}">
              `
            )
        ).addTo(map);
        
      }
    });
    
    // <h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>
    //           <img alt="zdjecie" src="/uploads/${feature.properties.image}" onerror="this.style.display='none';"/>
    //           <br>
    //           <div class="quest">You want to Join ?</div>
    //           <div class="center-ob">
    //           <input type="button" class="acpt" value="Join!"/>
    //           </div>
    //           <br>
    //           <h2>Twój znajomy bierze udział:<br>${feature.properties.participants[0]}</h2>

    // Clean up on unmount
    return () => map.remove();
  }, []);



  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;