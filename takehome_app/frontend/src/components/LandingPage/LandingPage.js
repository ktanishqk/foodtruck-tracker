import React, { useState } from "react";
import { Heading, HeadingLevel } from 'baseui/heading';
import RadiusComponent from "../RadiusComponent";
import ButtonComponent from "../ButtonComponent";
import FoodTrucksDisplay from "../FoodTrucksDisplay";

const LandingPage = ({ isLoading, foodTrucks, fetchFoodTrucks}) => {
  const [radius, setRadius] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleRadiusChange = (newRadius) => {
    setRadius(newRadius);
  };
  
  const handleClick = async () => {
  setLoading(true);
  try {
    await fetchFoodTrucks(radius);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="landing-page">
      <HeadingLevel>
        <Heading styleLevel={4} marginBottom="50px">Food Truck Finder</Heading>
      </HeadingLevel>
      <RadiusComponent radius={radius} onChange={handleRadiusChange} />
      <ButtonComponent onClick={handleClick} isLoading={loading} />
      <FoodTrucksDisplay foodTrucks={foodTrucks} isLoading={isLoading} />
    </div>
  );
};

export default LandingPage;
