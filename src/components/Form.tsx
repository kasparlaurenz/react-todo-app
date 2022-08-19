import React from 'react';
import { ITodo } from '../interfaces/ITodo';
import uniqid from 'uniqid';
import type {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  MouseEvent,
} from 'react';

interface Props {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  setStatus: Dispatch<SetStateAction<string>>;
}

const Form: FC<Props> = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) => {
  //
  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id: uniqid('todo-'),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
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
