import React from 'react'

function InputPaymentForm({ label, type, name, id, blocked, value, onChange }) {

    const inputProps = {
        className: 'w-full border border-gray-300 px-2 py-1',
        type,
        name,
        id,
        disabled: blocked,
        value,
        onChange
    }

    return (
        <div className='grow w-full'>
            <label className='block' htmlFor={name}>{label}</label>
            <input {...inputProps} required />
        </div>
    )
}

export default InputPaymentForm