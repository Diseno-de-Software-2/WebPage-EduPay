import { createContext, useState, useEffect } from "react"

const UserContext = createContext()

function UserProvider({ children }) {

    const [token, setToken] = useState(() => {
        const token = localStorage.getItem('token')
        return token ? token : ''
    })
    const [user, setUser] = useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : {}
    })

    useEffect(() => {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
    }, [token, user])

    return (
        <UserContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }