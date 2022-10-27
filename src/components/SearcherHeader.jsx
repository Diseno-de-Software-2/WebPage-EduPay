import React from 'react'

function SearcherHeader() {
    return (
        <div className='absolute w-full h-96 bg-[url(/searcherPhoto.png)] bg-cover'>
            <div className='w-full h-20 bg-gradient-to-b from-white to-transparent'>
            </div>
            <div className='text-left w-96 ml-32 mt-10'>
                <h1 className='text-4xl font-bold mb-10'>
                    Paga la matricula para el semestre 2025-10 aqui.
                </h1>
                <a href='/paying/personaldata' className="text-white bg-[#470FF4] w-auto px-16 py-3 text-2xl hover:cursor-pointer z-20">PAGAR AHORA</a>
            </div>
        </div>
    )
}

export default SearcherHeader