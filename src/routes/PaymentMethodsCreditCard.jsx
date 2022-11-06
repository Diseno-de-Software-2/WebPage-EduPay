import TabMenu from '../components/TabMenu';
import CreditCartForm from '../components/CreditCartForm';
import { CreditCardsProvider } from '../contexts/CreditCardsContext';
import CreditCardSelector from '../components/CreditCardSelector';
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function PaymentMethodsCreditCard() {

    const { user } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (JSON.stringify(user) === '{}') {
            navigate('/login')
        }
    }, [])


    return (
        <CreditCardsProvider>
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
                selected={0}>
                <div className="flex items-start justify-between gap-24">
                    <CreditCardSelector />
                    <CreditCartForm />
                </div>

            </TabMenu>
        </CreditCardsProvider>
    )
}

export default PaymentMethodsCreditCard