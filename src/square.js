import React from 'react';
import './square.css';
export default function Square(props) {
    return <a href='#' className={props.class} onClick={() =>props.handleClickedSquare(props.id)} onSubmit={e=> e.preventDefault()} >{props.current}</a>
}