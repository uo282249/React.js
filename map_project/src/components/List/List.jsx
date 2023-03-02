import React, {useEffect, useState} from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState("restaurants");
    const places = [
        { name: "Cool Place" },
        { name: "Best Beer" },
        { name: "Best Steak" }
    ]
    return (
        <div className={classes.container}>
            <Typography variant="h4">Places and local businesses in the city.</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default List;