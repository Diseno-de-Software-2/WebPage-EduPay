import TabMenu from '../components/TabMenu';
import CreditCartForm from '../components/CreditCartForm';
import { useContext } from 'react';
import { CreditCardsProvider } from '../contexts/CreditCardsContext';
import CreditCardSelector from '../components/CreditCardSelector';

function PaymentMethodsCreditCard() {
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