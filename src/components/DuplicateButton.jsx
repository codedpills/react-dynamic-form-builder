import React from "react";
import { Button } from "react-bootstrap";

const DuplicateButton = ({ input, duplicateInput, itemIndex }) => {
  return (
    <Button
      variant="primary"
      onClick={() => {
        duplicateInput(input, itemIndex);
      }}
    >
      Duplicate
    </Button>
  );
};

export default DuplicateButton;
