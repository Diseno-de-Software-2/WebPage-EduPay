import InputPaymentForm from "./InputPaymentForm"
import SelectPaymentForm from "./SelectPaymentForm"
import PayingConfirmButton from "./PayingConfirmButton"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { PayingContext } from "../contexts/PayingContext"
import { useNavigate } from "react-router-dom"

function PayingForm() {

    const { user } = useContext(UserContext)
    const { personalData, setPersonalData } = useContext(PayingContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) != "{}") {
            setPersonalData(user)
        }
    }, [])

    const validateData = () => {
        if (personalData.nombre.lenght < 3) {
            return false
        }
        if (personalData.apellidos < 3) {
            return false
        }
        if (personalData.id.lenght < 1) {
            return false
        }
        if (!personalData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            return false
        }
        return true
    }

    const handleNext = (e) => {
        e.preventDefault();
        if (validateData()) {
            navigate('/paying/paymentmethod')
        } else {
            alert("Datos incorrectos")
        }
    }

    const handleCancel = () => {
        navigate('/searcher')
    }

    return (
        <form className="flex flex-col justify-between min-h-[500px]" >
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold mb-5">Información del usuario</h1>
                <div className="flex gap-3">
                    <InputPaymentForm label={'Nombre'} type={'text'} name='nombre' id={'nombre'} blocked={false} value={personalData.nombre} onChange={
                        (e) => {
                            setPersonalData({ ...personalData, nombre: e.target.value })
                        }
                    } />
                    <InputPaymentForm label={'Apellido'} type={'text'} name='apellido' id={'apellido'} blocked={false} value={personalData.apellidos} onChange={
                        (e) => {
                            setPersonalData({ ...personalData, apellidos: e.target.value })
                        }
                    } />
                </div>
                <InputPaymentForm label={'Correo electrónico'} type={'email'} name='email' id={'email'} blocked={false} value={personalData.email} onChange={
                    (e) => {
                        setPersonalData({ ...personalData, email: e.target.value })
                    }
                } />
                <InputPaymentForm label={'Número de identificación'} type={'number'} name='identificacion' id={'identificacion'} blocked={false} value={personalData.id} onChange={
                    (e) => {
                        setPersonalData({ ...personalData, id: e.target.value })
                    }
                } />
            </div>

            <PayingConfirmButton handleCancel={handleCancel} handleNext={handleNext} />
        </form>
        //  label, type, name, id, blocked 
    )
}

export default PayingForm