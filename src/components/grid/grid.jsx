import React,{ useState } from "react";
import '../reset.css';
import './grid.css';
import { data } from "../data"
import styled from "styled-components"

const Grid = (props) => {
    const {level} = props;
    
    const cellsArray = []
    let cellQuantity, cssRepeat;    

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const newData = shuffle(data);

    // dependendo da dificuldade, o jogo apenas tem um certo numero de palavras e um certo numero de cells
    // para serem descobertas

    let wordAmount;

    switch(level){
        case(0):
            wordAmount = 0;
            cellQuantity = 0;
            cssRepeat = 0;
            break;
        case(1):
            wordAmount=3;
            cellQuantity = 64;
            cssRepeat = 8;
            break;
        case(2):
            wordAmount = 5;
            cellQuantity = 81;
            cssRepeat = 9;
            break;
        case(3):
            wordAmount = 7;
            cellQuantity = 100;
            cssRepeat = 10;
            break;
    }
    
    for(let i=0; i < cellQuantity; i++){
        cellsArray.push(null);
    }
    
    const words = [];

    for (let index = 0; index < wordAmount; index++) {
        words.push(newData[index]);      
    }      

    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(${cssRepeat}, 30px);
    `;

    let word = "Ola"
    let letter;
    for (let index = 0; index <word.length;index++){
        letter = word.charAt(index);
    }
   
    return(
        <div className="grid-container">
            <Grid>
                {/* {cellsArray.map(() => <div className="cell">{letter}</div>)} */}
                {cellsArray.map(() => <div className="cell">{char()}</div>)}
            </Grid>
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

function randomChar() {
    let char = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    char = characters.charAt(Math.floor(Math.random()*characters.length));
    return char;
}  
function char() {
    let test = "Ola";
    return(
    <>
        <ul>
            {(() =>{
                for(let i= 0; i<test.length;i++){
                    return <li>{test.charAt(i)}</li>
                }
            })()}
        </ul>
    </>

    );
}  

export default Grid;