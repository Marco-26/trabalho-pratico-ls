import React from "react";
import "../reset.css";
import "./grid.css";
import { data } from "../data";
import { Board } from "./board"

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
      wordAmount = 5;
      cellQuantity = 81;
      cssRepeat = 9;
      break;
    case 3:
      wordAmount = 7;
      cellQuantity = 100;
      cssRepeat = 10;
      break;
    default:
      break;
  }  

  let words = getData(wordAmount);

  return (
    <div className="grid-container">
      <Board cssRepeat={cssRepeat}>{generateGrid(cellQuantity)}</Board>
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

function getData(wordAmount){
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newData = shuffle(data);

  const words = [];

  for (let index = 0; index < wordAmount; index++) {
    words.push(newData[index]);
  }

  return words;
}

function generateGrid(cellQuantity){
    const cellsArray = [];
    let word = "php"; // a lista de palavras escolhidas

    let generate = true;
    for (let i = 0; i < cellQuantity; i++) {
      if (generate) {
        i += word.length-1; // devemos adicionar ao index a length das palavras selecionadas
        cellsArray.push(generateWord(word, i));
      } else {
        cellsArray.push(<div className="cell" key={i}>{randomChar()}</div>);
      }
      generate = false;
    }

    return cellsArray;
}

function randomChar() {
  let char = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  char = characters.charAt(Math.floor(Math.random() * characters.length));
  return char;
}

function generateWord(word,index) {
  let wordArr = [];
  for (const value of word) {
    wordArr.push(<div className="cell" key={index}>{value}</div>);
  }
  return wordArr;
}

export default Grid;
