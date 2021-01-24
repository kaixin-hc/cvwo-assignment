import React from 'react';

const TaskFilter = ({filterTasks, param, value }) => {

    return (
        <button
            onClick={() => { filterTasks(param, value) }}
        > {param}: {value}</button>
    )
}


export default TaskFilter;
