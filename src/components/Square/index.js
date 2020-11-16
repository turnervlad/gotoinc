import React from "react";
import style from "./Square.module.css";

const Square = ({ color }) => (
  <div style={{ backgroundColor: color }} className={style.square} />
);

export default Square;