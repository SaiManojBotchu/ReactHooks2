import React from 'react';
import { ACTIONS } from './reducerFunc';

function Todo({ todo, dispatch }) {
  const handleToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE, id: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE, id: todo.id });
  };

  return (
    <div>
      <span style={{ textDecoration: todo.completed && 'line-through' }}>
        {todo.value}
      </span>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;
