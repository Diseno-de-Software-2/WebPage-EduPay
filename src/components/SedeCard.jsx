import React from 'react'

function SedeCard({ sede }) {
    let img = ''

    if (sede === 'Barranquilla') {
        img = '/ciudades/image 1.png'
    } else if (sede === 'Cartagena') {
        img = '/ciudades/image 2.png'
    } else if (sede === 'Santa Marta') {
        img = '/ciudades/image 3.png'
    } else if (sede === 'Sincelejo') {
        img = '/ciudades/image 4.png'
    } else if (sede === 'Montería') {
        img = '/ciudades/image 5.png'
    }


    return (
        <a className='w-[300px] aspect-square shadow-2xl flex flex-col items-center p-5' href='/login'>
            <img className='w-60 aspect-square' src={img} alt="" />
            <h2 className='text-4xl opacity-50 font-bold'>
                {sede}
            </h2>
        </a>
    )
}

export default SedeCard