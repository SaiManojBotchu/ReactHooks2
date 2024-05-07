import React from 'react';
// import Parent from './01_useContext/Parent';
// import Parent1 from './01_useContext/ThemeContext/Parent1';
// import Counter from './02_useReducer/Counter';
// import ReducerCounter from './02_useReducer/ReducerCounter';
// import TodoContainer from './02_useReducer/todoApp/TodoContainer';
// import One from './03_useRef/One';
// import Two from './03_useRef/Two';
// import Three from './03_useRef/Three';
import NormalComponent from './04_useMemo/NormalComponent';
import MemoizedComponent from './04_useMemo/MemoizedComponent';

function App() {
  return (
    <div>
      {/* <Parent />
      <Parent1 /> */}
      {/* <Counter /> <br />
      <ReducerCounter /> */}
      {/* <TodoContainer /> */}
      {/* <One />
      <Two />
      <Three /> */}
      <NormalComponent />
      <MemoizedComponent />
    </div>
  );
}

export default App;
