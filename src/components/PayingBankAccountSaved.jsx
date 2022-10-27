import { useState } from 'react'
import PayingBankAccountCard from './PayingBankAccountCard'

function PayingBankAccountSaved() {

    const [selected, setSelected] = useState(0)

    const handleSelect = (index) => {
        setSelected(index)
    }

    return (
        <div className='py-5 flex flex-col gap-3 justify-start'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return (
                        <PayingBankAccountCard
                            bank={'Eastern Bank'}
                            number={'1234'}
                            selected={selected === index}
                            handleSelect={handleSelect}
                            index={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default PayingBankAccountSaved