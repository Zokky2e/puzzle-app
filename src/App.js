import React from "react";

import classes from "./App.module.css";
import PuzzleList from "./PuzzleList";
import { images } from "./images";

function App() {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return (
    <div className={classes.frame}>
      <PuzzleList images={shuffled}/>
    </div>
  );
}

export default App;
