import React from "react";
import { styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";
import chroma from "chroma-js";
import sizes from "./sizes";

// Styled component for the box
const StyledRoot = styled("div")({
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-6.7px",
  "&:hover svg": {
    color: "white",
    transform: "scale(1.5)",
  },
  [sizes.down("l")]: {
    width: "25%",
    height: "20%",
  },

  [sizes.down("m")]: {
    width: "50%",
    height: "10%",
  },

  [sizes.down("sm")]: {
    width: "100%",
    height: "5%",
  },

  [sizes.down("xs")]: {
    width: "100%",
    height: "5%",
  },
});

const StyledBoxContent = styled("div")(({ color }) => ({
  position: "absolute",
  width: "100%",
  left: 0,
  bottom: 0,
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  color:
    chroma(color).luminance() <= 0.08
      ? "rgba(255,255,255,0.8)"
      : "rgba(0,0,0,0.6)",
  [sizes.down("sm")]: {
    alignItems: "center",
  },
}));

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
}));

const DraggableColorBox = SortableElement((props) => {
  return (
    <StyledRoot style={{ backgroundColor: props.color }}>
      <StyledBoxContent color={props.color}>
        <span>{props.name}</span>
        <span>
          <StyledDeleteIcon
            onClick={() => {
              props.removeColor(props.name);
            }}
          />
        </span>
      </StyledBoxContent>
    </StyledRoot>
  );
});

export default DraggableColorBox;
