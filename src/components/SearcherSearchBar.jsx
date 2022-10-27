import React from 'react'

function SearcherSearchBar() {
    return (
        <div className='h-12 w-full border border-gray-400 flex gap-5 items-center justify-start pl-2 '>
            <img className='w-8 h-8' src="/Search.png" alt="" />
            <input className='w-full h-full focus:outline-none' type="text" placeholder='Buscar' />
        </div>
    )
}

export default SearcherSearchBar