import React, { FC } from 'react';
import './App.scss';

const App: FC = () => {
  return (
    <div className='app'>
      <div className='header'>
        <div className='input-container'>
          <input type='text' placeholder='What should be done?' />
          <input type='number' placeholder='Deadline in days' />
        </div>
        <button>Add Todo</button>
      </div>
      <div className='todo-list'>Todos here</div>
    </div>
  );
};

export default App;
