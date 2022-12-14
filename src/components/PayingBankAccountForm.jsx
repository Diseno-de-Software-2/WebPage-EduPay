import React, { useContext, useEffect } from 'react'
import InputPaymentForm from './InputPaymentForm'
import SelectPaymentForm from './SelectPaymentForm'
import { PayingContext } from '../contexts/PayingContext'

function PayingBankAccountForm() {

    const { paymentMethod, setPaymentMethod } = useContext(PayingContext)

    useEffect(() => {
        setPaymentMethod({
            tarjeta: false,
            cuenta: true,
            numero: "",
            nombre: "",
            email: "",
            saldo: 0,
            banco: "East Bank"
        })
    }, [])



    return (
        <div className='w-full'>
            <div className='flex gap-3'>
                <InputPaymentForm
                    label='Número de cuenta'
                    type={'number'}
                    name='numero'
                    id={'numero'}
                    blocked={false}
                    value={paymentMethod.numero}
                    onChange={(e) => setPaymentMethod({ ...paymentMethod, numero: e.target.value })}
                />
                <InputPaymentForm
                    label='Nombre del titular'
                    type={'text'}
                    name='nombre'
                    id={'nombre'}
                    blocked={false}
                    value={paymentMethod.nombre}
                    onChange={(e) => setPaymentMethod({ ...paymentMethod, nombre: e.target.value })}
                />
            </div>
            <InputPaymentForm
                label='Correo electronico'
                type={'email'}
                name='email'
                id={'email'}
                blocked={false}
                value={paymentMethod.email}
                onChange={(e) => setPaymentMethod({ ...paymentMethod, email: e.target.value })}
            />

            <SelectPaymentForm
                label='Banco'
                options={[
                    { value: 'East Bank', label: 'East Bank' },
                    { value: 'Western Bank', label: 'Western Bank' },
                ]}
                blocked={false}
                value={paymentMethod.banco}
                onChange={(e) => setPaymentMethod({ ...paymentMethod, banco: e.target.value })}
            />

        </div>
    )
}

export default PayingBankAccountForm