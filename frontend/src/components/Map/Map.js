import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import * as ReactDOM from "react-dom/client";
import Overview from "./overview";
import { useEvents } from "../../hooks/EventsDataProvider";
import { useFocus } from "../../hooks/EventsFocusProvider";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicml0aXQiLCJhIjoiY2xmb2p0NWtrMHdkMzQ0bnJwcTZlbXh5cSJ9.DGdh4-6fvKJFvt2Pp5ZMNg";

const Map = () => {
  const mapContainerRef = useRef(null);
  const { events } = useEvents();
  const { focusedEvent, setFocusedEvent } = useFocus();

  //console.log(events);

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
        enableHighAccuracy: true,
      },
      showAccuracyCircle: false,
      trackUserLocation: true,
    });
    // Add the control to the map.
    map.addControl(geolocate);

    //FUNKCJA PODCZAS ŁADOWANIA MAPY
    map.on("load", function () {
      //LOKALIZACJA USERA
      geolocate.trigger();

      // Add marker for each feature in places.json
      for (const event of events) {
        // create a HTML element for each feature
        const el = document.createElement("div");
        el.dataset.id = event.id;
        if (event.type === "party") {
          el.className = "markerParty";
        }
        if (event.type === "sport") {
          el.className = "markerSport";
        } else if (event.type === "event") {
          el.className = "markerEvent";
        }
        el.addEventListener("click", () => {
          map.flyTo({
            center: [event.coordinates[0], event.coordinates[1]],
            offset: [0, 120],
          });
          setTimeout(() => {
            const root = ReactDOM.createRoot(
              document.querySelector(`[data-overview="${event.id}"]`)
            );
            root.render(
              <Overview
                title={event.title}
                description={event.description}
                image={`/uploads/${event.image}`}
                friends={"PLACEHOLDER"}
              />
            );
          }, 100);
        });

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(event.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25, anchor: "bottom" }) // add popups
              .setHTML(
                `
              <div data-overview="${event.id}">
              `
              )
          )
          .addTo(map);
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
