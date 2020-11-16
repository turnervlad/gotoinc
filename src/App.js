import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const [isSliderHidden, setSlidersVisibility] = useState(false);

  const prevState = useRef({ r: rValue, g: gValue, b: bValue });

  const onSubmit = useCallback(() => {
    prevState.current = { r: rValue, g: gValue, b: bValue };
  }, [rValue, gValue, bValue]);

  const onSlidersBlockToggle = useCallback(() => {
    setSlidersVisibility(!isSliderHidden);
  }, [isSliderHidden]);

  useEffect(() => {
    setColor(`rgb(${rValue}, ${gValue}, ${bValue})`);
  }, [rValue, gValue, bValue]);

  const onCancel = useCallback(() => {
    setRValue(prevState.current.r);
    setGValue(prevState.current.g);
    setBValue(prevState.current.b);
  }, []);

  const onChangeR = useCallback((v) => {
    setRValue(v);
  }, []);

  const onChangeG = useCallback((v) => {
    setGValue(v);
  }, []);

  const onChangeB = useCallback((v) => {
    setBValue(v);
  }, []);

  return (
    <div className="app-wrapper">
      <Square color={color} />

      <Button
        text={isSliderHidden ? "Show slider" : "Hide slider"}
        onClick={onSlidersBlockToggle}
      />

      {!isSliderHidden ? (
        <div>
          <div>
            <Slider
              min={0}
              max={255}
              value={rValue}
              onChange={onChangeR}
              railStyle={{
                backgroundColor: "red",
              }}
            />
            <text>{rValue}</text>
          </div>

          <div>
            <Slider
              min={0}
              max={255}
              value={gValue}
              onChange={onChangeG}
              railStyle={{
                backgroundColor: "green",
              }}
            />
            <text>{gValue}</text>
          </div>

          <div>
            <Slider
              min={0}
              max={255}
              value={bValue}
              onChange={onChangeB}
              railStyle={{
                backgroundColor: "blue",
              }}
            />
            <text>{bValue}</text>
          </div>

          <Button text={"Submit"} onClick={onSubmit} />
          <Button text={"Cancel"} onClick={onCancel} />
        </div>
      ) : null}
    </div>
  );
}

export default App;