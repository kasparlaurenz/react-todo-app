import React from 'react';
import { ITodo } from '../interfaces/ITodo';
import uniqid from 'uniqid';

interface Props {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<Props> = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) => {
  //
  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id: uniqid('todo-'),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={handleInputText}
      />
      <button className="todo-button" type="submit" onClick={handleAddTodo}>
        +
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
