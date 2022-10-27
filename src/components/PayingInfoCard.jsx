import React from 'react'

function PayingInfoCard({ title, price, description }) {
    return (
        <div className='flex flex-col items-center justify-evenly shadow-2xl py-5 px-10 w-[350px] aspect-square text-center'>
            <h1 className='text-3xl font-bold'>
                {title}
            </h1>
            <h1 className='text-red-600 text-6xl'>
                {'$' + price}
            </h1>
            <p className='text-left opacity-50'>
                {description}
            </p>
        </div>
    )
}

export default PayingInfoCard