import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function Logout() {

    const { setUser, setToken } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        setUser({})
        setToken('')
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
    }, [])

    return (
        <div>Logout</div>
    )
}

export default Logout