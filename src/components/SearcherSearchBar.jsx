import React, { useContext, useState } from 'react'
import { SearchContext } from '../contexts/SearchContext'
function SearcherSearchBar() {

    const { search, setSearch } = useContext(SearchContext)

    return (
        <div className='h-12 w-full border border-gray-400 flex gap-5 items-center justify-start pl-2 '>
            <img className='w-8 h-8' src="/Search.png" alt="" />
            <input className='w-full h-full focus:outline-none' type="text" placeholder='Buscar' value={search} onChange={
                (e) => {
                    setSearch(e.target.value)
                }
            } />
        </div>
    )
}

export default SearcherSearchBar