import Banner from "../components/Banner"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function LandingPage() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) !== '{}') {
            navigate('/home')
        }
    }, [])

    return (
        <>
            <Banner />
        </>
    )
}

export default LandingPage