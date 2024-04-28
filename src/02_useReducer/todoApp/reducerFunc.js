import { v4 as uuid } from 'uuid';

export const ACTIONS = {
  ADD: 'add-todo',
  TOGGLE: 'toggle-todo',
  DELETE: 'delete-todo'
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, { id: uuid(), value: action.value, completed: false }];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
}

export default reducer;
