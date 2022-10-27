import BankAccoundCard from "./BankAccoundCard"
import { useContext } from "react"
import { BankAccountsContext } from "../contexts/BankAccountsContext"

function BankAccountSelector() {

    const { setSelected, setCreate, selected } = useContext(BankAccountsContext)

    const handleClick = () => {
        setCreate(true)
        setSelected(-1)
    }

    return (
        <div className="flex flex-col gap-3">
            {
                [1, 2, 3].map((item, index) => (
                    <BankAccoundCard
                        key={index}
                        number={item}
                        bank="Banco 1"
                        index={index}
                    />
                ))
            }
            <div className={
                selected === -1 ? 'w-full flex justify-center items-center h-16 px-5 hover:cursor-pointer bg-[#4056F4] text-white' : "w-full border border-black flex justify-center items-center h-16 px-5 hover:cursor-pointer hover:bg-gray-100"
            } onClick={handleClick}>
                <p className="text-lg">Agregar cuenta bancaria</p>
            </div>
        </div>
    )
}

export default BankAccountSelector