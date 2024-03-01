 
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 56.1304,
  lng: -106.3468
};

const libraries = ['places'];

export default function App() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCV2uII8uPr54ILPN4NC4hbjAjxWVuK6gU"
      libraries={libraries}
      loadingElement={<div>Loading...</div>}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={4}
      />
    </LoadScript>
  );
}
