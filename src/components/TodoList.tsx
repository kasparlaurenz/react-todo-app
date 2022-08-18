import React from 'react';
import { ITodo } from '../interfaces/ITodo';
import Todo from './Todo';

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filteredTodos: ITodo[];
}

const TodoList: React.FC<Props> = ({ todos, setTodos, filteredTodos }) => {
  //
  return (
    <div className="todo-container">
      <div className="todo-list">
        {filteredTodos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
