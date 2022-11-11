import React from 'react'

function ConsultButtonPaymentForm({ handleConsult }) {
    return (
        <div className='
            flex
            items-center
            justify-center
            w-52
            bg-[#0E7C7B]
            text-white
            cursor-pointer
            px-3
            h-[35px]
            font-thin
            hover:bg-[#0A6160]
        '>
            <button type="submit" onClick={handleConsult}>Consultar saldo</button>
        </div>
    )
}

export default ConsultButtonPaymentForm