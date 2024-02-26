import React from "react";
import { Button } from "baseui/button";

const ButtonComponent = ({ onClick, isLoading }) => (
  <Button onClick={onClick} disabled={isLoading}>
    {isLoading ? "Loading..." : "Find me food trucks"}
  </Button>
);

export default ButtonComponent;