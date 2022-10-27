import TabMenu from "../components/TabMenu"
import PersonalInfoForm from "../components/PersonalInfoForm"

function PersonalSettings() {
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