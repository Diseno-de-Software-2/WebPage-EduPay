import React from 'react'

function PayingCreditCardCard({ mark, number, selected, handleSelect, index }) {
    return (
        <div className={selected ? 'bg-[#D9D9D9] w-fit px-5 py-2 text-lg hover:cursor-pointer' : 'w-fit px-5 py-2 text-lg hover:bg-gray-100 hover:cursor-pointer'} onClick={() => (handleSelect(index))}>
            {mark + ' *' + number}
        </div>
    )
}

export default PayingCreditCardCard