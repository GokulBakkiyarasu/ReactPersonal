import { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeColorFormat(val) {
    this.setState({ format: val });
  }

  render() {
    return (
      <div className="Palette">
        <NavBar
          level={this.state.level}
          changeLevel={this.changeLevel}
          changeColorFormat={this.changeColorFormat}
          showSlider={true}
        />
        <div className="Palette-colors">
          {this.props.palette.colors[this.state.level].map((color) => (
            <ColorBox
              color={color[this.state.format]}
              name={color.name}
              key={color.id}
              id={color.id}
              paletteId={this.props.palette.id}
              showLink={true}
            />
          ))}
        </div>
        {/* footer goes here */}
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default Palette;
