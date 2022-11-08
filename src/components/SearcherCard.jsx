import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { PayingContext } from "../contexts/PayingContext"

function SearcherCard({ title, description, link, price, oficina, sede }) {

    const { setService } = useContext(PayingContext)

    let navigate = useNavigate()

    const handleClick = () => {
        setService({
            title: title,
            description: description,
            price: price,
            oficina: oficina,
            sede: sede
        })
        navigate("/paying/personaldata")
    }

    return (
        <div>
            <div className="w-[1000px] h-[150px] bg-white flex flex-col gap-2 p-4 shadow-2xl">
                <div className="flex justify-between h-full">
                    <div>
                        <h1 className="text-3xl">{title}</h1>
                        <p className="opacity-70 mt-1">{description}</p>
                    </div>
                    <div className="text-right flex flex-col justify-between h-full">
                        <h1 className="text-red-500 text-3xl">
                            $ {price}
                        </h1>
                        <div className="py-2 px-16 bg-[#470FF4] text-white text-center text-lg hover:cursor-pointer" onClick={handleClick}>Pagar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearcherCard