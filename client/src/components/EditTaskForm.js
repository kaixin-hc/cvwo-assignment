import React, { useState } from 'react';

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask);

  const handleInputChange = event => {
    const { name, value } = event.target
    setTask({ ...task, [name]: value })
  };

  return (

      <form onSubmit={event => {
        event.preventDefault();
        if (!task.title || !task.importance || !task.category ) return;
        props.updateTask(task)
      }}>
            <label>Title</label>
        <input type="text" name="title" value={task.title} onChange={handleInputChange} ></input>
        <label>Category</label>
        <input type="text" name="category" value={task.category} onChange={handleInputChange} ></input>
        <label>Importance</label>
        <input type="text" name="importance" value={task.importance} onChange={handleInputChange} ></input>
        <br/>
        <label>Description</label>
        <textarea id="description" name="description" rows="2" cols="50" value={task.description} onChange={handleInputChange}>
        </textarea>
        <br/>
        <button>Update Task</button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </form>
  )
};

export default EditTaskForm;