
import React from "react";
import { useRouter } from 'next/router';
import { useEffect,useState, useMemo } from 'react';
import { GoogleMap, CircleF, LoadScript, MarkerF, Polygon } from "@react-google-maps/api";
import Model from '@/components/modelWindow'
import Markers from '@/datas/markerdata'
import Form from '@/components/form.js'
import DenslyPopulated from '@/datas/denslyPopulated'
import GrowingCities from '@/datas/growingCities'


const mapContainerStyle = {
  width: '100%',
  height: '80vh',
  padding:'10px'
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
    const [selectedMarkerTitle, setSelectedMarkerTitle] = useState("");
    const[selectedMarkerPopulation, setSelectMarkerPopulation] = useState("");
    const[zoom, setZoom] = useState(3.9)
    const [center, setCenter] = useState({ lat: 56.1304, lng: -106.3468 });
    const handleMarkerClick = (title, population,center) => {
      console.log("Marker clicked");
      setSelectedMarkerTitle(title);
      setSelectMarkerPopulation(population);
      setZoom(10);
       
      setCenter(center)
      hide(true);
    };
     const closeModal = () => {
      hide(false);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
       
        setCenter(prevCenter => ({
          lat: 56.1304,
          lng: -106.3468   
        }));
        setZoom(3.9)
      }, 20000); // Update every 20 seconds (20000 milliseconds)
  
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that useEffect runs only once on mount
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCV2uII8uPr54ILPN4NC4hbjAjxWVuK6gU"

      loadingElement={<div>Loading...</div>}
    >
       
      <GoogleMap
    
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options ={options}>
         {Markers.map(marker => (
          
          <MarkerF
          key={marker.id}
          position={marker.position}
          onClick={() => handleMarkerClick(marker.title, marker.population,marker.position)}
          icon={{
           url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-1024.png",
           scaledSize: { width: 30, height: 30} // Set the width and height directly
           
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
       {Object.keys(DenslyPopulated).map((city) => (
        <CircleF
          key={city}
          center={DenslyPopulated[city].center}
          radius={Math.sqrt(DenslyPopulated[city].population) * 1000}
          onClick={() => handleMarkerClick(DenslyPopulated[city].title, DenslyPopulated[city].population,DenslyPopulated[city].center)}
          options={{
            strokeColor: "#FF8080",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF8080",
            fillOpacity: 0.35,
          }}
        />
      ))}
       


     {Object.keys(GrowingCities).map((city) => (
  <MarkerF
    key={city}
    position={GrowingCities[city].center}
    onClick={() => handleMarkerClick(GrowingCities[city].title, GrowingCities[city].details,GrowingCities[city].center)}
    icon={{
      url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
      scaledSize: { width: 40, height: 40 } // Set the width and height directly
    }}
  />
   ))}

   
      </GoogleMap>
       
      {show && (
        <Model onClose={closeModal} title = {selectedMarkerTitle} population ={selectedMarkerPopulation}>
        </Model>
      )}
        <Form/>
    </LoadScript>
  
    
  );
}
