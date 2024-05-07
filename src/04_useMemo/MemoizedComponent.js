// https://youtu.be/THL1OPn72vo?si=1e9VyK_nWUtn2I2c
import { useState, useMemo } from 'react';

function MemoizedComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  // Only runs when 'number' changes
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // Only creates new Object when 'dark' changes
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    };
  }, [dark]);

  return (
    <div style={themeStyle}>
      <h1>Memoized Component</h1>
      <span>Number : {number}</span>
      <button onClick={() => setNumber((st) => st + 1)}>+</button>
      <br />
      <div>Double Number : {doubleNumber}</div>
      <button onClick={() => setDark((st) => !st)}>Change Theme</button>
    </div>
  );
}

function slowFunction(number) {
  console.log('Memoized Component');
  for (let i = 0; i < 10000; i++) {}
  return number * 2;
}

export default MemoizedComponent;
