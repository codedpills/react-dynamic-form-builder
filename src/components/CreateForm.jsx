import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DynamicForm from "./DynamicForm";
import InputButtons from "./InputButtons";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInputs: [
        {
          name: "number-123lkfs",
          type: "number",
          label: "Number",
          placeholder: "Enter number",
          predefinedValue: "",
        },
        {
          name: "email-123lkfs",
          type: "email",
          label: "Email",
          placeholder: "Enter email",
          predefinedValue: "",
        },
        {
          name: "date-123lkfs",
          type: "date",
          label: "Date",
          placeholder: "Enter date",
          predefinedValue: "",
        },
      ],
    };
  }
  addSingleLineInput = (input) => {
    this.setState({
      formInputs: [...this.state.formInputs, input],
    });
  };
  addMultiLineInput = (input) => {
    this.setState({
      formInputs: [...this.state.formInputs, input],
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <h5>Options</h5>
            <hr />
            <InputButtons
              singleLineInput={this.addSingleLineInput}
              multiLineInput={this.addMultiLineInput}
            />
          </Col>
          <Col xs={1}></Col>
          <Col>
            <h5>Form</h5>
            <hr />
            <DynamicForm formInputs={this.state.formInputs} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateForm;
