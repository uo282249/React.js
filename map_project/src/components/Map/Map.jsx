import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Paper, Typography, useMediaQuery} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";

const Map = () => {
    const { classes } = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    const coordinates = { lat: 50.8504500, lng: 4.3487800 };
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
            </MapContainer>
        </div>
    );
};

export default Map;
