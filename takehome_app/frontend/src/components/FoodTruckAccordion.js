import React from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import Truck from './Truck';

const FoodTruckAccordion = ({ truck }) => {
  return (
    <Accordion>
      <Panel title={truck.Applicant}>
        <Truck latitude={truck.Latitude} longitude={truck.Longitude} />
      </Panel>
    </Accordion>
  );
};

export default FoodTruckAccordion;
