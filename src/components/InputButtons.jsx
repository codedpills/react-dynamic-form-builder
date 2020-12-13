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
  const createNumberInput = () => {
    const input = {
      name: `number-${uuidv4()}`,
      type: "number",
      label: "Number",
      placeholder: "Enter number",
      predefinedValue: "",
    };
    props.numberInput(input);
  };
  const createEmailInput = () => {
    const input = {
      name: `email-${uuidv4()}`,
      type: "email",
      label: "Email",
      placeholder: "Enter email",
      predefinedValue: "",
    };
    props.emailInput(input);
  };
  const createDateInput = () => {
    const input = {
      name: `date-${uuidv4()}`,
      type: "date",
      label: "Date",
      placeholder: "Enter date",
      predefinedValue: "",
    };
    props.dateInput(input);
  };
  const createTimeInput = () => {
    const input = {
      name: `time-${uuidv4()}`,
      type: "time",
      label: "Time",
      placeholder: "Enter time",
      predefinedValue: "",
    };
    props.timeInput(input);
  };
  return (
    <>
      <Button variant="outline-secondary" block onClick={createSingleLineInput}>
        Single Line
      </Button>
      <Button variant="outline-secondary" block onClick={createMultiLineInput}>
        Multiple Line
      </Button>
      <Button variant="outline-secondary" block onClick={createNumberInput}>
        Number
      </Button>
      <Button variant="outline-secondary" block onClick={createEmailInput}>
        Email
      </Button>
      <Button variant="outline-secondary" block onClick={createDateInput}>
        Date
      </Button>
      <Button variant="outline-secondary" block onClick={createTimeInput}>
        Time
      </Button>
      <Button variant="outline-secondary" block>
        Phone
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
