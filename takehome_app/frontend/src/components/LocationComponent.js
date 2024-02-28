import React, { useEffect, useState } from 'react';
import { Button } from 'baseui/button';
import CoordinatesInput from './CoordinatesInput'; 

function LocationComponent({ onLocationSuccess, onLocationError }) {
  const [showCoordinatesInput, setShowCoordinatesInput] = useState(false);

  useEffect(() => {
    // browser request on component mounting
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('User location:', position.coords);
        // let the app know that location was successful
        if (onLocationSuccess) {
          onLocationSuccess(position.coords);
        }
      },
      (error) => {
        console.error('Error getting user location:', error);
        // let the app know that the location threw an error
        if (onLocationError) {
          onLocationError(error);
        }
        setShowCoordinatesInput(true); // show the input component if location is blocked
      }
    );
  }, []); // location only needed once

  const handleCoordinatesSubmit = (coordinates) => {
    console.log("Submitted coordinates:", coordinates);
    if (onLocationSuccess) {
      onLocationSuccess(coordinates);
    }
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      {showCoordinatesInput ? (
        <CoordinatesInput onSubmit={handleCoordinatesSubmit} />
      ) : (
        <Button onClick={() => setShowCoordinatesInput(true)}>Enter Coordinates</Button>
      )}
    </div>
  );
}

export default LocationComponent;
