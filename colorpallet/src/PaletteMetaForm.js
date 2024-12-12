import React, { Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      paletteName: "",
      emoji: null, // State to handle selected emoji
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isUniquePaletteName", (val) => {
      return this.props.palette.every(
        ({ paletteName }) => paletteName.toLowerCase() !== val.toLowerCase()
      );
    });
  }

  handleSubmit = () => {
    // Call the handleSubmit prop with the paletteName and selected emoji
    this.props.handleSubmit(this.state.paletteName, this.state.emoji);
    this.handleClose();
  };

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleEmojiSelect = (emoji) => {
    this.setState({ emoji }); // Update state with selected emoji
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.hideForm();
  };

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  savePalette(emoji) {
    this.props.handleSubmit({
      paletteName: this.state.paletteName,
      emoji: emoji.native,
    });
    this.setState({ stage: "" });
  }

  render() {
    const { paletteName, stage } = this.state;

    return (
      <React.Fragment>
        <Dialog open={stage === "emoji"} onClose={this.handleClose}>
          <DialogTitle>Choose a Palette Emoji</DialogTitle>
          <Picker title="Pick a Palette Emoji" onSelect={this.savePalette} />
        </Dialog>
        <Dialog open={stage === "form"} onClose={this.handleClose}>
          <DialogTitle>Add Palette</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                To add a new palette, please enter its name and select an emoji.
              </DialogContentText>
              <TextValidator
                label="Palette Name"
                name="paletteName"
                value={paletteName}
                variant="standard"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={["required", "isUniquePaletteName"]}
                errorMessages={[
                  "Please Enter a Palette Name",
                  "Palette Name Already Taken",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Cancel</Button>
              <Button variant="contained" color="primary" type="submit">
                Add Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default PaletteMetaForm;
