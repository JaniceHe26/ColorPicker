import React, { useState } from "react";
import './App.css';
import ColorChangeButton from './ColorChangeButton';

//Parents Component
function App() {
  const [color, setColor] = useState("");
  // console.log(color);
  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        {/* Passing props name color, value comes after the equal sign*/}
          <ColorChangeButton color='red' setColor={setColor} />
          <ColorChangeButton color='blue' setColor={setColor} />
          <ColorChangeButton color='green' setColor={setColor}/>
        {/* {color} */}
        {/* <button className="red" onClick={() => setColor('red')}>Red</button>
        <button className="blue" onClick={() => setColor('blue')}>Blue</button>
        <button className="green"o nClick={() => setColor('green')}>Green</button> */}
      </div>
    </div>
  );
}

export default App;
