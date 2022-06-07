import React, {useState} from 'react';
import Board from './Board';
import'./Game.css'
import Square from './Square';
const Game = () => {
    const [board, setboard] = useState(Array.from({length:30}, (_, i) => <input key={i} value =""/>))
    const Handle = (index)=>{
        const boardcopy = [...board]
        setboard(boardcopy)
        boardcopy[index] = {index};
        return index;
    }
    return (
        <div className='wrapper'>
            <Board squares={board} input={Handle}/>
        </div>
    );
    
}

export default Game;
