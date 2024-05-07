// Example2: Accessing DOM Elements
import { useState, useRef, useEffect } from 'react';

function Two() {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Example2: Accessing DOM Elements</h1>
      <input ref={inputRef} value={input} onChange={handleChange} />
    </div>
  );
}

export default Two;
