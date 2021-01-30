import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewTaskForm from './NewTaskForm';
import EditTaskForm from './EditTaskForm'
import Task from './Task';
import TaskFilter from './TaskFilter';
import ShowAllTasks from './ShowAllTasks';
import Search from './Search';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TasksList = props => {
  const initialFormState = {
    title: '',
    category: '',
    importance: '',
    description: ''
  };

  useEffect(() => {
    axios.get('/api/v1/tasks')
      .then(res => setTasks(res.data))
  }, []);

  // create task
  const addTask = task => {
    const qs = require('qs');

    axios.post('/api/v1/tasks', qs.stringify(
      {
        task: {
          title: task.title,
          category: task.category,
          importance: task.importance,
          description: task.description
        }
      }))
      .then(res => (console.log(res)))
      .catch(error => console.log(error))

    setTasks([...tasks, task]);
  };

  // delete task
  const removeTask = id => {
    axios.delete('/api/v1/tasks/' + id)
      .then(res => {
        setTasks(tasks.filter(task => task.id !== id))
      })
      .catch(error => console.log(error))
  };

  // update task
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialFormState);
  const editTask = task => {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      title: task.title,
      category: task.category,
      importance: task.importance,
      description: task.description
    })
  };

  const updateTask = (updatedTask) => {
    setEditing(false);

    const qs = require('qs');
    axios.patch('/api/v1/tasks/' + updatedTask.id, qs.stringify(
      {
        task: {
          title: updatedTask.title,
          category: updatedTask.category,
          importance: updatedTask.importance,
          description: updatedTask.description
        }
      }))
      .then(
        res => (
          console.log(res.data)
        ));

    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)))
  };

  // filtering
  const filterTasks = (param, value) => {
    axios.get('/api/v1/tasks/')
      .then(response => {
        setTasks(response.data.filter(task => task[param] === value))
      })
      .catch(error => console.log(error))
  };

  const showAll = () => {
    axios.get('/api/v1/tasks/')
      .then(res => {
        setTasks(res.data)
      })
      .catch(error => console.log(error))
  };

  const searchTasks = (x) => {
    axios.get('/api/v1/search/', {
      params: {
        title: x.title,
        category: x.category
      }
    })
      .then(res => {
        console.log(res.data)
        setTasks(res.data)
      })
      .catch(error => console.log(error))
  };

  const [tasks, setTasks] = useState([]);

  return (

    <div>
      
      <Container>
        <Row>
          <Col xs={{ order: 12 }} xs={3}>
            <div className="task-form">
              {editing ? <h3> Edit Task</h3> : <h3>New Task</h3>}
              <hr/>
              {editing ? (
                <EditTaskForm
                  setEditing={setEditing}
                  currentTask={currentTask}
                  updateTask={updateTask}
                />
              ) : (
                  <NewTaskForm addTask={addTask} initialFormState={initialFormState} />
                )}

            </div>
          </Col>

          <Col xs={3} xs={{order:1}}>
            <div className="tasks-list">
              <div>
              <Search searchTasks={searchTasks} />
              
              <TaskFilter filterTasks={filterTasks} param="importance" value="Important" />
              <TaskFilter filterTasks={filterTasks} param="importance" value="Important & Urgent" />
              <TaskFilter filterTasks={filterTasks} param="importance" value="Urgent" />
              <TaskFilter filterTasks={filterTasks} param="importance" value="OTOT" />
              <ShowAllTasks showAll={showAll} />
              </div>
              <br />
              
              <br />
              {tasks.map((task, __) => (
                <Task task={task} removeTask={removeTask} editTask={editTask} editing={editing} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};
export default TasksList;