import SedeCard from "../components/SedeCard"

function SelectSede() {
    return (
        <div className='w-100% flex flex-col items-center my-10'>
            <h1 className='text-6xl text-center font-bold leading-normal w-[600px] mb-10'>Sede</h1>
            <div className="flex flex-row gap-10 flex-wrap justify-center">
                <SedeCard sede="Barranquilla" />
                <SedeCard sede="Cartagena" />
                <SedeCard sede="Santa Marta" />
                <SedeCard sede="Sincelejo" />
                <SedeCard sede="Montería" />
            </div>
        </div>
    )
}

export default SelectSede