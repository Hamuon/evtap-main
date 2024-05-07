"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../constants";

function AdPageMap({ lat, long }) {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({
    latitude: 38.074,
    longitude: 46.296,
  });

  console.log(lat, long)
  return (
    <MapContainer
      className="w-full h-full"
      center={[lat ? lat : coords.latitude, long ? long : coords.longitude]}
      zoom={13}
      scrollWheelZoom={true}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat ? lat : coords.latitude, long ? long : coords.longitude]} icon={icon}>
      </Marker>
    </MapContainer>
  );
}

export default AdPageMap;
