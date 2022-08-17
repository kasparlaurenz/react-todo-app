import React, { ChangeEvent, FC, useState } from 'react';
import './App.scss';
import Todo from './Components/Todo';

export interface ITodo {
  id: number;
  text: string;
  deadline: number;
}

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'todo') {
      setTodo(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addToList = (): void => {
    const newTdodo = {
      id: Math.floor(Math.random() * 10000),
      text: todo,
      deadline: deadline,
    };
    setTodoList([...todoList, newTdodo]);
    setTodo('');
    setDeadline(0);
  };

  const removeFromList = (id: number) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className='app'>
      <div className='header'>
        <div className='input-container'>
          <input
            name='todo'
            type='text'
            placeholder='What should be done?'
            value={todo}
            onChange={handleChange}
          />
          <input
            name='deadline'
            type='number'
            placeholder='Deadline in days'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addToList}>Add Todo</button>
      </div>
      <div className='todo-list'>
        {todoList.map((todo: ITodo, key: number) => (
          <Todo key={key} todo={todo} removeTodo={removeFromList} />
        ))}
      </div>
    </div>
  );
};

export default App;
