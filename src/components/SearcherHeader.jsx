import React from 'react'

function SearcherHeader() {
    return (
        <div className='absolute w-full h-96 bg-[url(/searcherPhoto.png)] bg-cover'>
            <div className='w-full h-20 bg-gradient-to-b from-white to-transparent'>
            </div>
            <div className='text-left w-96 ml-32 mt-10'>
                <h1 className='text-4xl font-bold mb-10 leading-normal'>
                    El nuevo sitio de UNIGENERICO para la búsqueda y pago de servicios
                </h1>
            </div>
        </div>
    )
}

export default SearcherHeader