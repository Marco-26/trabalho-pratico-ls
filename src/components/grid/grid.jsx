import React,{ useState } from "react";
import '../reset.css';
import './grid.css';

const Grid = (props) => {
    const {gridSize} = props;

    const[cells] = useState(Array.from({ length : 64 }))
    
    return(
        <div className="grid-container">
            <div className="grid">
                {cells.map(() => <div className="cell"></div>)}
            </div>
            <div className="words">
                {/* isto vai ser um array de palavras que estao num ficheiro */}
                <p>Linguagens script</p>
                <p>React</p>
                <p>Html</p>
                <p>Css</p>
                <p>Backbone</p>
                <p>Angular</p>
                <p>Ember</p>
            </div>
        </div>
    );
    
}

export default Grid;