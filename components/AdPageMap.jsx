"use client"
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../constants";

function AdPageMap() {

    const [map, setMap] = useState(null);
    const [coords, setCoords] = useState({
        latitude: 38.0777017,
        longitude: 46.2196279
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
                <Popup >محل کارشناسی</Popup>
            </Marker>
        </MapContainer>
    );
}

export default AdPageMap;
