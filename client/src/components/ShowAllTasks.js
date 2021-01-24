import React from 'react';

const ShowAllTasks = (showAll) => {

    return (
        <button
            onClick={() => { showAll }}
        > Show All Tasks </button>
    )
}


export default ShowAllTasks;
