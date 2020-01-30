import React from 'react'

export const SearchBar = ({ searchTerm, updateSearchTerm }) => {
    const handleChange = event => {
        updateSearchTerm(event.target.value)
    }

    return (
        <form className="dog-filter">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
            />
        </form>
    )
}
