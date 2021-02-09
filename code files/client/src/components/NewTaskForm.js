import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// props passed is the addTask function and the initial form state

const NewTaskForm = props => {
  const [task, setTask] = useState(props.initialFormState);

//   updates what is visible as you change the input
  const handleInputChange = event => {
    const { name, value } = event.target
    setTask({ ...task, [name]: value })
  };

  return (
      <Form onSubmit={event => {
        event.preventDefault()
        if (!task.title || !task.importance || !task.category ) return;
        props.addTask(task)
        setTask(props.initialFormState)
      }}>
        <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" value={task.title} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control name="category" value={task.category} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group>
        <label>Importance</label>
        <Form.Control as="select" name="importance" placeholder="Important" value={task.importance} onChange={handleInputChange}>
          <option> </option>
          <option>Important</option>
          <option>Important & Urgent</option>
          <option>Urgent</option>
          <option>OTOT</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" value={task.description} onChange={handleInputChange} as="textarea" rows={2} />
      </Form.Group>

        <Button variant="outline-success" type="submit"> Create Task</Button>
      </Form>
  )
};

export default NewTaskForm;