import React from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import { ITodo } from '../App';

interface Props {
  todo: ITodo;
  removeTodo(id: number): void;
}
const Todo = ({ todo, removeTodo }: Props) => {
  return (
    <div className='todo'>
      <div className='content'>
        <span>{todo.text}</span>
        <span>{todo.deadline}</span>
      </div>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};

export default Todo;
