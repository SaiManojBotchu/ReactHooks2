// https://youtu.be/THL1OPn72vo?si=1e9VyK_nWUtn2I2c
import { useState } from 'react';

function NormalComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  // Every time the component re-renders it calls below method
  // This causes performance issues. we only need to call this method when
  // number changes
  const doubleNumber = slowFunction(number);

  // Everytime the component re-renders it creates a new object.
  // This is bad practice
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div style={themeStyle}>
      <h1>Normal Component</h1>
      <span>Number : {number}</span>
      <button onClick={() => setNumber((st) => st + 1)}>+</button>
      <br />
      <div>Double Number : {doubleNumber}</div>
      <button onClick={() => setDark((st) => !st)}>Change Theme</button>
    </div>
  );
}

function slowFunction(number) {
  console.log('Normal Component');
  for (let i = 0; i < 10000; i++) {}
  return number * 2;
}

export default NormalComponent;
