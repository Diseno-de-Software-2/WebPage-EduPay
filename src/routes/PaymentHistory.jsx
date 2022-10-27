import HistorialItem from "../components/HistorialItem"

function PaymentHistory() {
    return (
        <div className='text-center grow my-5'>
            <div className='flex justify-center mb-5'>
                <h1 className='text-3xl'>Historial de transacciones</h1>
            </div>
            <div className='flex flex-col h-auto w-[1000px] shadow-2xl mx-auto p-5'>
                <HistorialItem concepto="Certificado de notas" fecha="12/11/2021" precio="$32.552" medio="Visa" numero="9120" />
                <HistorialItem concepto="Certificado de estudio" fecha="13/11/2021" precio="$32.552" medio="Western Bank" numero="1526865684158092" />
            </div>
        </div>
    )
}

export default PaymentHistory