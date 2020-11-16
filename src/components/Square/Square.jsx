import React from 'react';
import style from "./Square.module.css";

const Square = ({color}) => {
    return (
        <div style={{backgroundColor: color}}  className={style.square}>

        </div>
    )
}

export default Square;