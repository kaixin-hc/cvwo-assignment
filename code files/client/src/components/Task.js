import React from 'react';
import { Link } from "@reach/router"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Task = ({ task, removeTask, editTask, editing }) => {
    // <Router>
    //             <TaskDisplay path="tasks/:id" task={task} />
    //         </Router>
    return (
        <p className="task" key={task.id}>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
            <Link to={`tasks/${task.id}`} testword="something to print now">
                <Container>
                    <Row>
                    <Col xs={4}>{task.title} </Col> <Col xs={3}>{task.category}</Col> <Col xs={5}>{task.importance} </Col>   
                    </Row>
            </Container>
            </Link>
            </Col>
            <Col xs={4} md={3}>
            {editing ? (null
            ) : (
                    <Button size="sm" variant="outline-primary"
                        onClick={() => { editTask(task) }}
                    >Edit</Button>
                )}
            {"    "} 
            <Button size="sm" variant="outline-danger" onClick={() => removeTask(task.id)}>Remove</Button>
            </Col>
            </Row> </Container>
        </p>
    );
}

export default Task;