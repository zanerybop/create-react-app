import React,{useState} from 'react';
import './Board.css'
import Square from './Square';
const Board = ({squares, input, disabled}) => {
  
    return (
        <div className='board'>
          {   
          squares.map((square,i)=>(
            <Square key={i} value = {square} onInput={() => input(i)}/>
          )) 
          }
        </div>
    );
}

export default Board;
