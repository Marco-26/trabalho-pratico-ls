import React,{ useState } from "react";
import '../reset.css';
import './grid.css';
import { data } from "../data"

const Grid = (props) => {
    // const {gridSize} = props;
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const[cells] = useState(Array.from({ length : 64 }))
    const newData = shuffle(data);
    return(
        <div className="grid-container">
            <div className="grid">
                {cells.map(() => <div className="cell"></div>)}
            </div>
            <div className="words">
                {newData.map((word) => (
                    <div>
                        <p>{word}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Grid;