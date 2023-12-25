import React, { useState } from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
  const [selectColor, setSelectedColor] = useState("");


  return (
    <div className="container">
      <div className="traffic-container">
        <div className={`red ${selectColor === "red" ? "light-active" : ""}`}
          onClick={() => setSelectedColor("red")}>
        </div>

        <div className={`yellow ${selectColor === "yellow" ? "light-active" : ""}`}
          onClick={() => setSelectedColor("yellow")}>
        </div>

        <div className={`green ${selectColor === "green" ? "light-active" : ""}`}
          onClick={() => setSelectedColor("green")}>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
