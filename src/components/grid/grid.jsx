import React, { useState } from "react";
import "../reset.css";
import "./grid.css";
import { data } from "../data";
import styled from "styled-components";

const Grid = (props) => {
  const { level } = props;

  const cellsArray = [];
  let cellQuantity, cssRepeat;

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newData = shuffle(data);

  // dependendo da dificuldade, o jogo apenas tem um certo numero de palavras e um certo numero de cells
  // para serem descobertas

  let wordAmount;

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
  }

  const words = [];

  for (let index = 0; index < wordAmount; index++) {
    words.push(newData[index]);
  }

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${cssRepeat}, 30px);
  `;

  return (
    <div className="grid-container">
      <Grid>{generateGrid(cellsArray,cellQuantity)}</Grid>
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

function generateGrid(cellsArray, cellQuantity){
    let word = "php";

    let generate = true;
    for (let i = 0; i < cellQuantity; i++) {
      if (generate) {
        cellsArray.push(generateWord(word));
        i+=word.length-1; // devemos adicionar ao index a length das palavras selecionadas
      } else {
        cellsArray.push(<div className="cell">{randomChar()}</div>);
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

function generateWord(word) {
  let wordArr = [];
  for (const value of word) {
    wordArr.push(<div className="cell">{value}</div>);
  }
  return wordArr;
}

export default Grid;
