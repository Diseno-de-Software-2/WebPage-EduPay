import React from 'react'

function ProcessingPayment() {

    const state = 'error'

    return (
        <div className='flex flex-col items-center justify-center gap-10 my-10 w-[1000px] mx-auto'>
            <h1 className='text-5xl text-center font-bold'>
                {(state === 'processing' ? 'Tu transancción está siendo procesada' : (state === 'success' ? 'Tu transancción fue exitosa' : 'Ha ocurrido un error y la transacción no se ha podido realizar'))}
            </h1>
            <img className='w-52' src={(state === 'processing') ? '/PayState/In Progress.svg' : (state === 'success' ? '/PayState/Ok.svg' : '/PayState/Error.svg')} alt="" />
            {
                (state !== 'processing' ? (
                    <a href="/searcher">Volver al inicio</a>
                ) : (null))
            }
        </div>
    )
}

export default ProcessingPayment