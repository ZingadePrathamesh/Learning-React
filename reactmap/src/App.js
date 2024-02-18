import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import { useState } from 'react';

const center = {lat: 19.1200279, lng: 72.9979173}
const center2 = {lat: 20.1200279, lng: 72.9979173}
const center3 = {lat: 21.1200279, lng: 72.9979173}
const center4 = {lat: 22.1200279, lng: 72.9979173}
const current ={
  lat: 0, lng: 0
}

// navigator.geolocation.getCurrentPosition(
//   function(position) {
//     // Use the user's position (latitude, longitude, etc.) here
//     current.lat = position.coords.latitude
//     current.lng =position.coords.longitude
//     console.log("Latitude:", position.coords.latitude);
//     console.log("Longitude:", position.coords.longitude);
//   },
//   function(error) {
//     // Handle the error here
//     console.error("Error:", error.message);
//   },
//   {
//     enableHighAccuracy: true, // Request high accuracy if possible
//     timeout: 5000, // Wait up to 5 seconds for a response
//     maximumAge: 0 // Don't use cached data
//   }
// )

console.log(current);
function App() {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:["places"],
  })

  if(!isLoaded) return <div>Loading...</div>
  return (
    <div className="App">
      <GoogleMap center={center}
      zoom={16}
      mapContainerStyle={{width:"100%", height:"1080px"}}>
        
        <Marker position={center}/>
        <Marker position={center2}/>
        <Marker position={center3}/>
        <Marker position={center4}/>

      </GoogleMap>
    </div>
  );
}

export default App;
