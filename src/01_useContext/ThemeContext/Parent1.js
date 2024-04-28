import React from 'react';
import ThemeProvider from './useThemeProvider';
import Child1 from './Child1';

function Parent1() {
  return (
    <ThemeProvider>
      <Child1 />
    </ThemeProvider>
  );
}

export default Parent1;
