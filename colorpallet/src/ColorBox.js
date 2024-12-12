import { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom/cjs/react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
    };
    this.handleIsCopied = this.handleIsCopied.bind(this);
  }
  handleIsCopied() {
    this.setState({ isCopied: true }, () =>
      setTimeout(() => this.setState({ isCopied: false }), 1500)
    );
  }

  render() {
    const isDarkColor = chroma(this.props.color).luminance() <= 0.08;
    const isLightColor = chroma(this.props.color).luminance() >= 0.5;
    return (
      <CopyToClipboard text={this.props.color} onCopy={this.handleIsCopied}>
        <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
          <div
            className={`ColorBox-copied ${this.state.isCopied ? " show" : ""}`}
            style={{ backgroundColor: this.props.color }}
          ></div>
          <div className={`copy-msg ${this.state.isCopied ? " show" : ""}`}>
            <h1>Copied</h1>
            <p className={isLightColor && "dark-color"}>{this.props.color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={`color-name ${isDarkColor && "light-color"}`}>
                {this.props.name}
              </span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {this.props.showLink && (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className={`more-shades ${isLightColor ? "dark-color" : ""}`}
              >
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
