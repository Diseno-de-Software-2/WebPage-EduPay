import PayingConfirmButton from "./PayingConfirmButton"
import { PayingContext } from "../contexts/PayingContext"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"


function PayingResume({ nombre, id, paymentmethod, number }) {

    const { personalData, paymentMethod } = useContext(PayingContext)

    let navigate = useNavigate()

    const handleNext = () => {
        navigate('/processingpayment')
    }

    return (
        <div className="flex flex-col h-[500px] justify-between w-full">
            <div>
                <h1 className='text-2xl font-bold'>
                    Resumen
                </h1>
                <h2 className='mt-4 text-xl font-bold'>
                    Datos personales
                </h2>
                <p className='text-lg'>
                    {personalData.nombre + ' - ' + personalData.id}
                </p>
                <h2 className='mt-4 text-xl font-bold'>
                    Datos de pago
                </h2>
                <p className='text-lg'>
                    {paymentmethod + ' - ' + number}
                </p>
            </div>
            <PayingConfirmButton handleNext={handleNext} />
        </div>
    )
}

export default PayingResume