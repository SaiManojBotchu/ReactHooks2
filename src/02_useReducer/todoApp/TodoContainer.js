import React, { useState, useReducer } from 'react';
import reducer, { ACTIONS } from './reducerFunc';
import Todo from './Todo';

function TodoContainer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [value, setValue] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: ACTIONS.ADD, value });
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default TodoContainer;
