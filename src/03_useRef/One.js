// https://youtu.be/t2ypzz6gJm0?si=awZ2xAWaTJ12BYXE
// Example1: Does not cause re-renders when updated
import { useState, useRef, useEffect } from 'react';

function One() {
  const [input, setInput] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Example1: Does not cause re-renders when updated</h1>
      <input value={input} onChange={handleChange} />
      <p>Render count - {count.current} </p>
    </div>
  );
}

export default One;
