import React, { Component } from "react";
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { styled } from "@mui/material";

const StyledPicker = styled(ChromePicker)({
  width: "100% !important",
  marginTop: "2rem",
});

const StyledButton = styled(Button)({
  width: "100%",
  marginTop: "1rem",
  padding: "1rem",
  fontSize: "2rem",
});

const StyledTextValidator = styled(TextValidator)({
  width: "100%",
  marginTop: "1rem",
  height: "70px",
});

class ColorPickerForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "teal",
      colorName: "",
    };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isUniqueName", (val) => {
      // Return the result of the comparison for validation
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== val.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isUniqueColor", () => {
      // Return the result of the comparison for validation
      return this.props.colors.every(({ color }) => color !== this.state.color);
    });
  }

  handleChangeComplete(newColor) {
    this.setState({ color: newColor.hex, colorName: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = { name: this.state.colorName, color: this.state.color };
    this.props.addNewColor(newColor);
    this.setState({ colorName: "" });
  }

  render() {
    const { color, colorName } = this.state;
    return (
      <div style={{ width: "80%" }}>
        <StyledPicker
          color={color}
          onChangeComplete={(newColor) => {
            this.handleChangeComplete(newColor);
          }}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <StyledTextValidator
            value={colorName}
            variant="filled"
            name="colorName"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isUniqueName", "isUniqueColor"]}
            errorMessages={[
              "This field is Required",
              "Name Already Taken",
              "Color Already Used",
            ]}
          />
          <StyledButton
            variant="contained"
            color="primary"
            style={{
              backgroundColor:
                this.props.colors.length >= this.props.maxColors
                  ? "grey"
                  : color,
            }}
            type="submit"
            disabled={this.props.colors.length >= this.props.maxColors}
          >
            {this.props.colors.length >= this.props.maxColors
              ? "Palette Full"
              : "Add Color"}
          </StyledButton>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
