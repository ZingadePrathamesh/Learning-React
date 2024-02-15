

import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 19.12000714884568, // default latitude
  lng: 72.99792433835216, // default longitude
};

const MapDemo = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAlXxUakNVKlEW85L8MHXGnwyNQ9Iuq-go',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapDemo;