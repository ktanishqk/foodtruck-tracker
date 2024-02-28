import React, { useState } from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

const CoordinatesInput = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = () => {
    if (latitude && longitude) {
      const lat = parseFloat(latitude);
      const long = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(long)) {
        onSubmit({ latitude: lat, longitude: long });
        setLatitude("");
        setLongitude("");
      } else {
        alert("Please enter valid latitude and longitude values.");
      }
    } else {
      alert("Please enter both latitude and longitude.");
    }
  };

  return (
    <div>
      <Input
        value={latitude}
        onChange={(event) => setLatitude(event.target.value)}
        placeholder="Enter Latitude"
      />
      <Input
        value={longitude}
        onChange={(event) => setLongitude(event.target.value)}
        placeholder="Enter Longitude"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default CoordinatesInput;
