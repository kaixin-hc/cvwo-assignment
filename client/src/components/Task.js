import React from 'react';
import { Router, Link } from "@reach/router"
import TaskDisplay from './TaskDisplay';


const Task = ({ task, removeTask, editTask, editing }) => {
    // <Router>
    //             <TaskDisplay path="tasks/:id" task={task} />
    //         </Router>
    return (
        <div className="task" key={task.id}>
            
            <Link to={`tasks/${task.id}`} testword="something to print now">
                <span>
                    {task.title}  |  {task.category}  |  {task.importance}  |
            </span>
            </Link>
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