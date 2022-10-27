import InputPaymentForm from "./InputPaymentForm"
import SelectPaymentForm from "./SelectPaymentForm"
import PayingConfirmButton from "./PayingConfirmButton"

function PayingForm() {

    const handleNext = (e) => {
        e.preventDefault();
        console.log('Next')
        window.location.href = '/paying/paymentmethod'
    }

    const handleCancel = () => {
        console.log('cancel')
    }

    return (
        <form className="flex flex-col justify-between min-h-[500px]" >
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold mb-5">Información del usuario</h1>
                <div className="flex gap-3">
                    <InputPaymentForm label={'Nombre'} type={'text'} name='nombre' id={'nombre'} blocked={false} />
                    <InputPaymentForm label={'Apellido'} type={'text'} name='apellido' id={'apellido'} blocked={false} />
                </div>
                <InputPaymentForm label={'Correo electrónico'} type={'email'} name='email' id={'email'} blocked={false} />
                <div className="flex gap-3">
                    <SelectPaymentForm options={
                        [
                            { value: '1', label: 'C.C' },
                            { value: '2', label: 'T.I.' },
                            { value: '3', label: 'Pasaporte' },
                        ]
                    } blocked={false} />
                    <InputPaymentForm label={'Número de identificación'} type={'number'} name='identificacion' id={'identificacion'} blocked={false} />
                </div>
            </div>

            <PayingConfirmButton handleCancel={handleCancel} handleNext={handleNext} />
        </form>
        //  label, type, name, id, blocked 
    )
}

export default PayingForm