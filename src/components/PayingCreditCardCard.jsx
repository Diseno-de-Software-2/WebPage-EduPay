import React from 'react'

function PayingCreditCardCard({ mark, number, selected, handleSelect, index, credito }) {
    console.log(credito)
    return (
        <div className={selected ? 'bg-[#D9D9D9] px-5 py-2 text-lg hover:cursor-pointer flex justify-between' : ' px-5 py-2 text-lg hover:bg-gray-100 hover:cursor-pointer flex justify-between'} onClick={() => (handleSelect(index))}>
            <div>
                {mark + ' *' + number}
            </div>
            {
                credito != -1 && <div>
                    {"$ " + credito}
                </div>
            }
        </div>
    )
}

export default PayingCreditCardCard