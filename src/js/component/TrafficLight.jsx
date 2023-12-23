import React, { useState } from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
  const [red, setRed] = useState('red');
  const [yellow, setYellow] = useState('yellow');
  const [green, setGreen] = useState('green');

  const changeColor = (color) => {
    console.log(color)
  }

  return (
    <div className="container">
      <div className="traffic-container">
        <div 
          onClick={() => changeColor(red)}
          style={{
            width: '125px',
            height: '125px',
            borderRadius: '50%',
            backgroundColor: red ? 'red' : 'darkred',
            margin: '10px',
            boxShadow: red ? '0 0 20px 10px rgba(255, 0, 0, 0.7)' : 'none',
          }}
        ></div>
        <div
          onClick={() => changeColor(yellow)}
          style={{
            width: '125px',
            height: '125px',
            backgroundColor: yellow ? 'yellow' : 'darkorange',
            borderRadius: '50%',
            margin: '10px',
            boxShadow: yellow ? '0 0 20px 10px rgba(255, 255, 0, 0.7)' : 'none',
          }}
        ></div>
        <div
          onClick={() => changeColor(green)}
          style={{
            width: '125px',
            height: '125px',
            backgroundColor: green ? 'green' : 'darkgreen',
            borderRadius: '50%',
            margin: '10px',
            boxShadow: green ? '0 0 20px 10px rgba(0, 255, 0, 0.7)' : 'none',
          }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
