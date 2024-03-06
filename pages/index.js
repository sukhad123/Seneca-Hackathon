
import React from "react";
import { useRouter } from 'next/router';
import { useEffect,useState, useMemo } from 'react';
import { GoogleMap, Circle, LoadScript, MarkerF, Polygon } from "@react-google-maps/api";
import Model from '@/components/modelWindow'


const mapContainerStyle = {
  width: '100%',
  height: '100vh'
};

const markers = [
  { position: { lat: 55, lng:-106 }, id: 1 , title:"Saskatchewan province"},
  { position: { lat: 46.25, lng: -63}, id: 2, title:"Prince Edward Island" },
  { position: { lat: 50, lng:-85 }, id: 3 , title:"Ontario"},
  { position: { lat: 45, lng: -63}, id: 4, title:"Nova Scotia" },
  { position: { lat: 55, lng:-115 }, id: 5 , title:"Alberta"},
  { position: { lat: 53.72, lng: -127}, id: 6, title:"British Columbia" },
  { position: { lat: 56, lng:-127.64 }, id: 7 , title:"Manitoba"},
  { position: { lat: 53.13, lng: -57.66}, id: 8, title:"Newfoundland and Labrador" },
  { position: { lat: 46.49, lng:-66 }, id: 9 , title:"New Brunswick"},
  { position: { lat: 53, lng: -70}, id: 10, title:"Quebec" },
  // Add more markers as needed
];
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
    const [selectedMarkerTitle, setSelectedMarkerTitle] = useState("");
    const handleMarkerClick = (title) => {
      console.log("Marker clicked");
      setSelectedMarkerTitle(title);
      hide(true);
    };
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
         {markers.map(marker => (
          
          <MarkerF
          key={marker.id}
          position={marker.position}
          onClick={() => handleMarkerClick(marker.title)}
          icon={{
           url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-1024.png",
           scaledSize: { width: 100, height: 100 } // Set the width and height directly
           
         }}
          
        />
        ))}
    
       {/* <Circle center ={center} radius={1500000000} 
       options={{
        strokeColor: 'red', // Outline color
        strokeOpacity: 0.8, // Outline opacity
        strokeWeight: 2, // Outline thickness
        fillColor: 'red', // Fill color
        fillOpacity: 0.35 // Fill opacity
      }}></Circle> */}
     
      </GoogleMap>
       
      {show && (
        <Model onClose={closeModal}>
          <h2>{selectedMarkerTitle}</h2>
          <p>Details about the marker...</p>
        </Model>
      )}
        
  
    </LoadScript>
    

    
  );
}
