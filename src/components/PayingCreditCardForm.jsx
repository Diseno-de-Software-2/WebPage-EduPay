import React, { useContext, useEffect } from 'react'
import InputPaymentForm from './InputPaymentForm'
import SelectPaymentForm from './SelectPaymentForm'
import { PayingContext } from '../contexts/PayingContext'


function PayingCreditCardForm() {

    const { paymentMethod, setPaymentMethod } = useContext(PayingContext)

    useEffect(() => {
        setPaymentMethod({
            tarjeta: true,
            cuenta: false,
            numero: "",
            nombre: "",
            fecha: "",
            codigo: "",
            cuotas: "",
            proveedor: "Visa"
        })
    }, [])

    return (
        <div className='w-full'>

            <InputPaymentForm
                label='Número de tarjeta'
                type='number'
                name='numero'
                id='numero'
                blocked={false}
                value={paymentMethod.numero}
                onChange={(e) => setPaymentMethod({ ...paymentMethod, numero: e.target.value })}
            />
            <div className='mt-2'>
                <InputPaymentForm
                    label='Nombre'
                    type='text'
                    name='nombre'
                    id='nombre'
                    blocked={false}
                    value={paymentMethod.nombre}
                    onChange={(e) => setPaymentMethod({ ...paymentMethod, nombre: e.target.value })}
                />
            </div>

            <div className='flex gap-3 mt-2'>
                <InputPaymentForm

                    label='Fecha de expiración'
                    type='date'
                    name='fecha'
                    id='fecha'
                    blocked={false}
                    value={paymentMethod.fecha}
                    onChange={(e) => setPaymentMethod({ ...paymentMethod, fecha: e.target.value })}
                />
                <InputPaymentForm
                    label='Código de seguridad'
                    type='number'
                    name='codigo'
                    id='codigo'
                    blocked={false}
                    value={paymentMethod.codigo}
                    onChange={(e) => setPaymentMethod({ ...paymentMethod, codigo: e.target.value })}
                />
                <SelectPaymentForm
                    options={[
                        { value: 'Visa', label: 'Visa' },
                        { value: 'Mastercard', label: 'Mastercard' },
                        { value: 'American Express', label: 'American Express' },
                    ]}
                    blocked={false}
                    label='Proveedor'
                    value={paymentMethod.proveedor}
                    onChange={(e) => setPaymentMethod({ ...paymentMethod, proveedor: e.target.value })}
                />
            </div>
            <div className='w-36 mt-2'>
                <InputPaymentForm
                    label='Número de cuotas'
                    type='number'
                    name='cuotas'
                    id='cuotas'
                    blocked={false}
                    value={paymentMethod.cuotas}
                    onChange={(e) => {
                        console.log(e.target.value)
                        if (e.target.value > 0 && !isNaN(e.target.value)) {
                            setPaymentMethod({ ...paymentMethod, cuotas: e.target.value })
                        } else {
                            setPaymentMethod({ ...paymentMethod, cuotas: '' })
                        }
                    }
                    }
                />
            </div>
        </div>
    )
}

export default PayingCreditCardForm