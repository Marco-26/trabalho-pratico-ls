import { Header } from "./components/index";
import { Grid } from "./components/index";
import React, {useState} from "react";


function App() {

  const [gridSize, setGridSize] = useState(0);

  const handleGridSizeChange = (e)=>{
      console.log("Nivel selecionado", e.currentTarget.value);
      // if(e.currentTarget.value == 0 ) return;
      if(e.currentTarget.value == 1) setGridSize(64);
      if(e.currentTarget.value == 2) setGridSize(100);
      if(e.currentTarget.value == 3) setGridSize(144);
  }

  return (
    <div className="App">
      <Header onGridChange={handleGridSizeChange}/>
      <Grid gridSize={gridSize}/>
    </div>
  );
}

export default App;
