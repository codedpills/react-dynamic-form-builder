import React from "react";
import { Form, Col } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import DuplicateButton from "./DuplicateButton";

const DynamicForm = ({ formInputs, removeInput }) => {
  const formFields = formInputs.map((input, i) => {
    switch (input.type) {
      case "singleLine":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Row>
              <Col>
                <Form.Label>{input.label}</Form.Label>
              </Col>

              <Col className="text-right">
                <DuplicateButton />
                <DeleteButton removeInput={removeInput} input={input} />
              </Col>
            </Form.Row>
            <Form.Control type="text" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "multiLine":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Row>
              <Col>
                <Form.Label>{input.label}</Form.Label>
              </Col>

              <Col className="text-right">
                <DeleteButton removeInput={removeInput} input={input} />
              </Col>
            </Form.Row>
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
            <Form.Row>
              <Col>
                <Form.Label>{input.label}</Form.Label>
              </Col>

              <Col className="text-right">
                <DeleteButton removeInput={removeInput} input={input} />
              </Col>
            </Form.Row>
            <Form.Control type="number" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "email":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Row>
              <Col>
                <Form.Label>{input.label}</Form.Label>
              </Col>

              <Col className="text-right">
                <DeleteButton removeInput={removeInput} input={input} />
              </Col>
            </Form.Row>
            <Form.Control type="email" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "date":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Row>
              <Col>
                <Form.Label>{input.label}</Form.Label>
              </Col>

              <Col className="text-right">
                <DeleteButton removeInput={removeInput} input={input} />
              </Col>
            </Form.Row>
            <Form.Control type="date" placeholder={input.placeholder} />
          </Form.Group>
        );
      case "time":
        return (
          <Form.Group controlId={input.name} key={input.name}>
            <Form.Row>
              <Col>
                <Form.Label>{input.label}</Form.Label>
              </Col>

              <Col className="text-right">
                <DeleteButton removeInput={removeInput} input={input} />
              </Col>
            </Form.Row>
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
