import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      zone: "",
    };

    this.TuraifCoords = [{
        lng: 40.0334731731559,
        lat: 32.0141249174088
    }, {
        lng: 39.7613729103972,
        lat: 31.0729649300379
    }, {
        lng: 37.8873355013015,
        lat: 29.8475644830066
    }, {
        lng: 37.5369498209822,
        lat: 30.070883237901
    }, {
        lng: 37.665611,
        lat: 30.332678
    }, {
        lng: 37.9970300578283,
        lat: 30.5005701464423
    }, {
        lng: 37.001314,
        lat: 31.500045
    }, {
        lng: 38.995988,
        lat: 31.996616
    }, {
        lng: 39.200949,
        lat: 32.154262
    }, ];
    
    // Your polygon coordinates for Turaif
    this.AljoufCoords = [{
        lng: 39.7613729103972,
        lat: 31.0729649300379
    }, {
        lng: 37.8882874495232,
        lat: 29.8468655116411
    }, {
        lng: 39.0333533830142,
        lat: 27.1961828149661
    }, {
        lng: 41.0673674897859,
        lat: 27.0859608459654
    }, {
        lng: 42.3136324017425,
        lat: 28.5649820101322
    },] // Your polygon coordinates for Aljouf
    // Define other polygon coordinates here
  }

  onMapReady = (_, map) => {
    this.setState({ map });
  };

  onPlaceChanged = () => {
    const { map } = this.state;
    // Handle Autocomplete place selection and zone identification here
    // Update the "zone" state based on the selected place
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          onReady={this.onMapReady}
          style={{ width: "100%", height: "400px", position: "relative" }}
        >
          <Polygon
            paths={this.TuraifCoords}
            strokeColor="#b5b5a8"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#8BFFF3"
            fillOpacity={0.35}
          />
          <Polygon
            paths={this.AljoufCoords}
            strokeColor="#b5b5a8"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#91FFAD"
            fillOpacity={0.35}
          />
          {/* Add other Polygon components for different zones */}
        </Map>
        {/* Add Autocomplete input and info window components here */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCidslXcpxuYg-BJ0JY4ixqM1DVnV6bxE8",
})(MapContainer);
