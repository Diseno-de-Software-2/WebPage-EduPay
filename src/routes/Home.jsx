import SearchHomeBar from "../components/SearchHomeBar"
import PersonalInformation from "../components/PersonalInformation"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function Home() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) === '{}') {
            navigate('/login')
        }
    }, [])

    return (
        <div className="mx-14 my-10">
            <h1 className="text-start text-5xl font-bold mr-10 leading-normal w-[600px] ">
                Bienvenido, {user.nombre}
            </h1>
            <div>
                <div>
                    <SearchHomeBar />
                </div>
                <div>
                    <PersonalInformation />
                </div>
            </div>
        </div>
    )
}

export default Home