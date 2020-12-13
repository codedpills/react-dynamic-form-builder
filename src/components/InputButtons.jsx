import React from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const InputButtons = (props) => {
  const createSingleLineInput = () => {
    const input = {
      name: `singleline-${uuidv4()}`,
      type: "singleLine",
      label: "Single Line",
      placeholder: "Enter text",
      predefinedValue: "",
    };
    props.singleLineInput(input);
  };
  const createMultiLineInput = () => {
    const input = {
      name: `multiline-${uuidv4()}`,
      type: "multiLine",
      label: "Multiline",
      placeholder: "Enter long text",
      predefinedValue: "",
    };
    props.multiLineInput(input);
  };
  return (
    <>
      <Button variant="outline-secondary" block onClick={createSingleLineInput}>
        Single Line
      </Button>
      <Button variant="outline-secondary" block onClick={createMultiLineInput}>
        Multiple Line
      </Button>
      <Button variant="outline-secondary" block>
        Number
      </Button>
      <Button variant="outline-secondary" block>
        Email
      </Button>
      <Button variant="outline-secondary" block>
        Phone
      </Button>
      <Button variant="outline-secondary" block>
        Date
      </Button>
      <Button variant="outline-secondary" block>
        Time
      </Button>
      <Button variant="outline-secondary" block>
        Address
      </Button>
      <Button variant="outline-secondary" block>
        Dropdown
      </Button>
      <Button variant="outline-secondary" block>
        Radio
      </Button>
      <Button variant="outline-secondary" block>
        Checkbox
      </Button>
    </>
  );
};

export default InputButtons;
