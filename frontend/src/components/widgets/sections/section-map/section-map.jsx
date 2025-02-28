import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "./section-map.scss";

const SectionMap = () => {
  const latitude = 49.858044086215145;
  const longitude = 24.03789111445985;
  const zoom = 13;
  const s = "a"; // subdomain

  const markerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 10);
  }, []);

  return (
    <>
      <section className="section-map">
        <MapContainer
          center={[latitude, longitude]}
          zoom={zoom}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* className="leaflet-popup-content-wrapper" */}
          <Marker position={[latitude, longitude]} ref={markerRef}>
            {/* className="leaflet-popup-content-wrapper" */}
            <Popup>вулиця Жовківська, 28</Popup>
          </Marker>
        </MapContainer>
      </section>
    </>
  );
};

export default SectionMap;
