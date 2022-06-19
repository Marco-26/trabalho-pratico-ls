import React from "react";
import { Timer } from "../index";
import '../reset.css';
import './header.css';
import { data } from "../data";

const Header = (props) => {
    const {gameStarted, handleGameStart,handleTrigger,level, handleLevel, timer,setLost} = props;

    function addWord(){
        var word = prompt("Insira uma palavra:");
        if (word === "") {
            return;
        } else if (word) {
            data.push(word);
        }
    }

    return(
        <div className="header">
            <h1>Sopa de letras - Linguagens Script</h1>
            {gameStarted && <h1><Timer timer={timer} setTrigger={handleTrigger} setLost={setLost}/></h1>}
            <button className="button-5" onClick={() => addWord()} disabled={gameStarted===true} style={{backgroundColor: gameStarted ? "#dadada" : "#fa6400", cursor: gameStarted ? 'auto' : 'pointer'}}>Adicionar palavra</button>
            <select className="select" name="dificulty" id="" onChange={handleLevel} disabled={gameStarted===true} style={{backgroundColor: gameStarted ? "#dadada" : "#fa6400", cursor: gameStarted ? 'auto' : 'pointer'}}>
                    <option value={0}>Dificuldade</option>
                    <option value={1}>Simples</option>
                    <option value={2}>Intermédio</option>
                    <option value={3}>Avançado</option>
            </select>
            <br />

            {/* Botoes com conditional rendering */}
            {!gameStarted && <button className="button-5 start" disabled={level === 0} onClick={handleGameStart} style={{backgroundColor: level === 0 ? "#dadada" : "#fa6400", cursor: level === 0 ? 'auto' : 'pointer'}}>Começar</button>}
            {gameStarted && <button className="button-5 start" disabled={level === 0} onClick={handleGameStart} style={{backgroundColor: level === 0 ? "#dadada" : "#fa6400", cursor: level === 0 ? 'auto' : 'pointer'}}>Parar jogo</button>}
        </div>
    ); 
}

export default Header;