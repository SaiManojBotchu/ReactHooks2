import React, { useContext } from 'react';
import { ThemeContext } from './Parent';

function Child() {
  // 3. Consume the context value in a child component
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const style = {
    color: isDark && 'white',
    backgroundColor: isDark ? 'black' : 'grey',
    width: '100px',
    height: '100px'
  };
  
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={style}>Hello There!</div>
    </>
  );
}

export default Child;
