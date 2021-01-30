import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import TaskList from './components/TaskList.js';
import TaskDisplay from './components/TaskDisplay';

function App() {

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="navbar">
        <Link to="/">Task List</Link>
      </div>
      <Router>
        <TaskList path="/" />
        <TaskDisplay path="tasks/:id"/>
      </Router>

      {/* <TaskList /> */}
    </div>
  );
}

export default App;