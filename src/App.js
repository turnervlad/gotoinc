import React, { useState, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./App.css";
import Button from "./components/Button";
import Square from "./components/Square";

function App() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  const [color, setColor] = useState(`rgb(${rValue}, ${gValue}, ${bValue})`);

  const prevState = useRef({ r: rValue, g: gValue, b: bValue });

  const submitOnClick = () => {
    setColor(`rgb(${rValue}, ${gValue}, ${bValue})`);
    prevState.current = { r: rValue, g: gValue, b: bValue };
  };
  const cancelOnClick = () => {
    setRValue(prevState.current.r);
    setGValue(prevState.current.g);
    setBValue(prevState.current.b);
  };

  return (
    <div className="app-wrapper">
      <Square color={color} />

      <Slider
        min={0}
        max={255}
        value={rValue}
        onChange={(v) => {
          setRValue(v);
        }}
      />

      <text>{rValue}</text>
      <Slider
        min={0}
        max={255}
        value={gValue}
        onChange={(v) => {
          setGValue(v);
        }}
      />

      <text>{gValue}</text>

      <Slider
        min={0}
        max={255}
        value={bValue}
        onChange={(v) => {
          setBValue(v);
        }}
      />

      <text>{bValue}</text>

      <Button text={"Submit"} onClick={submitOnClick} />
      <Button text={"Cancel"} onClick={cancelOnClick} />
    </div>
  );
}

export default App;
