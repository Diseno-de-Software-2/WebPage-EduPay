import PayingBankAccountCard from './PayingBankAccountCard'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { PayingContext } from '../contexts/PayingContext'
import axios from 'axios'
import ConsultButtonPaymentForm from './ConsultButtonPaymentForm'

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
                    let accounts = res.data
                    accounts.forEach(account => {
                        account.saldo = -1
                    })
                    setBankAccounts(accounts)
                    console.log(res.data)
                    setPaymentMethod({
                        tarjeta: false,
                        cuenta: true,
                        numero: res.data[0].numero,
                        nombre: res.data[0].nombre_titular,
                        email: res.data[0].email,
                        banco: res.data[0].banco
                    })
                }
            })
            .catch(err => {
                if (err.response.status === 503) {
                    alert(`Servicio de ${err.response.data.service} no disponible, ${err.response.data.message}. Por favor inténtelo más tarde.`)
                } else {
                    alert(`Un error inesperado ha ocurrido, por favor intente de nuevo.`)
                }
            })
    }, [])


    const handleSelect = (index) => {
        console.log("handleSelect")
        setPaymentMethod({
            tarjeta: false,
            cuenta: true,
            numero: bankAccounts[index].numero,
            nombre: bankAccounts[index].nombre_titular,
            email: bankAccounts[index].email,
            banco: bankAccounts[index].banco
        })
        setSelected(index)
    }

    const handleConsult = () => {
        Promise.all(
            bankAccounts.map((account, index) => {
                return axios.get(`http://localhost:3000/balance/saldo-cuenta-${account.numero}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                    .then(res => {
                        setBankAccounts(bankAccounts.map((account, i) => {
                            if (i === index) {
                                account.saldo = res.data.saldo
                            }
                            return account
                        }))
                    })
                    .catch(err => {
                        if (err.response.status === 503) {
                            alert(`Servicio de ${err.response.data.service} no disponible, ${err.response.data.message}. Por favor inténtelo más tarde.`)
                        } else {
                            alert(`Un error inesperado ha ocurrido, por favor intente de nuevo.`)
                        }
                    })
            })
        )
    }

    return (
        <div className='py-5 flex flex-col gap-3 justify-start'>
            {
                bankAccounts.map((item, index) => {
                    return (
                        <PayingBankAccountCard
                            key={index}
                            bank={item.banco}
                            number={item.numero}
                            selected={selected === index}
                            handleSelect={handleSelect}
                            index={index}
                            saldo={item.saldo}
                        />
                    )
                })
            }
            {
                (bankAccounts.length > 0) && <div className='flex justify-end mt-10'>
                    <ConsultButtonPaymentForm handleConsult={handleConsult} />
                </div>
            }
        </div>
    )
}

export default PayingBankAccountSaved