import React, { useState, useEffect } from "react";
import "../reset.css";
import "./grid.css";
import { Board } from "./board";
import Leters from "./leters";

let wordsFound = 0;

const Grid = (props) => {
  const { mapa, palavra, cssRepeat, wordpose, wordAmount,setTrigger,handleGameStart,setWin} = props;
  const [grid, setGrid] = useState(mapa);
  const [posicao, setposicao] = useState([]);
  const [tecla, settecla] = useState([]);
  const [words, setwords] = useState(palavra);
  const [verificou, setverificou] = useState([0]);

  useEffect(() => {
    if (posicao.length >= 2) {
      setposicao([]);
      settecla([]);
    }
  });

  const addClick = (key) => {
    if (grid[key].clicked == false) {
      grid[key] = {
        nome: grid[key].nome,
        pos: grid[key].pos,
        clicked: true,
      };
    }
  };

  const removeClick = (key) => {
    if (grid[key].clicked == true) {
      grid[key] = {
        nome: grid[key].nome,
        pos: grid[key].pos,
        clicked: false,
      };
    }
  };

  const handleClick = (key) => {
    if (posicao.length > 2) {
      setposicao([]);
    }
    setGrid(
      grid.map((cell, i) => {
        if (i === key) {
          if (cell.clicked == false) {
            posicao.push(cell.pos);

            tecla.push(key);

            tecla.sort(function (a, b) {
              return a - b;
            });

            return {
              nome: cell.nome,
              pos: cell.pos,
              clicked: true,
            };
          }
        }
        return cell;
      })
    );
  };

  function verificaPalavra() {
    for (let j = 0; j < wordpose.length; j++) { 
      if (wordpose[j].length == posicao.length) {
        if (
          JSON.stringify(wordpose[j].sort()) === JSON.stringify(posicao.sort())
        ) {
          let a = (verificou[0]+Math.floor(Math.random() * 6)+1*palavra[j].palavra.length)
          verificou.shift()
          verificou.push(a)        
          
          words[j].clicked = true;
          wordsFound++;
          if(wordsFound === wordAmount){
            setTrigger(true);
            handleGameStart();
            setWin(true);
            wordsFound = 0;
          }
          return true;
        }
      }
    }
  }

  posicao.sort();
  
  if (posicao.length == 2) {
    posicao.sort();
    let entrou = false;

    if (posicao[0][0] == posicao[1][0]) {
      for (let i = tecla[0] + 1; i < tecla[1]; i++) {
        posicao.push(grid[i].pos);
        tecla.push(i);
      }

      if (verificaPalavra() == true) {
        entrou = true;
        for (let i = tecla[0]; i < tecla[1]; i++) {
          addClick(i);
        }
      }
    }

    if (posicao[0][2] == posicao[1][2]) {
      let i = tecla[0];

      do {
        i = i + cssRepeat;
        posicao.push(grid[i].pos);
        tecla.push(i);
      } while (i < tecla[1] - cssRepeat);

      if (verificaPalavra() == true) {
        entrou = true;
        let i = tecla[0];
        do {
          i = i + cssRepeat;
          addClick(i);
        } while (i < tecla[1] - cssRepeat);
      }
    }

    let arrei = posicao;
    let ar = [];
    arrei.forEach((element) => {
      let num = element.split("-");
      ar.push(parseInt(num[0]));
      ar.push(parseInt(num[1]));
    });

    if (ar[2] - ar[0] == ar[3] - ar[1]) {
      let i = tecla[0];
      do {
        i = i + cssRepeat + 1;
        posicao.push(grid[i].pos);
        tecla.push(i);
      } while (i < tecla[1] - 2 * cssRepeat);

      if (verificaPalavra() == true) {
        entrou = true;
        let i = tecla[0];
        do {
          i = i + cssRepeat + 1;
          addClick(i);
        } while (i < tecla[1] - cssRepeat);
      }
    }

    if (ar[2] - ar[1] == ar[0] - ar[3]) {
      let i = tecla[0];
      do {
        i = i + cssRepeat - 1;
        posicao.push(grid[i].pos);
        tecla.push(i);
      } while (i < tecla[1] - cssRepeat);

      if (verificaPalavra() == true) {
        entrou = true;
        let i = tecla[0];
        do {
          i = i + cssRepeat - 1;
          addClick(i);
        } while (i < tecla[1]);
      }
    }

    if (entrou == false) {
      removeClick(tecla[0]);
      removeClick(tecla[1]);
    }
  }

  return (
    <div>
      <p className="points">Pontuação: {verificou[0]}</p>
      <div className="grid-container">
        <br></br>
        <Board cssRepeat={cssRepeat}>
          {grid.map((cell, i) => (
            <Leters
              letra={cell.nome}
              i={i}
              handleClick={handleClick}
              clicked={cell.clicked}
            />
          ))}
        </Board>
        <div className="words">
          {words.map((word) => (
            <div
              style={{
                backgroundColor: word.clicked ? "rgb(100, 2300, 136)" : "red",
              }}
            >
              <p>{word.palavra}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
