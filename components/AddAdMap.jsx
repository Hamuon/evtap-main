"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../constants";

function AddAdMap({ setValue }) {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState(null);

  const DEFAULT_LATITUDE = 38.074;
  const DEFAULT_LONGITUDE = 46.296;

  const latitude = coords ? coords.latitude : DEFAULT_LATITUDE;
  const longitude = coords ? coords.longitude : DEFAULT_LONGITUDE;

  const mapHandler = async (e) => {
    setCoords({ latitude: e.latlng.lat, longitude: e.latlng.lng });
    setValue("latitude", e.latlng.lat);
    setValue("longitude", e.latlng.lng);
  };

  useEffect(() => {
    if (map) {
      map.on("click", mapHandler);
    }
  }, [map]);

  return (
    <MapContainer
      className="w-full h-full"
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={true}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          coords ? coords.latitude : latitude,
          coords ? coords.longitude : longitude,
        ]}
        icon={icon}
      >
        <Popup>محل کارشناسی</Popup>
      </Marker>
    </MapContainer>
  );
}

export default AddAdMap;
