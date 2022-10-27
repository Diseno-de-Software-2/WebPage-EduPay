import PayingConfirmButton from "./PayingConfirmButton"

function PayingResume({ nombre, id, paymentmethod, number }) {

    const handleNext = () => {
        // go to url /processingpayment
        window.location.href = '/processingpayment'
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
                    {nombre + ' - ' + id}
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