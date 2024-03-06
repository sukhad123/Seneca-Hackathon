
import React from "react";
import { useRouter } from 'next/router';
import { useEffect,useState, useMemo } from 'react';
import { GoogleMap, Circle, LoadScript, MarkerF, Polygon } from "@react-google-maps/api";
import Model from '@/components/modelWindow'


const mapContainerStyle = {
  width: '90%',
  height: '100vh'
};
const markerStyle={
  color: 'red',
  fontSize: '20px'}
const center = {
  lat: 56.1304,
  lng: -106.3468
};
const ontario = {
  lat:50,
  lng: -85.32
}

const ontarioCoordinates = [
  { lat: 49.0, lng: -95.0 },
  { lat: 49.0, lng: -74.0 },
  { lat: 44.0, lng: -74.0 },
  { lat: 44.0, lng: -80.0 },
  { lat: 41.0, lng: -82.0 },
  { lat: 41.0, lng: -91.0 },
  { lat: 49.0, lng: -95.0 }
];

//const libraries = ['places'];



export default function App() {


  //This is my code to render form after 5 seconds

    // const router = useRouter();
  
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     // Navigate to the desired page after 20 seconds
    //     router.push('/form');
    //   }, 5000); // 20 seconds in milliseconds
  
    //   // Clear the timeout to avoid memory leaks
    //   return () => clearTimeout(timer);
    // }, [router]);
  

    const options = React.useMemo(
      () => ({
        disableDefaultUI: true,
        clickableIcons: false,
      }),
      []
    );

    const[show, hide] = useState(false)
     function handleClick()
     {
      console.log("You clicked me")
      hide(true)
      console.log(show)
     }
     const closeModal = () => {
      hide(false);
    };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCV2uII8uPr54ILPN4NC4hbjAjxWVuK6gU"
      //libraries={libraries}
      loadingElement={<div>Loading...</div>}
    >
       
      <GoogleMap
    
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={4}
        options ={options}>
       <MarkerF
       position = {ontario}
       markerStyle = {markerStyle}
       icon={{
        url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-1024.png",
        scaledSize: { width: 100, height: 100 } // Set the width and height directly
        
      }}
      onClick = {handleClick}
     />
       <Circle center ={center} radius={1500000000} 
       options={{
        strokeColor: 'red', // Outline color
        strokeOpacity: 0.8, // Outline opacity
        strokeWeight: 2, // Outline thickness
        fillColor: 'red', // Fill color
        fillOpacity: 0.35 // Fill opacity
      }}></Circle>
     
      </GoogleMap>
       
      {show && (
          <Model onClose={closeModal}>
            <h2>Marker Details</h2>
            <p>Details about the marker...</p>
          </Model>
        )}
        
  
    </LoadScript>
    

    
  );
}
