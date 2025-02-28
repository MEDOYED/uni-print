import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "./section-map.scss";

const SectionMap = () => {
  const latitude = 49.85746999061118;
  const longitude = 24.038230710903044;
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
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[latitude, longitude]} ref={markerRef}>
          <Popup>Test</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default SectionMap;
