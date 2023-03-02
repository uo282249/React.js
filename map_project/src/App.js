import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import './App.css';
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
      <>
          <CssBaseline />
          <Header />
          <Grid container spacing={3} style={{ width: '100%' }}>
              <Grid item xs={12} md={4}> {/*for mobile, take up 12 columns, for desktop, take up 4 columns*/}
                    <List />
              </Grid>
              <Grid item xs={12} md={8}> {/*for mobile, take up 12 columns, for desktop, take up 8 columns*/}
                    <Map />
              </Grid>
          </Grid>
      </>


  );
}

export default App;

