import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import TaskList from './components/TaskList.js';
import TaskDisplay from './components/TaskDisplay';
import Navbar from 'react-bootstrap/Navbar'

function App() {

  return (
    <div className="App">
      <h1>Todos</h1>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      Task List
      {/* <Link to="/" >Task List</Link> */}
    </Navbar.Brand>
  </Navbar>
<br/>
      <Router>
        <TaskList path="/*" />
        <TaskDisplay path="tasks/:id"/>
      </Router>

      {/* <TaskList /> */}
    </div>
  );
}

export default App;