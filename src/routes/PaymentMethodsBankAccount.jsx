import TabMenu from "../components/TabMenu"
import BankAccountForm from "../components/BankAccountForm"
import BankAccountSelector from "../components/BankAccountSelector"
import { BankAccountsProvider } from "../contexts/BankAccountsContext"

function PaymentMethodsBankAccount() {
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