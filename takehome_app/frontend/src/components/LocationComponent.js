import { useEffect } from 'react';

function LocationComponent({ onLocationSuccess, onLocationError }) {
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
      }
    );
  }, []); // location only needed once

  return null;
}

export default LocationComponent;
