import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

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
    this.removeInput = this.removeInput.bind(this);
    this.duplicateInput = this.duplicateInput.bind(this);
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

  removeInput = (input) => {
    const filteredInputs = this.state.formInputs.filter(
      ({ name }) => name !== input.name
    );
    this.setState({
      formInputs: filteredInputs,
    });
  };

  duplicateInput = (input, itemIndex) => {
    const duplicate = { ...input, name: `${input.type}${uuidv4()}` };
    const newArr = [...this.state.formInputs];
    newArr.splice(itemIndex, 0, duplicate);
    this.setState({
      formInputs: newArr,
    });
  };

  render() {
    console.log(this.state.formInputs.length);
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
            <DynamicForm
              formInputs={this.state.formInputs}
              removeInput={this.removeInput}
              duplicateInput={this.duplicateInput}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateForm;
