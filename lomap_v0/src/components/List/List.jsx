import React, {useEffect, useState} from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Button} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";
import PlaceEntity from "../../entities/PlaceEntity";
import { v4 as uuid } from 'uuid';


const List = (props) => {
    const classes = useStyles();
    const {places, setPlaces} = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [category, setCategory] = useState("");


    function addPlace(){
        const place = new PlaceEntity();
        place.id = uuid();
        place.name = name;
        place.description = description;
        place.latitude = latitude;
        place.longitude = longitude;
        place.category = category;
        props.setPlaces([...places, place]);
        savePlacesToStorage();
    }
    function savePlacesToStorage(){
        localStorage.setItem("places", JSON.stringify(places));
    }
    function isFormComplete(){
        return name !== "" && description !== "" && latitude !== "" && longitude !== "" && category !== "";
    }

    function clearForm(){
        setName("");
        setDescription("");
        setLatitude("");
        setLongitude("");
        setCategory("");
    }

    function addPlaceAndClearForm(){
        addPlace();
        clearForm();
    }
    return (
        <div className={classes.container}>
            <Typography variant="h4">LoMap</Typography>
            <FormControl className={classes.formControl}>
                <TextField
                    value={name}
                    id="outlined-required"
                    label="Place Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    value={description}
                    id="outlined-multiline-static"
                    label="Place Description"
                    multiline
                    rows={4}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    value={longitude}
                    id="outlined-required"
                    label="Longitude"
                    required
                    onChange={(e) => setLongitude(e.target.value)}
                />
                <TextField
                    value={latitude}
                    id="outlined-required"
                    label="Latitude"
                    required
                    onChange={(e) => setLatitude(e.target.value)}
                />
                <Select
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}>
                    <MenuItem value="Restaurants">Restaurants</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attractions">Attractions</MenuItem>
                </Select>
                <Button type='submit' variant="contained" onClick={addPlaceAndClearForm} disabled={!isFormComplete()}>Add place</Button>

            </FormControl>
            <Grid container spacing={3} className={classes.list} style={{overflow: 'auto'}}>
                {props.places.map((place,i) => (
                    <Grid item key={i} xs={12} >
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};


export default List;