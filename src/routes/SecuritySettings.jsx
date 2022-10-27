import SecurityForm from "../components/SecurityForm"
import TabMenu from "../components/TabMenu"

function SecuritySettings() {
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