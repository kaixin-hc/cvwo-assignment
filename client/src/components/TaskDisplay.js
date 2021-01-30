import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TaskDisplay = ({id}, props) => {
    const [task, setTask] = useState([]);
    console.log(id);

    useEffect(() => {
        axios.get('/api/v1/tasks/' + id)
        .then(res => {
            setTask(res.data);
        })
          .catch(error => console.log(error))
          }, []);


    return (
        <div className="task" key={task.id}>
            <h2>{task.title}</h2>
            <span>
               {task.category} {" | "}{task.importance} 
            </span>
            <br/><br/>
            {task.description}
            {/* {editing ? (null
            ) : (
                    <button
                        onClick={() => { editTask(task) }}
                    >Edit</button>
                )}

            <button onClick={() => removeTask(task.id)}>Remove</button> */}

        </div>
    );
}

export default TaskDisplay;