import { Header } from "./components/index";
import { Grid } from "./components/index";
import { Popup } from "./components/index";
import React, { useState } from "react";

function App() {
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);
  const [popUpTrigger, setTrigger] = useState(true);

  const handleLevel = (e) => {
    if (e.currentTarget.value == 0) {
      setLevel(0);
      setTimer(0);
    }
    if (e.currentTarget.value == 1) {
      setLevel(1);
      setTimer(4);
    }
    if (e.currentTarget.value == 2) {
      setLevel(2);
      setTimer(3);
    }
    if (e.currentTarget.value == 3) {
      setLevel(3);
      setTimer(0.1);
    }
  };

  const handleTrigger = () => {
    if(popUpTrigger === true){
      setTrigger(false);
    }
    else{
      setTrigger(true);
    }
  }

  return (
    <div className="App">
      <Header popUp={popUpTrigger} handleTrigger={setTrigger} level={level} handleLevel={handleLevel} timer={timer} />
      <Grid level={level} />
      <Popup trigger={popUpTrigger} handleTrigger={handleTrigger} title="Bem-vindo ao jogo" buttonTxt="Começar jogo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac urna
        elit. Aliquam in libero in sapien fringilla vulputate. Pellentesque nunc
        libero, aliquam et vulputate vel, dictum at nisl. Nulla cursus
        pellentesque viverra. Duis ligula orci, vehicula id tincidunt a,
        imperdiet ultrices purus
      </Popup>
    </div>
  );
}

export default App;
