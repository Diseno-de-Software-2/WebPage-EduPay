import React from 'react'
import InputPaymentForm from './InputPaymentForm'
import SelectPaymentForm from './SelectPaymentForm'

function PayingCreditCardForm() {
    return (
        <div className='w-full'>

            <InputPaymentForm
                label='Número de tarjeta'
                type='number'
                name='numero'
                id='numero'
                blocked={false}
            />
            <InputPaymentForm
                label='Nombre'
                type='text'
                name='nombre'
                id='nombre'
                blocked={false}
            />

            <div className='flex gap-3'>
                <InputPaymentForm

                    label='Fecha de expiración'
                    type='text'
                    name='fecha'
                    id='fecha'
                    blocked={false}
                />
                <InputPaymentForm
                    label='Código de seguridad'
                    type='number'
                    name='codigo'
                    id='codigo'
                    blocked={false}
                />
                <SelectPaymentForm
                    options={[
                        { value: '1', label: 'Banco 1' },
                        { value: '2', label: 'Banco 2' },
                    ]}
                    blocked={false}
                />
            </div>
            <InputPaymentForm
                label='Número de cuotas'
                type='number'
                name='cuotas'
                id='cuotas'
                blocked={false}
            />
        </div>
    )
}

export default PayingCreditCardForm