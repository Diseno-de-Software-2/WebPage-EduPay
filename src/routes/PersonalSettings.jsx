import TabMenu from "../components/TabMenu"
import PersonalInfoForm from "../components/PersonalInfoForm"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function PersonalSettings() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) === '{}') {
            navigate('/login')
        }
    }, [])

    return (
        <TabMenu tabs={
            [{
                title: 'Información personal',
                link: '/personalsettings'
            }, {

                title: 'Seguridad',
                link: '/securitysettings'
            }]} selected={0}>
            <PersonalInfoForm />
        </TabMenu>
    )
}

export default PersonalSettings