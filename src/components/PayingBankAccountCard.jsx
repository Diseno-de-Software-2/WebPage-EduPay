import React from 'react'

function PayingBankAccountCard({ bank, number, selected, handleSelect, index, saldo }) {
    return (
        <div className={selected ? 'bg-[#D9D9D9] px-5 py-2 text-lg hover:cursor-pointer flex items-center justify-between gap-3 pr-8' : ' px-5 py-2 text-lg hover:bg-gray-100 hover:cursor-pointer flex items-center justify-between gap-3 pr-8'} onClick={() => (handleSelect(index))}>
            <div className='flex gap-3'>
                <img src="/MuseumGray.svg" alt="" />
                <div>
                    <p className='font-bold'>
                        {number}
                    </p>
                    <p className='text-sm'>
                        {bank}
                    </p>
                </div>
            </div>
            {
                saldo != -1 && <div>
                    {"$ " + saldo}
                </div>
            }

        </div >
    )
}

export default PayingBankAccountCard