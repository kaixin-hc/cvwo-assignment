import React from 'react';
import Badge from 'react-bootstrap/Badge'
const ShowAllTasks = ({ showAll }) => {

    return (
        <span>
            {' '}
            <Badge pill variant="info" onClick={() => { showAll() }}>
                Show All Tasks
            </Badge>
            {' '}
        </span>

    )
}


export default ShowAllTasks;
