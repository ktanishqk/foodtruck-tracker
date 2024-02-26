import React from 'react';
import FoodTruckAccordion from './FoodTruckAccordion';
import { Spinner } from 'baseui/spinner';
import { styled } from 'baseui';

const FoodTrucksDisplay = ({ isLoading, foodTrucks }) => {
  
    const trucksArray = foodTrucks && foodTrucks['food_trucks'] ? foodTrucks['food_trucks'] : [];
const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});
return (
    <div className="food-trucks-display">
      {isLoading ? (
        <Centered>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Spinner />
          </div>
        </Centered>
      ) : (
        <div>
          <h2>Food Trucks</h2>
          {foodTrucks && foodTrucks.food_trucks && foodTrucks.food_trucks.length > 0 ? (
            foodTrucks.food_trucks.map((truck, index) => (
              <FoodTruckAccordion key={index} truck={truck} />
            ))
          ) : (
            <div>No food trucks available</div>
          )}
        </div>
      )}
    </div>
  );
};
export default FoodTrucksDisplay;
