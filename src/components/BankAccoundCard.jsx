import { useContext } from "react"
import { BankAccountsContext } from "../contexts/BankAccountsContext"

function BankAccoundCard({ number, bank, index }) {

    const { selected, setSelected, setCreate, setEdit } = useContext(BankAccountsContext)

    const handleClick = () => {
        setSelected(index)
        setCreate(false)
        setEdit(false)
    }

    const propsCard = {
        className: (selected === index) ? 'bg-[#4056F4] flex gap-5 px-7 py-2 text-white hover:cursor-pointer' : 'flex gap-5 px-7 py-2 hover:cursor-pointer hover:bg-gray-100',
        onClick: handleClick
    }

    return (
        <div {...propsCard}>
            {
                (selected === index) ? (
                    <img src="/MuseumWhite.svg" alt="" />
                ) : (
                    <img src="/MuseumGray.svg" alt="" />
                )
            }
            <div className="flex flex-col justify-center">
                <h2>
                    {number}
                </h2>
                <p className="text-sm">
                    {bank}
                </p>
            </div>
        </div>
    )
}

export default BankAccoundCard