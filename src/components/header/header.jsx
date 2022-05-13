import React,{ useState } from "react";
import '../reset.css';
import './header.css';

const Header = (props) => {
    const {onGridChange} = props;

    const [level, setLevel] = useState(0);
    const [gameStarted, setGame] = useState(false);

    const handleLevel = (e) => {
        setLevel(e.currentTarget.value);
    }

    const handleGame = () => {
        if (gameStarted) {
            setGame(false);
        } else {
            setGame(true);
        }
    }

    return (
        <div className="header">
            <h1>Sopa de letras - Linguagens Script</h1>
            <h4>Pontuação: </h4>
            <h4>Tempo restante: </h4>
            <select name="dificulty" id="" onChange={handleLevel} disabled={gameStarted==true}>
                    <option value="0" selected>Dificuldade</option>
                    <option value="1">Simples</option>
                    <option value="2">Intermédio</option>
                    <option value="3">Avançado</option>
            </select>
            <br />

            {/* Botoes com conditional rendering */}
            
            {!gameStarted && <button disabled={level == 0} onClick={handleGame}>Começar</button>}
            {gameStarted && <button disabled={level == 0} onClick={handleGame}>Parar jogo</button>}
        </div>
    ); 
}

export default Header;