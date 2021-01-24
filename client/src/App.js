import React from 'react';
import './App.css';
import TaskList from './components/TaskList.js';

function App() {

  return (
      <div className="App">
        <h1>Todos</h1>
        <TaskList/>
      </div>
  );
}

export default App;