import React from "react";

//Child component
//Now, we need to use those props in our child component. 
//Switch over to ColorChangeButton.js. First, we will make our function take the parameter props.
function ColorChangeButton (props) {
  console.log(props);
  //{ color: 'red' } { color: 'blue' } { color: 'yellow' } key:value pairs props.color
  return (
    <button className={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </button>
  )
}

export default ColorChangeButton;


//React uses unidirectional data flow, 
//which means we can only pass data from 
//a parent component to a child component. 
//We will use props to pass data from one component to another.
//we need to use those props in our child component
