import React, { useState } from "react";
import "../reset.css";
import "./grid.css";
import { data } from "../data";
import { Board } from "./board";
import produce from "immer";

const Grid = (props) => {
  const { cells, level } = props;
  const [grid, setGrid] = useState(cells);

  let cssRepeat, wordAmount;

  switch (level) {
    case 0:
      wordAmount = 0;
      cssRepeat = 0;
      break;
    case 1:
      wordAmount = 3;
      cssRepeat = 8;
      break;
    case 2:
      wordAmount = 4;
      cssRepeat = 9;
      break;
    case 3:
      wordAmount = 5;
      cssRepeat = 10;
      break;
    default:
      break;
  }

  let words = getData(wordAmount);

  return (
    <div className="grid-container">
      <Board cssRepeat={cssRepeat}>
        {grid.map((i) => (
          <div
            key={i}
            className="cell"
          >
            {randomChar()}
          </div>
        ))}
        ;
      </Board>
      <div className="words">
        {words.map((word) => (
          <div>
            <p>{word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function getData(wordAmount) {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newData = shuffle(data);

  const words = [];

  for (let index = 0; index < wordAmount; index++) {
    words.push(newData[index]);
  }

  return words;
}

function randomChar() {
  let char = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  char = characters.charAt(Math.floor(Math.random() * characters.length));
  return char;
}

export default Grid;
