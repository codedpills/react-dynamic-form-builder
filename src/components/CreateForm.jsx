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
          name: "time-123lkfs",
          type: "time",
          label: "Time",
          placeholder: "Enter time",
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
  addNumberInput = (input) => {
    this.setState({
      formInputs: [...this.state.formInputs, input],
    });
  };
  addEmailInput = (input) => {
    this.setState({
      formInputs: [...this.state.formInputs, input],
    });
  };
  addDateInput = (input) => {
    this.setState({
      formInputs: [...this.state.formInputs, input],
    });
  };
  addTimeInput = (input) => {
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
              numberInput={this.addNumberInput}
              emailInput={this.addEmailInput}
              dateInput={this.addDateInput}
              timeInput={this.addTimeInput}
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
