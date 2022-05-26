import React, { useState } from "react";
import Draggable from "react-draggable";
import classes from "./Puzzle.module.css";
function Puzzle(props) {
  const [selected, setSelected] = useState(1);
  return (
    <Draggable
      defaultPosition={{ x: 10, y: -15 }}
      grid={[8,4]}
      onStart={() => {
        setSelected(2);
      }}
      onStop={() => {
        setSelected(1);
      }}
    >
      <img
        style={{ zIndex: selected}}
        className={classes.image}
        src={(props?.image).toString()}
        alt="puzzle"
      />
    </Draggable>
  );
}

export default Puzzle;
