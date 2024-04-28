import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(); // step1

export const useTheme = () => {
  return useContext(ThemeContext); // step3
}

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((st) => !st);
  }

  return ( // step2
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children} 
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
