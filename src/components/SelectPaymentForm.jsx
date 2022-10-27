import React from 'react'

function SelectPaymentForm({ options, blocked }) {
    return (
        <div>
            <label className='block' htmlFor="banco">Banco</label>
            <select className='
                w-auto
                border
                border-gray-300
                px-2
                h-[35px]
            ' name="banco" id="banco" disabled={blocked}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectPaymentForm