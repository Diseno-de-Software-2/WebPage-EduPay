import React from 'react'

function InputPaymentForm({ label, type, name, id, blocked }) {

    const inputProps = {
        className: 'w-full border border-gray-300 px-2 py-1',
        type,
        name,
        id,
        disabled: blocked
    }

    return (
        <div className='grow w-full'>
            <label className='block' htmlFor={name}>{label}</label>
            <input {...inputProps} />
        </div>
    )
}

export default InputPaymentForm