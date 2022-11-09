import HistorialItem from "../components/HistorialItem"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"

function PaymentHistory() {

    const { user, token } = useContext(UserContext)
    const [payments, setPayments] = useState([])
    const [error, setError] = useState(null)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) === '{}') {
            navigate('/login')
        } else {
            axios.get(`http://localhost:3000/query/historial-${user.id}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    if (res.data === 'Empty result') {
                        setError('No hay pagos registrados')
                    } else {
                        setPayments(res.data)
                        console.log(res.data)
                    }
                })
                .catch(err => {
                    setError('Error al cargar el historial, intente nuevamente')
                })
        }
    }, [])

    if (error) {
        return (
            <div className='text-center grow my-5'>
                <div className='flex justify-center mb-5'>
                    <h1 className='text-3xl'>Historial de transacciones</h1>
                </div>
                <div className='flex flex-col h-auto w-[1000px] shadow-2xl mx-auto p-5'>
                    <h1 className='text-2xl text-red-600'>
                        {error}
                    </h1>
                </div>
            </div>
        )
    }

    return (
        <div className='text-center grow my-5'>
            <div className='flex justify-center mb-5'>
                <h1 className='text-3xl'>Historial de transacciones</h1>
            </div>
            <div className='flex flex-col h-auto w-[1000px] shadow-2xl mx-auto p-5'>
                {
                    payments.map(payment => {
                        return <HistorialItem key={payment.id} concepto={payment.servicio} fecha={payment.fecha} precio={payment.precio} medio={payment.metodo_pago} />
                    })
                }
            </div>
        </div>
    )
}

export default PaymentHistory