import { Header } from "./components/index";
import { Grid } from "./components/index";
import { Popup } from "./components/index";
import React, { useState } from "react";

function App() {
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);
  const [modalTrigger, setTrigger] = useState(false);
  const [gameStarted, setGame] = useState(false);
  let cells;
  const handleLevel = (e) => {
    if (e.currentTarget.value === '0') {
      setLevel(0);
      setTimer(0);
    }
    if (e.currentTarget.value === '1') {
      setLevel(1);
      setTimer(.1);
    }
    if (e.currentTarget.value === '2') {
      setLevel(2);
      setTimer(.1);
    }
    if (e.currentTarget.value === '3') {
      setLevel(3);
      setTimer(.1);
    }
  };

  switch (level) {
    case 0:
      cells = Array.from({length:0});
      break;
    case 1:
      cells = Array.from({length:64});
      break;
    case 2:
      cells = Array.from({length:90});
      break;
    case 3:
      cells = Array.from({length:100});
      break;
    default:
      break;
  }

  const handleTrigger = () => {
    setTrigger(!modalTrigger);
  }

  const handleGameStart = () => {
    setGame(!gameStarted);
  }

  return (
    //TODO: apenas ativar o componente grid quando comecar o jogo
    <div className="App">
      <Header gameStarted={gameStarted} handleGameStart={handleGameStart} popUp={modalTrigger} handleTrigger={setTrigger} level={level} handleLevel={handleLevel} timer={timer} />
      {gameStarted && <Grid cells={cells} level={level}/>}
      <Popup trigger={modalTrigger} handleTrigger={handleTrigger} title="O tempo acabou!" buttonTxt="Fechar">
        Para a próxima tente ser mais rápido!
      </Popup>
    </div>
  );
}

export default App;
