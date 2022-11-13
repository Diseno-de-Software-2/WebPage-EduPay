import { createContext, useState, useEffect, useContext } from "react"
import { UserContext } from "./UserContext"
import axios from "axios"

const BankAccountsContext = createContext()

function BankAccountsProvider({ children }) {

    const { user, token } = useContext(UserContext)

    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    const [selected, setSelected] = useState(0)
    const [bankAccounts, setBankAccounts] = useState([])
    const [bankAccount, setBankAccount] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3000/query/cuentas-${user.id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then(res => {
                if (res.data !== 'Empty result') {
                    setBankAccounts(res.data)
                } else {
                    setSelected(-1)
                    setCreate(true)
                }
            })
            .catch(err => {
                setError('Un error inesperado ha ocurrido, intente de nuevo')
            })
    }, [])

    useEffect(() => {
        if (selected != -1 || (selected == -1 && !create)) {
            axios.get(`http://localhost:3000/query/cuentas-${user.id}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    if (res.data !== 'Empty result') {
                        setBankAccounts(res.data)
                    } else {
                        setSelected(-1)
                        setCreate(true)
                        setBankAccounts([])
                        console.log('Empty result')
                    }
                })
                .catch(err => {
                    setError('Un error inesperado ha ocurrido')
                })
        }
    }, [create, selected])

    return (
        <BankAccountsContext.Provider value={{ edit, setEdit, create, setCreate, selected, setSelected, bankAccounts, setBankAccounts, bankAccount, setBankAccount, error, setError }}>
            {children}
        </BankAccountsContext.Provider>
    )
}

export { BankAccountsContext, BankAccountsProvider }

