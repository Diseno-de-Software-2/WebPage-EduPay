import React from 'react'

function SelectPaymentForm({ label, options, blocked, value, onChange }) {
    return (
        <div>
            <label className='block' htmlFor={label}>{label}</label>
            <select className='
                w-auto
                border
                border-gray-300
                px-2
                h-[35px]
            ' name={label} id={label} disabled={blocked} value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectPaymentForm