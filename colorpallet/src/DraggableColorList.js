import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, index) => (
        <DraggableColorBox
          key={color.name}
          index={index}
          color={color.color}
          name={color.name}
          removeColor={removeColor}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
