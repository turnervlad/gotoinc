import React from 'react';
import MySlider from "./Slider/Slider";
// import s from "./Sliders.module.css";

const Slide = (props) => {

  return (    

    <div >
      <MySlider min="0" max="255" step="1" />    
      <MySlider min="0" max="255" step="1" />    
      <MySlider />    
    </div> 

  )
};


export default Slide;