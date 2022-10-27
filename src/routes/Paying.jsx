import PayingInfoCard from "../components/PayingInfoCard"
import PayingForm from "../components/PayingForm"
import PayingProgressBar from "../components/PayingProgressBar"
import PayingResume from "../components/PayingResume"
import HelpButton from "../components/HelpButton"
import PayingPaymentMethod from "../components/PayingPaymentMethod"

function Paying() {

    // get step from url
    const url = window.location.pathname.split('/')[2]
    if (url === 'personaldata') {
        var step = 1
    } else if (url === 'paymentmethod') {
        var step = 2
    } else if (url === 'confirmation') {
        var step = 3
    }

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
                <PayingInfoCard title={'Certificado de estudio'} price={'28000'} description={'Expedido por la oficina de registro'} />
                <HelpButton />
            </div>
        </>
    )
}

export default Paying