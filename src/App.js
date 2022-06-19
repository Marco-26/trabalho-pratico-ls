import { Header } from "./components/index";
import { Grid } from "./components/index";
import { Popup } from "./components/index";
import React, { useState } from "react";
import { data } from "./components/data";
import gridtemp from "./Util";

function App() {
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);
  const [modalTrigger, setTrigger] = useState(false);
  const [gameStarted, setGame] = useState(false);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  let cssRepeat, wordAmount;
  
  const handleLevel = (e) => {
    if (e.currentTarget.value === "0") {
      setLevel(0);
      setTimer(0);
    }
    if (e.currentTarget.value === "1") {
      setLevel(1);
      setTimer(4);
    }
    if (e.currentTarget.value === "2") {
      setLevel(2);
      setTimer(3);
    }
    if (e.currentTarget.value === "3") {
      setLevel(3);
      setTimer(2);
    }
  };

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

  let palavra = getData(wordAmount);
  let wordpose = [];

  function getData(wordAmount) {
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    const newData = shuffle(data);

    const words = [];

    for (let index = 0; index < wordAmount; index++) {
      words.push(newData[index]);
    }

    return words;
  }

  let aux = gridtemp(cssRepeat, palavra);

  let grid = aux.mapa;
  wordpose = aux.wordpose;

  for (let j = 0; j < wordpose.length; j++) {
    wordpose[j].sort();
  }

  let tempPalavra = palavra.map((item) => {
    return {
      palavra: item.toUpperCase(),
      clicked: false,
    };
  });

  const handleTrigger = () => {
    setTrigger(!modalTrigger);
  };

  const handleGameStart = () => {
    setGame(!gameStarted);
  };

  const resetWinLost = () =>{
    setLost(false);
    setWin(false);
  }

  return (
    <div className="container_app">
      <Header
        gameStarted={gameStarted}
        handleGameStart={handleGameStart}
        handleTrigger={setTrigger}
        level={level}
        handleLevel={handleLevel}
        timer={timer}
        setLost={setLost}
      />
      {gameStarted && (
        <Grid
          mapa={grid}
          palavra={tempPalavra}
          cssRepeat={cssRepeat}
          wordpose={wordpose}
          wordAmount={wordAmount}
          setTrigger={setTrigger}
          setWin={setWin}
        />
      )}
      {win && (
        <Popup
          trigger={modalTrigger}
          handleTrigger={handleTrigger}
          title="Ganhou o jogo"
          buttonTxt="Fechar"
          resetWinLost={resetWinLost}
          handleGameStart={handleGameStart}
        >
          Parabéns, você ganhou o jogo!
        </Popup>
      )}
      {lost && (
        <Popup
          trigger={modalTrigger}
          handleTrigger={handleTrigger}
          title="O tempo acabou!"
          buttonTxt="Fechar"
          resetWinLost={resetWinLost}
          handleGameStart={handleGameStart}
        >
          Para a próxima tente ser mais rápido!
        </Popup>
      )}
    </div>
  );
}

export default App;
