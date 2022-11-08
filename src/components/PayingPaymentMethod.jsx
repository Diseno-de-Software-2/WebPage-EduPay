import PayingTabMenu from "./PayingTabMenu"
import PayingCreditcardsSaved from "./PayingCreditcardsSaved"
import PayingCreditCardForm from "./PayingCreditCardForm"
import PayingConfirmButton from "./PayingConfirmButton"
import PayingBankAccountSaved from "./PayingBankAccountSaved"
import PayingBankAccountForm from "./PayingBankAccountForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function PayingPaymentMethod() {

    const [method, setMethod] = useState('creditcard')

    let navigate = useNavigate()

    const handleSelect = (method) => {
        setMethod(method)
    }

    const handleNext = () => {
        navigate('/paying/confirmation')
    }

    return (
        <div className="h-full w-full">
            <h1 className='text-3xl font-bold mb-10'>Medio de pago</h1>
            <PayingTabMenu selected={method} handleSelect={handleSelect}>
                {
                    (method === 'creditcard') ? (
                        <>
                            <PayingCreditcardsSaved />
                            <h1 className="text-2xl font-bold">Otra</h1>
                            <PayingCreditCardForm />
                        </>

                    ) : (
                        <>
                            <PayingBankAccountSaved />
                            <h1 className="text-2xl font-bold">Otra</h1>
                            <PayingBankAccountForm />
                        </>
                    )
                }
                <div className="mt-10">
                    <PayingConfirmButton handleNext={handleNext} />
                </div>
            </PayingTabMenu>
        </div>
    )
}

export default PayingPaymentMethod