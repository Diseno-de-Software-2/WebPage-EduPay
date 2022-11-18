import PayingCreditCardCard from "./PayingCreditCardCard"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import { PayingContext } from "../contexts/PayingContext"
import axios from 'axios'
import ConsultButtonPaymentForm from "./ConsultButtonPaymentForm"

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
                    // add credito to each card
                    let cards = res.data
                    cards.forEach(card => {
                        card.credito = -1
                    })
                    setCreditCards(cards)
                    setPaymentMethod({
                        tarjeta: true,
                        cuenta: false,
                        numero: res.data[0].numero,
                        nombre: res.data[0].nombre_titular,
                        fecha: res.data[0].fecha_expiracion.split('T')[0],
                        codigo: res.data[0].cvv,
                        proveedor: res.data[0].proveedor,
                        cuotas: "",
                    })
                }
            })
    }, [])

    const handleSelect = (index) => {
        console.log("handleSelect")
        setPaymentMethod({
            tarjeta: true,
            cuenta: false,
            numero: creditCards[index].numero,
            nombre: creditCards[index].nombre_titular,
            fecha: creditCards[index].fecha_expiracion.split('T')[0],
            codigo: creditCards[index].cvv,
            cuotas: "",
            proveedor: creditCards[index].proveedor
        })
        setSelected(index)
    }

    const handleConsult = () => {
        // consult to API usign promise all
        let creditCardsTemp = creditCards
        Promise.all(
            creditCards.map((card, index) => {
                return axios.get(`http://localhost:3000/balance/credito-tarjeta-${card.numero}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                }).then(res => {
                    setCreditCards(creditCardsTemp.map((card, i) => {
                        if (i === index) {
                            card.credito = res.data.credito
                        }
                        return card
                    }))
                }).catch(err => {
                    alert('Un error inesperado ha ocurrido, por favor intente de nuevo')
                })
            })
        )


    }

    return (
        <div className='py-5 flex flex-col gap-3'>
            {
                creditCards.map((item, index) => {
                    console.log("Item", item)
                    return <PayingCreditCardCard
                        key={index}
                        mark={item.proveedor}
                        number={(item.numero + '').substring(12, 16)}
                        selected={selected === index}
                        handleSelect={handleSelect}
                        index={index}
                        credito={item.credito}
                    />
                })
            }
            {
                (creditCards.length > 0) && <div className="flex justify-end mt-10">
                    <ConsultButtonPaymentForm handleConsult={handleConsult} />
                </div>
            }
        </div>
    )
}

export default PayingCreditcardsSaved