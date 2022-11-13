import PayingBankAccountCard from './PayingBankAccountCard'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { PayingContext } from '../contexts/PayingContext'
import axios from 'axios'

function PayingBankAccountSaved() {

    const [selected, setSelected] = useState(0)
    const { user, token } = useContext(UserContext)
    const [bankAccounts, setBankAccounts] = useState([])
    const { setPaymentMethod, paymentMethod } = useContext(PayingContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/query/cuentas-${user.id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then(res => {
                if (res.data !== 'Empty result') {
                    setBankAccounts(res.data)
                    setPaymentMethod({
                        tarjeta: false,
                        cuenta: true,
                        numero: res.data[0].numero,
                        nombre: res.data[0].nombre_titular,
                        email: res.data[0].email,
                        saldo: res.data[0].saldo,
                        banco: res.data[0].banco
                    })
                }
            })
            .catch(err => {
                setError('Un error inesperado ha ocurrido, por favor intente de nuevo')
            })
    }, [])


    const handleSelect = (index) => {
        setPaymentMethod({
            tarjeta: false,
            cuenta: true,
            numero: bankAccounts[index].numero,
            nombre: bankAccounts[index].nombre_titular,
            email: bankAccounts[index].email,
            saldo: bankAccounts[index].saldo,
            banco: bankAccounts[index].banco
        })
        setSelected(index)
    }

    return (
        <div className='py-5 flex flex-col gap-3 justify-start'>
            {
                bankAccounts.map((item, index) => {
                    return (
                        <PayingBankAccountCard
                            bank={item.banco}
                            number={item.numero}
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

export default PayingBankAccountSaved