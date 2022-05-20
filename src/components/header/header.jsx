import React from "react";
import { Timer } from "../index";
import '../reset.css';
import './header.css';

const Header = (props) => {
    const {gameStarted, handleGameStart,handleTrigger,level, handleLevel, timer} = props;

    return(
        <div className="header">
            <h1>Sopa de letras - Linguagens Script</h1>
            <h4>Pontuação: </h4>
            <h4>Tempo restante: {gameStarted ? <Timer timer={timer} setTrigger={handleTrigger} handleGameStart={handleGameStart}/>:"00:00"}</h4>
            <select name="dificulty" id="" onChange={handleLevel} disabled={gameStarted===true}>
                    <option value="0" selected>Dificuldade</option>
                    <option value="1">Simples</option>
                    <option value="2">Intermédio</option>
                    <option value="3">Avançado</option>
            </select>
            <br />

            {/* Botoes com conditional rendering */}
            {!gameStarted && <button disabled={level === 0} onClick={handleGameStart}>Começar</button>}
            {gameStarted && <button disabled={level === 0} onClick={handleGameStart}>Parar jogo</button>}
        </div>
    ); 
}

export default Header;