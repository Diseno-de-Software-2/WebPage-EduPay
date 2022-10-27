import React from 'react'

function PayingBankAccountCard({ bank, number, selected, handleSelect, index }) {
    return (
        <div className={selected ? 'bg-[#D9D9D9] w-fit px-5 py-2 text-lg hover:cursor-pointer flex items-center justify-center gap-3 pr-8' : 'w-fit px-5 py-2 text-lg hover:bg-gray-100 hover:cursor-pointer flex items-center justify-center gap-3 pr-8'} onClick={() => (handleSelect(index))}>
            <img src="/MuseumGray.svg" alt="" />
            <div>
                <p className='font-bold'>
                    {number}
                </p>
                <p className='text-sm'>
                    {bank}
                </p>
            </div>
        </div >
    )
}

export default PayingBankAccountCard