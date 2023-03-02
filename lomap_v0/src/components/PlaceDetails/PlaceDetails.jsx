import React from "react";

const PlaceDetails = ({place}) => {
    return (
        <>
            <h2>
                {place.name}
            </h2>
            <ul>
                <li> Description: {place.description} </li>
                <li> Latitude: {place.latitude} </li>
                <li> Longitude: {place.longitude} </li>
                <li> Category: {place.category} </li>
            </ul>
        </>
    );
};

export default PlaceDetails;