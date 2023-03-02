import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Paper, Typography, useMediaQuery} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {

    const classes = useStyles();
    const { places } = props;
    const isMobile = useMediaQuery("(min-width:600px)");
    const coordinates = { lat: 50.8504500, lng: 4.3487800 };

    const defaultIcon = new L.Icon({
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    return (
        <div className={classes.mapContainer}>
            <MapContainer
                center={coordinates}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{height: "100vh"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {places.map((place) => (
                    <Marker key={place.id} position={{lat: place.latitude, lng: place.longitude}} icon={defaultIcon}>
                        <Popup>
                            <div><Typography variant="subtitle1">{place.name} | {place.category}</Typography></div>
                            <div><Typography variant="subtitle3">{place.description}</Typography></div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
