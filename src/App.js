import { Header } from "./components/index";
import { Grid } from "./components/index";
import { Popup } from "./components/index";
import React, { useState } from "react";

function App() {
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);
  const [modalTrigger, setTrigger] = useState(false);
  const [gameStarted, setGame] = useState(false);

  const handleLevel = (e) => {
    if (e.currentTarget.value === 0) {
      setLevel(0);
      setTimer(0);
    }
    if (e.currentTarget.value === 1) {
      setLevel(1);
      setTimer(4);
    }
    if (e.currentTarget.value === 2) {
      setLevel(2);
      setTimer(3);
    }
    if (e.currentTarget.value === 3) {
      setLevel(3);
      setTimer(0.1);
    }
  };

  const handleModalTrigger = () => {
    if(modalTrigger === false) setTrigger(true);
    else setTrigger(true);
  }

  const handleGameStart = () => {
    setGame(!gameStarted);
  }

  return (
    <div className="App">
      <Header gameStarted={gameStarted} handleGameStart={handleGameStart} popUp={modalTrigger} handleTrigger={setTrigger} level={level} handleLevel={handleLevel} timer={timer} />
      <Grid popUp={modalTrigger} level={level} />
      <Popup trigger={modalTrigger} handleModalTrigger={handleModalTrigger} title="O tempo acabou!" buttonTxt="Recomeçar">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac urna
        elit. Aliquam in libero in sapien fringilla vulputate. Pellentesque nunc
        libero, aliquam et vulputate vel, dictum at nisl. Nulla cursus
        pellentesque viverra. Duis ligula orci, vehicula id tincidunt a,
        imperdiet ultrices purus.
      </Popup>
    </div>
  );
}

export default App;
