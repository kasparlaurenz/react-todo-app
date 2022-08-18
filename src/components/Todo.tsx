import React, { useState } from 'react';
import { ITodo } from '../interfaces/ITodo';

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  todo: ITodo;
}

const Todo: React.FC<Props> = ({ todos, setTodos, todo }) => {
  //
  const [todoToEdit, setTodoToEdit] = useState<string>('');
  const [editText, setEditText] = useState<string>('');

  const handleDeleteTodo = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const handleCompleteStatus = () => {
    setTodos(
      todos.map(el => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  const handleTodoToEdit = (id: string) => {
    setTodoToEdit(id);
  };

  const handleTodoEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleTodoUpdate = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = editText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoToEdit('');
    setEditText('');
  };

  return (
    <div className="todo">
      {todoToEdit === todo.id ? (
        <button className="safe-btn" onClick={() => handleTodoUpdate(todo.id)}>
          &#9755;
        </button>
      ) : (
        <button className="edit-btn" onClick={() => handleTodoToEdit(todo.id)}>
          &#9755;
        </button>
      )}

      {todoToEdit === todo.id ? (
        <input
          className="todo-edit-input"
          type="text"
          value={editText}
          onChange={handleTodoEdit}
        />
      ) : (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </li>
      )}

      <button className="complete-btn" onClick={handleCompleteStatus}>
        &#10003;
      </button>
      <button className="trash-btn" onClick={handleDeleteTodo}>
        &#10007;
      </button>
    </div>
  );
};

export default Todo;
