import React from 'react';
import { ITodo } from '../interfaces/ITodo';

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  todo: ITodo;
}

const Todo: React.FC<Props> = ({ todos, setTodos, todo }) => {
  //
  const handleDeleteTodo = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map(el => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={handleComplete}>
        &#128505;
      </button>
      <button className="trash-btn" onClick={handleDeleteTodo}>
        &#128465;
      </button>
    </div>
  );
};

export default Todo;
