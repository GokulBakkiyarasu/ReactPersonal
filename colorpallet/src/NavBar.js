import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Slider from "rc-slider";
import NativeSelect from "@mui/material/NativeSelect";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "rc-slider/assets/index.css";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.changeColorFormat(e.target.value);
  }

  closeSnackBar() {
    this.setState({ open: false });
  }

  render() {
    return (
      <header className="NavBar">
        <div className="logo">
          <Link to="/">Color Picker</Link>
        </div>
        {this.props.showSlider && (
          <div className="slider-container">
            <span>Level: {this.props.level}</span>
            <div className="slider">
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                step={100}
                onChangeComplete={this.props.changeLevel}
              />
            </div>
          </div>
        )}
        <div className="select-container">
          <NativeSelect value={this.state.format} onChange={this.handleChange}>
            <option value="hex">HEX - #ffffff</option>
            <option value="rgb">RGB - rgb(0,0,0)</option>
            <option value="rgba">RGBA - rgba(0,0,0,1.0)</option>
          </NativeSelect>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed!</span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key={"close"}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default NavBar;
