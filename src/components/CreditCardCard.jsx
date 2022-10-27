import { CreditCardsContext } from "../contexts/CreditCardsContext"
import { useContext } from "react"

function CreditCardCard({ number, mark, index }) {

    const { setSelected, selected, setCreate, setEdit } = useContext(CreditCardsContext)

    const censure = (number) => {
        let censured = ''
        for (let i = 0; i < number.length; i++) {
            if (i % 4 === 0) {
                censured += ' '
            }
            if (i < number.length - 4) {
                censured += '*'
            } else {
                censured += number[i]
            }
        }
        return censured
    }

    const handleSelect = () => {
        setSelected(index)
        setCreate(false)
        setEdit(false)
    }

    return (
        <div className={
            'absolute flex items-start justify-evenly rounded-md text-white w-[300px] h-[200px] bg-[#4556EE] pt-2 shadow-2xl hover:cursor-pointer '
            + (mark === 'Visa' ? ' bg-[#4556EE]' : (mark === 'Mastercard' ? ' bg-[#D64949]' : ' bg-[#49BCD6]'))
        }
            style={{ marginTop: index * 60 + 'px', left: selected === index ? '100px' : '' }}
            onClick={handleSelect}
        >
            <p className="mt-2 text-lg">
                {censure(number.toString())}
            </p>
            <img className="w-14" src={mark === 'Visa' ? '/tarjetas/Visa.png' : ((mark === 'Mastercard') ? '/tarjetas/MasterCard.png' : '/tarjetas/American Express.png')} alt="" />
        </div >
    )
}

export default CreditCardCard