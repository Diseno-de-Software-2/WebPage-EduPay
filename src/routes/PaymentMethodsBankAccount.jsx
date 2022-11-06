import TabMenu from "../components/TabMenu"
import BankAccountForm from "../components/BankAccountForm"
import BankAccountSelector from "../components/BankAccountSelector"
import { BankAccountsProvider } from "../contexts/BankAccountsContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function PaymentMethodsBankAccount() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) === '{}') {
            navigate('/login')
        }
    }, [])

    return (
        <BankAccountsProvider>
            <TabMenu
                tabs={
                    [{
                        title: 'Tarjetas de crédito',
                        link: '/paymentmethods/creditcards'
                    }, {
                        title: 'Cuentas bancarias',
                        link: '/paymentmethods/bankaccounts'
                    }]
                }
                selected={1}>
                <div className="flex items-start justify-between gap-16">
                    <BankAccountSelector />
                    <BankAccountForm />
                </div>
            </TabMenu>
        </BankAccountsProvider>
    )
}

export default PaymentMethodsBankAccount