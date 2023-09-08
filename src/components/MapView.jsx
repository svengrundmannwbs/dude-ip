import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dude from "../assets/dude.png";

function MapView({ position }) {
  return (
    <div className="row">
      <div className="col">
        <img src={dude} />
      </div>
      <div className="col">
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
