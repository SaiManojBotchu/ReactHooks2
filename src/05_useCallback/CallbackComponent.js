// https://youtu.be/_AyFP5s69N4?si=XdsAH0_7Tkct7brh
import { useState } from 'react';
import List from './List';
import { useCallback } from 'react';

function CallbackComponent() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  // Only re-creates when 'number' changes
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  };

  return (
    <div style={themeStyle}>
      <h1>Callback Component</h1>
      <span>Number : {number} </span>
      <button onClick={() => setNumber((st) => st + 1)}>+</button>
      <br />
      <button onClick={() => setDark((st) => !st)}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default CallbackComponent;
