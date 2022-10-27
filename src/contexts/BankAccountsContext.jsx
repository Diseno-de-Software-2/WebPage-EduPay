import { createContext, useState } from "react"

const BankAccountsContext = createContext()

function BankAccountsProvider({ children }) {

    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    const [selected, setSelected] = useState(0)

    return (
        <BankAccountsContext.Provider value={{ edit, setEdit, create, setCreate, selected, setSelected }}>
            {children}
        </BankAccountsContext.Provider>
    )
}

export { BankAccountsContext, BankAccountsProvider }

