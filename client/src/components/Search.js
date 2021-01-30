import React, { useState} from 'react';

// props: searchTasks
const Search = ( props ) => {
    const [search, setSearch] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target
        setSearch({ ...search, [name]: value })
    };

    return (
        <form onSubmit={event => {
            event.preventDefault()
            // if (!search.title) return;
            props.searchTasks(search)
          }}>

            <div>
                <label>Title: </label>
                <input type="text" name="title" value={search.title} onChange={handleInputChange} ></input>
                <label>Category: </label>
                <input type="text" name="category" value={search.category} onChange={handleInputChange} ></input>
            <button
            > Search! </button>
            </div>
        </form>
    )
}


export default Search;