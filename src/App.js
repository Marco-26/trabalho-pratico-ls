import { Header } from "./components/index";
import { Grid } from "./components/index";
import React, { useState } from "react";

function App() {
  // const [gridSize, setGridSize] = useState(0);
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);

  // const handleGame = (e) => {
  //   console.log("Nivel selecionado", e.currentTarget.value);
  //   // if (e.currentTarget.value == 0) return;

  //   if (e.currentTarget.value == 1) {
  //     setGridSize(64);
  //   }
  //   if (e.currentTarget.value == 2) {
  //     setGridSize(100);
  //   }
  //   if (e.currentTarget.value == 3) {
  //     setGridSize(144);
  //   }
  // };

  const handleLevel = (e) => {
    if (e.currentTarget.value == 0) {setLevel(0); setTimer(0);}
    if (e.currentTarget.value == 1) {setLevel(1); setTimer(4);}
    if (e.currentTarget.value == 2) {setLevel(2); setTimer(3);}
    if (e.currentTarget.value == 3) {setLevel(3); setTimer(2);}
  };

  return (
    <div className="App">
      <Header level={level} handleLevel={handleLevel} timer={timer}/>
      <Grid level={level}/>
    </div>
  );
}

export default App;
