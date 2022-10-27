import PayingCreditCardCard from "./PayingCreditCardCard"
import { useState } from "react"

function PayingCreditcardsSaved() {

    const [selected, setSelected] = useState(0)

    const handleSelect = (index) => {
        setSelected(index)
    }

    return (
        <div className='py-5 flex flex-col gap-3'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return (
                        <PayingCreditCardCard
                            mark={'VISA'}
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

export default PayingCreditcardsSaved