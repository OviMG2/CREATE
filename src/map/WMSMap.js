// src/MapComponent.js
import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WMSMap = ({height}) => {
    return (
        <MapContainer
            center={[48.117266, -1.6777926]} // Rennes
            zoom={13}
            style={{ height: height, width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <WMSTileLayer
                url="https://public.sig.rennesmetropole.fr/geoserver/ows"
                layers="log_immo:v_batiment_desc"
                format="image/png"
                transparent={true}
            />
            <WMSTileLayer
                url="http://localhost:8080/geoserver/ows"
                layers="project_create:gothernburg"
                format="image/png"
                transparent={true}
            />
        </MapContainer>
    );
};

export default WMSMap;
