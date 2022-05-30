import React from "react";
import "../reset.css";
import "./grid.css";
import { data } from "../data";
import { Board } from "./board";

const Grid = (props) => {
  const { level } = props;

  let cellQuantity, cssRepeat, wordAmount;

  switch (level) {
    case 0:
      wordAmount = 0;
      cellQuantity = 0;
      cssRepeat = 0;
      break;
    case 1:
      wordAmount = 3;
      cellQuantity = 64;
      cssRepeat = 8;
      break;
    case 2:
      wordAmount = 4;
      cellQuantity = 81;
      cssRepeat = 9;
      break;
    case 3:
      wordAmount = 5;
      cellQuantity = 100;
      cssRepeat = 10;
      break;
    default:
      break;
  }

  let words = getData(wordAmount);

  return (
    <div className="grid-container">
      <Board cssRepeat={cssRepeat}>{generateGrid(cellQuantity, words)}</Board>
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

function generateGrid(cellQuantity, words) {
  const cellsArray = [];

  let tempWords = [...words];
  
  let random = [];

  for (let index = 0; index < tempWords.length; index++) {
    random[index] = Math.floor(Math.random() * cellQuantity);   
  }
  random.sort(function(a, b){return a - b});

  for (let index = 0; index < cellQuantity; index++) {
    for (let i = 0; i < tempWords.length; i++) {
      tempWords[i].split('').map(item => cellsArray.push(<div className="cell">{item}</div>));
      index+=tempWords[i].length
      tempWords.shift();
      break;
    }
    cellsArray.push(<div className="cell">{randomChar()}</div>);
  }

  return cellsArray;
}

function randomChar() {
  let char = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  char = characters.charAt(Math.floor(Math.random() * characters.length));
  return char;
}

export default Grid;
