import React from "react";
import { Form } from "react-bootstrap";

const DynamicForm = ({ formInputs }) => {
  const formFields = formInputs.map((input, i) => {
    switch (input.type) {
      case "singleLine":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control type="text" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "multiLine":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={input.placeholder}
            />
          </Form.Group>
        );
      case "number":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control type="number" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "email":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control type="email" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "date":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control type="date" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "time":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control type="time" placeholder={input.placeholder} />
          </Form.Group>
        );

      default:
        break;
    }
  });
  return (
    <Form>
      {/* Render form inputs */}
      {formFields}
    </Form>
  );
};

export default DynamicForm;
