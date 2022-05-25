import React from "react";
import Puzzle from "./Puzzle";

function PuzzleList(props) {
    console.log(props.images)
  return (
    <ul style={{display: "flex", flexWrap: "wrap", zIndex:"-1"}}>
      {props.images.map((puzzle) => (
        <Puzzle image={puzzle.img} />
      ))}
    </ul>
  );
}

export default PuzzleList;
