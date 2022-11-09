import { createContext, useState, useEffect, useContext } from "react"
import { UserContext } from "./UserContext"
import axios from "axios"

const CreditCardsContext = createContext()

function CreditCardsProvider({ children }) {

    const { user, token } = useContext(UserContext)

    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    const [selected, setSelected] = useState(0)
    const [creditCards, setCreditCards] = useState([])
    const [creditCard, setCreditCard] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3000/query/tarjetas-${user.id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then(res => {
                if (res.data !== 'Empty result') {
                    setCreditCards(res.data)
                } else {
                    setSelected(-1)
                    setCreate(true)
                }
            })
            .catch(err => {
                setError('Un error inesperado ha ocurrido, por favor intente de nuevo')
            })
    }, [])

    useEffect(() => {
        if (selected != -1 || (selected == -1 && !create)) {
            axios.get(`http://localhost:3000/query/tarjetas-${user.id}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    if (res.data !== 'Empty result') {
                        setCreditCards(res.data)
                    } else {
                        setSelected(-1)
                        setCreate(true)
                        setCreditCards([])
                    }
                })
                .catch(err => {
                    setError('Un error inesperado ha ocurrido')
                })
        }
    }, [create, selected])

    return (
        <CreditCardsContext.Provider value={{ edit, setEdit, create, setCreate, selected, setSelected, creditCards, setCreditCards, error, setError, creditCard, setCreditCard }}>
            {children}
        </CreditCardsContext.Provider>
    )
}

export { CreditCardsContext, CreditCardsProvider }

