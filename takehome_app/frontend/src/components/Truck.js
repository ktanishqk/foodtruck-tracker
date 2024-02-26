import React, { useRef, useEffect } from 'react';

const Truck = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    };
    
    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default Truck;
