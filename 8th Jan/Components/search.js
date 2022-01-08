import React, { useState } from 'react'

function Search({ value }) {
    const [searchValue, setSearchValue] = useState()

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    const resetInputField = () => {
        setSearchValue("")
    }

    const searchFunction = (e) => {
        e.preventDefault();
        value.search(searchValue);
        resetInputField();
    }


    return (
        <div>
            <h2>Movies Search</h2>
            <form>
                <input type='text' value={searchValue} onChange={handleChange} />
                <button onClick={searchFunction}>Search</button>
            </form>
        </div>
    )
}

export default Search