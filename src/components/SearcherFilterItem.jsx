import React from 'react'

function SearcherFilterItem({ title, selected, handleSelect, index }) {
    return (
        <li className={selected ? 'bg-gray-200 py-2 w-full hover:cursor-pointer' : 'hover:bg-gray-100 py-2 w-full hover:cursor-pointer'} onClick={() => (handleSelect(index))}>
            <p>{title}</p>
        </li>
    )
}

export default SearcherFilterItem