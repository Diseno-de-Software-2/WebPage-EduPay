import PayingInfoCard from "../components/PayingInfoCard"
import PayingForm from "../components/PayingForm"
import PayingProgressBar from "../components/PayingProgressBar"
import PayingResume from "../components/PayingResume"
import HelpButton from "../components/HelpButton"
import PayingPaymentMethod from "../components/PayingPaymentMethod"
import { useContext } from "react"
import { PayingContext } from "../contexts/PayingContext"
import { SearchContext } from "../contexts/SearchContext"
import { Link } from "react-router-dom"

function Paying() {

    const { personalData, paymentMethod, service } = useContext(PayingContext)
    const { sedeList, officeList } = useContext(SearchContext)

    // get step from url
    const url = window.location.pathname.split('/')[2]
    if (url === 'personaldata') {
        var step = 1
    } else if (url === 'paymentmethod') {
        var step = 2
    } else if (url === 'confirmation') {
        var step = 3
    }

    if (JSON.stringify(service) == "{}") {

        return (
            <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="text-2xl font-bold">
                    El proceso de pago ha sido interrunpido,
                    por favor vuelva a intentarlo.
                </h1>
                <Link to="/searcher" className="
                    mt-10
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    py-2
                    px-4
                    text-xl
                    focus:outline-none
                    focus:shadow-outline
                ">
                    Volver al buscador
                </Link>
            </div>
        )

    }

    console.log("service", service)
    console.log("sedeList", sedeList)
    console.log("officeList", officeList)

    return (
        <>
            <div className="relative flex gap-10 justify-center items-start my-5 min-h-screen">
                <div className="flex items-start justify-start shadow-2xl py-5 px-10 w-[700px] min-h-[500px] gap-10">
                    <div className="h-[500px]" >
                        <PayingProgressBar step={step} />
                    </div>
                    {
                        step === 1 ? <PayingForm /> : (step === 2 ? <PayingPaymentMethod /> : <PayingResume />)
                    }

                </div>
                <PayingInfoCard title={service.title} price={service.price} description={'Expedido por la oficina de ' + service.oficina + " en " + sedeList[service.sede - 1].ciudad} />
                {/* sedeList[service.sede - 1].ciudad */}
                <HelpButton />
            </div>
        </>
    )
}

export default Paying