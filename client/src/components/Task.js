import React from 'react';

const Task = ({ task, removeTask, editTask, editing }) => {

    return (
        <div className="task" key={task.id}>

            {task.title} |
            {task.category} |
            {task.importance} |

            {editing ? (null
            ) : (
                    <button
                        onClick={() => { editTask(task) }}
                    >Edit</button>
                )}

            <button onClick={() => removeTask(task.id)}>Remove</button>

        </div>
    );
}

export default Task;