import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputButtons from "./InputButtons";

class CreateForm extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <h5>Options</h5>
            <hr />
            <InputButtons />
          </Col>
          <Col>
            <h5>Form</h5>
            <hr />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateForm;
