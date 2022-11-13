import PayingTabMenu from "./PayingTabMenu"
import PayingCreditcardsSaved from "./PayingCreditcardsSaved"
import PayingCreditCardForm from "./PayingCreditCardForm"
import PayingConfirmButton from "./PayingConfirmButton"
import PayingBankAccountSaved from "./PayingBankAccountSaved"
import PayingBankAccountForm from "./PayingBankAccountForm"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { PayingContext } from "../contexts/PayingContext"

function PayingPaymentMethod() {

    const [method, setMethod] = useState('creditcard')
    const { user } = useContext(UserContext)
    const { paymentMethod } = useContext(PayingContext)

    let navigate = useNavigate()

    const handleSelect = (method) => {
        setMethod(method)
    }

    const validateData = () => {
        if (paymentMethod.tarjeta) {
            if (paymentMethod.numero.length != 16) {
                alert('El número de tarjeta debe tener 16 dígitos')
                return false
            }
            if (paymentMethod.nombre == '') {
                alert('El nombre no puede estar vacío')
                return false
            }
            if (paymentMethod.fecha == '') {
                alert('La fecha no puede estar vacía')
                return false
            }
            if (paymentMethod.codigo.length != 3) {
                alert('El código de seguridad debe tener 3 dígitos')
                return false
            }
            if (paymentMethod.cuotas == '') {
                alert('La cantidad de cuotas no puede estar vacía')
                return false
            }
        } else {
            if (paymentMethod.numero.length != 16) {
                alert('El número de tarjeta debe tener 16 dígitos')
                return false
            }
            if (paymentMethod.email == '') {
                alert('El email no puede estar vacío')
                return false
            }
            if (paymentMethod.nombre == '') {
                alert('El nombre no puede estar vacío')
                return false
            }
            if (paymentMethod.banco == '') {
                alert('El banco no puede estar vacío')
                return false
            }
        }
        return true
    }

    const handleNext = () => {
        if (validateData()) {
            navigate('/paying/confirmation')
        }
    }

    const handleCancel = () => {
        navigate('/searcher')
    }

    return (
        <div className="h-full w-full">
            <h1 className='text-3xl font-bold mb-10'>Medio de pago</h1>
            <PayingTabMenu selected={method} handleSelect={handleSelect}>
                {
                    (method === 'creditcard') ? (
                        <>
                            {(user) ? (<PayingCreditcardsSaved />) : (null)}
                            <h1 className="text-2xl font-bold">Otra</h1>
                            <PayingCreditCardForm />
                        </>

                    ) : (
                        <>
                            {(user) ? (<PayingBankAccountSaved />) : (null)}
                            <h1 className="text-2xl font-bold">Otra</h1>
                            <PayingBankAccountForm />
                        </>
                    )
                }
                <div className="mt-10">
                    <PayingConfirmButton handleNext={handleNext} handleCancel={handleCancel} />
                </div>
            </PayingTabMenu>
        </div>
    )
}

export default PayingPaymentMethod