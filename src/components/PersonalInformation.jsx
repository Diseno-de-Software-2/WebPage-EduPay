import PersonalInformationCard from "./PersonalInformationCard"

function PersonalInformation() {
    return (
        <div className='my-5 text-center mt-20'>
            <h2 className='text-2xl font-thin mb-3'>Tu información</h2>
            <div className='flex justify-center gap-10'>
                <PersonalInformationCard title={"Tu información personal"} href={"/personalsettings"} img={"/home/User.png"} />
                <PersonalInformationCard title={"Tus medios de pago"} href={"/paymentmethods/creditcards"} img={"/home/Merchant Account.png"} />
                <PersonalInformationCard title={"Historial de transacciones"} href={"/paymenthistory"} img={"/home/Time Machine.png"} />
            </div>
        </div>
    )
}

export default PersonalInformation