import React from "react"

const SearchBar = (props) => {

    const updateSearchTerm = event => {
        props.updateSearchTerm(event.target.value)
    }

    return (
        <form className="dog-filter">
            <input
                type="text"
                value={props.searchTerm}
                placeholder="Find Adoptable Dog"
                onChange={updateSearchTerm}
            />
        </form>
    )
}

export default SearchBar