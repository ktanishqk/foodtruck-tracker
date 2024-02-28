import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import LocationComponent from './components/LocationComponent';
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import LandingPage from './components/LandingPage/LandingPage';

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5432', 
  headers: {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
  },
});

function App() {
  const defaultLocation = {
    latitude: 37.785717,
    longitude: -122.401161
  };
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSuccess = (coords) => {
    // got coordinates on app startup
    instance.post('/api/save-location', JSON.stringify({ "latitude": coords.latitude, "longitude": coords.longitude }))
      .then(response => {
        console.log('Backend response:', response.data);
      })
    console.log('User location:', coords);
  };

  const handleLocationError = (error) => {
    // just in case the coords throw an error
    console.error('Error getting user location:', error);
    instance.post('/api/save-location', JSON.stringify({ "latitude": defaultLocation.latitude, "longitude": defaultLocation.longitude }));
  };

  const fetchFoodTrucks = async (radius) => {
    setIsLoading(true);
    try {
      const response = await instance.get('/api/foodtrucks', {
        params: {
          radius: radius
        }
      });
      setFoodTrucks(response.data);
    } catch (error) {
      console.error('Error fetching food trucks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Centered>
            <LocationComponent
              onLocationSuccess={handleLocationSuccess}
              onLocationError={handleLocationError}
            />
            <LandingPage 
              foodTrucks={foodTrucks} 
              isLoading={isLoading} 
              fetchFoodTrucks={fetchFoodTrucks} 
            />
          </Centered>
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
