// https://www.youtube.com/watch?v=5LrDIWkK_Bc
import React, { createContext, useState } from 'react';
import Child from './Child';

// 1. Create a context
export const ThemeContext = createContext();

function Parent() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((st) => !st);

  return (
    // 2. Provide the context value at the top of the component tree
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default Parent;
