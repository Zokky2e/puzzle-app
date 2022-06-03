import React from "react";
import Puzzle from "./Puzzle";

function PuzzleList(props) {
    console.log(props.images)
  return (
    <ul style={{display: "flex", flexWrap: "wrap", zIndex:"-1", margin: "1em 3em"}}>
      {props.images.map((puzzle, index) => (
        <Puzzle image={puzzle.img} index={index}/>
      ))}
    </ul>
  );
}

export default PuzzleList;
