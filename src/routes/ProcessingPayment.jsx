import React, { useState, useContext, useEffect } from 'react'
import { PayingContext } from '../contexts/PayingContext'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'

function ProcessingPayment() {

    const [state, setState] = useState('processing')
    const { paymentMethod, service, personalData } = useContext(PayingContext)
    const { user, token } = useContext(UserContext)

    useEffect(() => {
        axios.post('http://localhost:3000/pay/service', {
            personalData,
            paymentMethod,
            service
        }, {
            headers: {
                'Authorization': `${token}`
            }
        }).then(res => {
            setState('success')
        }).catch(err => {
            switch (err.response.status) {
                case 503:
                    setState(`Servicio de ${err.response.data.service} no disponible`)
                    break;
                default:
                    setState('error')
                    break;
            }
        })
    }, [])

    return (
        <div className='flex flex-col items-center justify-center gap-10 my-10 w-[1000px] mx-auto'>
            <h1 className='text-5xl text-center font-bold'>
                {(state === 'processing' ? 'Tu transacción está siendo procesada' : (state === 'success' ? 'Tu transacción fue exitosa' : `Ha ocurrido un error y la transacción no se ha podido realizar.${(state !== 'error' ? ` ${state}` : '')}`))}
            </h1>
            <img className='w-52' src={(state === 'processing') ? '/PayState/In Progress.svg' : (state === 'success' ? '/PayState/Ok.svg' : '/PayState/Error.svg')} alt="" />
            {
                (state !== 'processing' ? (
                    <a href="/searcher">Volver al inicio</a>
                ) : (null))
            }
        </div>
    )
}

export default ProcessingPayment