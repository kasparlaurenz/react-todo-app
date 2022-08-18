import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces/ITodo';

const App: React.FC = () => {
  //
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [status, setStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case 'all':
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    handleFilter();
  }, [todos, status]);

  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
