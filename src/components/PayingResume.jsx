import PayingConfirmButton from "./PayingConfirmButton"
import { PayingContext } from "../contexts/PayingContext"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"


function PayingResume({ nombre, id, paymentmethod, number }) {

    const { personalData, paymentMethod } = useContext(PayingContext)

    let navigate = useNavigate()

    const handleNext = () => {
        navigate('/processingpayment')
    }

    const handleCancel = () => {
        navigate('/searcher')
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
                    {(paymentMethod.tarjeta) ? (paymentMethod.proveedor) : (paymentMethod.banco) + ' - ' + paymentMethod.numero}
                </p>
            </div>
            <PayingConfirmButton handleNext={handleNext} handleCancel={handleCancel} />
        </div>
    )
}

export default PayingResume