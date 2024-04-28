import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

// 2. define reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerCounter() {
  // 1) Initialize useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementCount = () => {
    // 3) call dispatch method
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrementCount = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default ReducerCounter;
