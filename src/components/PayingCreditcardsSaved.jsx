import PayingCreditCardCard from "./PayingCreditCardCard"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import { PayingContext } from "../contexts/PayingContext"
import axios from 'axios'

function PayingCreditcardsSaved() {

    const [selected, setSelected] = useState(0)
    const { user, token } = useContext(UserContext)
    const [creditCards, setCreditCards] = useState([])
    const { setPaymentMethod, paymentMethod } = useContext(PayingContext)


    useEffect(() => {
        axios.get(`http://localhost:3000/query/tarjetas-${user.id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then(res => {
                if (res.data !== 'Empty result') {
                    setCreditCards(res.data)
                    setPaymentMethod({
                        tarjeta: true,
                        cuenta: false,
                        numero: res.data[0].numero,
                        nombre: res.data[0].nombre_titular,
                        fecha: res.data[0].fecha_expiracion.split('T')[0],
                        codigo: res.data[0].cvv,
                        proveedor: res.data[0].proveedor,
                        cuotas: ""
                    })
                }
            })
            .catch(err => {
                setError('Un error inesperado ha ocurrido, por favor intente de nuevo')
            })
    }, [])

    const handleSelect = (index) => {
        setPaymentMethod({
            tarjeta: true,
            cuenta: false,
            numero: creditCards[index].numero,
            nombre: creditCards[index].nombre_titular,
            fecha: res.data[0].fecha_expiracion.split('T')[0],
            codigo: creditCards[index].cvv,
            cuotas: "",
            proveedor: creditCards[index].proveedor
        })
        setSelected(index)
    }

    return (
        <div className='py-5 flex flex-col gap-3'>
            {
                creditCards.map((item, index) => {
                    return (
                        <PayingCreditCardCard
                            mark={item.proveedor}
                            number={(item.numero + '').substring(12, 16)}
                            selected={selected === index}
                            handleSelect={handleSelect}
                            index={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default PayingCreditcardsSaved