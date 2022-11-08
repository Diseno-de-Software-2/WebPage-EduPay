import { createContext, useState, useEffect } from "react"

const PayingContext = createContext()

function PayingProvider({ children }) {

    const [personalData, setPersonalData] = useState({})
    const [paymentMethod, setPaymentMethod] = useState({})
    const [service, setService] = useState({})

    return (
        <PayingContext.Provider value={{ personalData, setPersonalData, paymentMethod, setPaymentMethod, service, setService }}>
            {children}
        </PayingContext.Provider>
    )
}

export { PayingContext, PayingProvider }