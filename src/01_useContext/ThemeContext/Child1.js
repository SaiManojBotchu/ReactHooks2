import React from 'react';
import { useTheme } from './useThemeProvider';

function Child1() {
  const { isDark, toggleTheme } = useTheme();

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

export default Child1;
