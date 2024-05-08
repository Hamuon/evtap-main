"use client";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../constants";
import axios from "axios";

function Map({ setValue, setMapOpen }) {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState(null);

  const DEFAULT_LATITUDE = 38.074;
  const DEFAULT_LONGITUDE = 46.296;

  const latitude = coords ? coords.latitude : DEFAULT_LATITUDE;
  const longitude = coords ? coords.longitude : DEFAULT_LONGITUDE;

  const mapHandler = async (e) => {
    setCoords({ latitude: e.latlng.lat, longitude: e.latlng.lng });
  };

  useEffect(() => {
    const config = {
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExMTc0YmFlMTdjNGVhOWE1MjAwZmRiMjg5NzFiYTBiM2M5MTU2NGZlODk3OTUyMzQ4Y2ZlYzEyYjhmZGViYjI2ZTQzMTI0N2UxYzRlNzgwIn0.eyJhdWQiOiIyMjA5MSIsImp0aSI6IjExMTc0YmFlMTdjNGVhOWE1MjAwZmRiMjg5NzFiYTBiM2M5MTU2NGZlODk3OTUyMzQ4Y2ZlYzEyYjhmZGViYjI2ZTQzMTI0N2UxYzRlNzgwIiwiaWF0IjoxNjgyOTMyMjE0LCJuYmYiOjE2ODI5MzIyMTQsImV4cCI6MTY4NTUyNDIxNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.huFPDzzZeqLjW8qummnC9aAEZbpiM2Ej3Uhc0AmiRw-VrN8rx0OKyQj-olsPwxNksD0mQ9jRmZByGm_ntTQQyxmIvhJrBe9M4QhlGY8ilkauQf1ogDz2sNy76UP6ly8Uk4tXoWuupklvMG5TYMPUkOsX73_6izWa-fIFC-lpNdBhpf6rSF4LjP4svQzH8mHH_PhJyGXN-CUHoyBXvvNtfmdBp8iaa0msvBQemPdIyqfmxqSC4asOOpSxOXl_bx0NPXZpBDa2j0uAJPvC7GjQsn5UOmQJDvLI7nASn7VWi_0SN21F8WpdGKmMSNQoSZtMIO1pVlQtKD9PVbceNODzgg",
      },
    };
    axios
      .get(
        `https://map.ir/reverse/no?lat=${coords ? coords.latitude : latitude
        }&lon=${coords ? coords.longitude : longitude}`,
        config
      )
      .then((res) => {
        if (res.status === 200) {
          setValue("address", res.data.address_compact);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coords]);

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
      zoomControl={false} // Disable default zoom control
    >
      <TileLayer
        attribution='<a href="http://evtap.ir">Evtap</a>'
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
      <ZoomControl position="bottomleft" /> {/* Custom zoom control */}
    </MapContainer>
  );
}

export default Map;
