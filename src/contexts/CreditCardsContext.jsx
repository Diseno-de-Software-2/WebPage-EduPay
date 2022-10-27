import { createContext, useState } from "react"

const CreditCardsContext = createContext()

function CreditCardsProvider({ children }) {
    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    const [selected, setSelected] = useState(0)
    return (
        <CreditCardsContext.Provider value={{ edit, setEdit, create, setCreate, selected, setSelected }}>
            {children}
        </CreditCardsContext.Provider>
    )
}

export { CreditCardsContext, CreditCardsProvider }

