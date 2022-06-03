import React, { useState } from "react";
import Draggable from "react-draggable";
import classes from "./Puzzle.module.css";
function Puzzle(props) {
  const [selected, setSelected] = useState(1);
  console.log(props.index);
  return (
    <div className={classes.place}>
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        grid={[8, 4]}
        onStart={() => {
          setSelected(2);
        }}
        onStop={() => {
          setSelected(1);
        }}
      >
        <img
          style={{ zIndex: selected }}
          className={classes.image}
          src={(props?.image).toString()}
          alt="puzzle"
        />
      </Draggable>
    </div>
  );
}

export default Puzzle;
