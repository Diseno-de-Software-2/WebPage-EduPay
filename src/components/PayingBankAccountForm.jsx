import React from 'react'
import InputPaymentForm from './InputPaymentForm'
import SelectPaymentForm from './SelectPaymentForm'

function PayingBankAccountForm() {
    return (
        <div className='w-full'>
            <div className='flex gap-3'>
                <InputPaymentForm
                    label='Número de cuenta'
                    type={'number'}
                    name='number'
                    id={'number'}
                    blocked={false}
                />
                <InputPaymentForm
                    label='Nombre del titular'
                    type={'text'}
                    name='name'
                    id={'name'}
                    blocked={false}
                />
            </div>
            <InputPaymentForm
                label='Correo electronico'
                type={'email'}
                name='email'
                id={'email'}
                blocked={false}
            />

            <SelectPaymentForm
                label='Banco'
                options={
                    [
                        { value: '1', label: 'Banco 1' },
                        { value: '2', label: 'Banco 2' },
                    ]
                }
                blocked={false}
            />

        </div>
    )
}

export default PayingBankAccountForm