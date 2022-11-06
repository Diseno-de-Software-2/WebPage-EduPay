import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function Login() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    const handleRedirect = () => {
        if (JSON.stringify(user) !== '{}') {
            navigate('/home')
        }
    }

    useEffect(() => {
        handleRedirect()
    }, [user])

    useEffect(() => {
        handleRedirect()
    }, [])

    return (
        <div className="w-100% my-10">
            <LoginForm />
        </div>
    )
}

export default Login