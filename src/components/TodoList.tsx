import React from 'react';
import { ITodo } from '../interfaces/ITodo';
import Todo from './Todo';
import type { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  filteredTodos: ITodo[];
}

const TodoList: FC<Props> = ({ todos, setTodos, filteredTodos }) => {
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
