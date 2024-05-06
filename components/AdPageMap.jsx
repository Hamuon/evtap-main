"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../constants";

<<<<<<< HEAD
function AdPageMap({lat, lon}) {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({
    latitude: lat? lat : 38.074,
    longitude: lon? lon : 46.296,
=======
function AdPageMap({ latitude, longitude }) {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({
    latitude: latitude ? latitude : 38.074,
    longitude: longitude ? longitude : 46.296,
>>>>>>> a83dc296f475e894400a9273238cb8887e8a32db
  });

  return (
    <MapContainer
      className="w-full h-full"
      center={[coords.latitude, coords.longitude]}
      zoom={13}
      scrollWheelZoom={true}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.latitude, coords.longitude]} icon={icon}>
        <Popup>محل کارشناسی</Popup>
      </Marker>
    </MapContainer>
  );
}

export default AdPageMap;
