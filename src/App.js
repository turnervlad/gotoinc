import React, {useState} from "react";
import "./App.css";
import Button from "./components/Buttons/Button.jsx";
import Square from "./components/Square/Square.jsx";
import Sliders from "./components/Sliders/Sliders";
// import { Route, BrowserRouter } from "react-router-dom";

function App(props) {

  const [color, setColor] = useState("#000");

  const submitOnClick = () => {
    console.log('Submit on click');
    setColor(`(ddh), (sdf), ()`);
  }
  const cancelOnClick = () => {
    console.log('Cancel');
    setColor("blue");
  }

  return (
    <div className="app-wrapper">
      <Square color={color} />
      <Sliders />
      <Button text={"Submit"} onClick={submitOnClick} />
      <Button text={"Cancel"} onClick={cancelOnClick} />
    </div>
  );
}

export default App;
