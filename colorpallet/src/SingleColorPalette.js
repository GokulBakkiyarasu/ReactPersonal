import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./SingleColorPalette.css";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this._shades = this.getShades(this.props.palette, this.props.colorId);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  getShades(palette, colorId) {
    var shades = [];
    for (let shade in palette.colors) {
      shades.push(
        palette.colors[shade].filter((color) => color.id === colorId)[0]
      );
    }
    return shades.slice(1);
  }

  changeColorFormat(val) {
    this.setState({ format: val });
  }

  render() {
    return (
      <div className="SingleColorPalette Palette">
        <NavBar changeColorFormat={this.changeColorFormat} />
        <div className="Palette-colors">
          {this._shades.map((color) => (
            <ColorBox
              color={color[this.state.format]}
              name={color.name}
              key={color.name}
              showLink={false}
              showSlider={false}
            />
          ))}
          <div className="go-back ColorBox">
            <Link
              className="back-button"
              to={`/palette/${this.props.palette.id}`}
            >
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default SingleColorPalette;
