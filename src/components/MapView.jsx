import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Dude from "./Dude";

function MapView({ position, dudeText }) {
  return (
    <div className="row">
      <div className="col">
        <Dude dudeText={dudeText} />
      </div>
      <div className="col mt-5">
        <div className="map">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Your estimated position based on your IP / Browserconnection
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default MapView;
