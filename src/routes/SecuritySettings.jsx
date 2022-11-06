import SecurityForm from "../components/SecurityForm"
import TabMenu from "../components/TabMenu"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function SecuritySettings() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) === '{}') {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <TabMenu tabs={[
                {
                    title: 'Información personal',
                    link: '/personalsettings'
                }, {
                    title: 'Seguridad',
                    link: '/securitysettings'
                }
            ]} selected={1}>
                <SecurityForm />
            </TabMenu>
        </>
    )
}

export default SecuritySettings