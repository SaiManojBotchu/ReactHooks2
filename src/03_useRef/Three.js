// Example3: Tracking State Changes
import { useState, useRef, useEffect } from 'react';

function Two() {
  const [input, setInput] = useState('');
  const prevInput = useRef();

  useEffect(() => {
    prevInput.current = input;
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Example3: Tracking State Changes</h1>
      <input value={input} onChange={handleChange} />
      <p>The input is : {input}</p>
      <p>The prev Input is : {prevInput.current}</p>
    </div>
  );
}

export default Two;
