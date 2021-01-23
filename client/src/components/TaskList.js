import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TasksList = props => {

  useEffect(() => {
    axios.get('/api/v1/tasks.json')
        .then(res => setTasks(res.data))
      }, [])

  const [tasks, setTasks] = useState([]);

  return (
      <div>
        <div className="tasks-list">
          {tasks.map((task, index) => (
              <div key={index}>
                {task.title} | {task.category} | {task.importance}
              </div>
            ))}
        </div>
      </div>
  )
};
export default TasksList;