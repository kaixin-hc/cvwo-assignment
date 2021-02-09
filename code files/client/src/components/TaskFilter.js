import React from 'react';
import Badge from 'react-bootstrap/Badge'

const TaskFilter = ({ filterTasks, param, value }) => {

    return (
        <span>
            {' '}
            <Badge pill variant="warning" onClick={() => { filterTasks(param, value) }}>
                {value}
            </Badge>
            {' '}
        </span>
    )
}


export default TaskFilter;
