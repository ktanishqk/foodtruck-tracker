import React, { useRef, useEffect } from 'react';

const Truck = ({ latitude, longitude, address }) => {
  const mapRef = useRef(null);
  console.log(typeof(address))
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

    // Add a info window with the address
    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div><strong>Address:</strong> ${address}</div>`,
    });

    new window.google.maps.event.addListener(map, 'click', () => {
      infoWindow.open(map);
    });
  }, [latitude, longitude, address]);

  return (
    <div>
      <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default Truck;
