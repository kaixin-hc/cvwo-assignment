import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewTaskForm from './NewTaskForm';
import EditTaskForm from './EditTaskForm'
import Task from './Task';

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
  }, [])

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

  const removeTask = id => {
    axios.delete('/api/v1/tasks/' + id)
      .then(response => {
        setTasks(tasks.filter(task => task.id !== id))
      })
      .catch(error => console.log(error))
  };
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
          task:{
            title: updatedTask.title,
            category: updatedTask.category,
            importance: updatedTask.importance,
            description: updatedTask.description}
        }))
        .then(
            res=>(
                console.log(res.data)
            ));
  
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)))
  };

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <hr />
      <div className="tasks-list">
        <div>
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

        <hr />
        {tasks.map((task, __) => (
          <Task task={task} removeTask={removeTask} editTask ={editTask} editing = {editing} />
        ))}
      </div>
    </div>
  )
};
export default TasksList;