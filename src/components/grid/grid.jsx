import React,{ useState } from "react";
import '../reset.css';
import './grid.css';
import { data } from "../data"

const Grid = (props) => {
    const {level} = props;
    const[cells] = useState(Array.from({ length : 64 }))
    
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const newData = shuffle(data);

    // dependendo da dificuldade, o jogo apenas tem um certo numero de palavras para serem descobertas
    let wordAmount;

    switch(level){
        case(0):
        wordAmount = 0;
            break;
        case(1):
        wordAmount=3;
            break;
        case(2):
        wordAmount = 5;
            break;
        case(3):
        wordAmount = 7;
            break;
    }
    
    const words = [];

    for (let index = 0; index < wordAmount; index++) {
        words.push(newData[index]);      
    }

    function randomChar() {
        let char = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        char = characters.charAt(Math.floor(Math.random()*characters.length));
        return char;
     }     

    return(
        <div className="grid-container">
            <div className="grid">
                {cells.map(() => <div className="cell">{randomChar()}</div>)}
            </div>
            <div className="words">
                {words.map((word) => (
                    <div>
                        <p>{word}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Grid;