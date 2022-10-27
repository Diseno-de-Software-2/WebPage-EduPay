import CreditCardCard from "./CreditCardCard"
import { useContext } from "react"
import { CreditCardsContext } from "../contexts/CreditCardsContext"

function CreditCardSelector() {

    const { setSelected, setCreate, selected } = useContext(CreditCardsContext)

    const handleCreate = () => {
        setCreate(true)
        setSelected(-1)
    }

    const cardsLenght = 3

    return (
        <div className={`w-[300px]`} style={{ height: `calc(60px * ${cardsLenght} + 200px)` }}>
            <CreditCardCard
                number={1234567894789520}
                mark="Visa"
                index={0}
            />
            <CreditCardCard
                number={1234567894789520}
                mark="Mastercard"
                index={1}
            />
            <CreditCardCard
                number={1234567894789520}
                mark="American Express"
                index={2}
            />
            <div className="absolute flex flex-col items-center justify-center w-[300px] h-[200px] bg-[#D9D9D9] p-2 shadow-2xl rounded-md hover:cursor-pointer"
                style={{ marginTop: cardsLenght * 60 + 'px', left: selected === -1 ? '100px' : '' }}
                onClick={handleCreate}
            >
                <img className="w-20" src="/add.svg" alt="" />
                <p className="text-3xl font-bold text-center opacity-50">Añadir tarjeta de credito</p>
            </div>

        </div>
    )
}

export default CreditCardSelector