import React, { PureComponent } from "react";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledRoot = styled("div")({
  backgroundColor: "white",
  border: "1px solid black",
  height: "190px",
  borderRadius: "5px",
  padding: "0.5rem",
  position: "relative",
  cursor: "pointer",
  "&:hover svg": {
    opacity: 1,
  },
});

const StyledColors = styled("div")({
  backgroundColor: "#dae1e4",
  height: "150px",
  width: "100%",
  borderRadius: "5px",
});

const StyledTitle = styled("h5")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0",
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative",
});

const StyledEmoji = styled("span")({
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
});

const StyledMiniColor = styled("div")({
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  marginBottom: "-4px",
});

const StyledDeleteIcon = styled(DeleteIcon)({
  color: "white",
  backgroundColor: "#eb3d30",
  width: "20px",
  height: "20px",
  position: "absolute",
  right: 0,
  top: 0,
  padding: "10px",
  zIndex: 10,
  opacity: 0,
  transition: "all 0.3s ease-in-out",
});

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleClick() {
    this.props.getNewPalette(this.props.id);
  }

  render() {
    const miniColorBoxes = this.props.colors.map((color) => (
      <StyledMiniColor
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></StyledMiniColor>
    ));
    return (
      <StyledRoot onClick={this.handleClick}>
        <StyledDeleteIcon
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deletePalette}
        />
        <StyledColors>{miniColorBoxes}</StyledColors>
        <StyledTitle>
          {this.props.paletteName}
          <StyledEmoji>{this.props.emoji}</StyledEmoji>
        </StyledTitle>
      </StyledRoot>
    );
  }
}

export default MiniPalette;
