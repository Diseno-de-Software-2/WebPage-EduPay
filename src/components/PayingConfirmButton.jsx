import React from 'react'

function PayingConfirmButton({ handleNext, handleCancel }) {
    return (
        <div className={
            'flex justify-end gap-3'
        }>
            <button className="bg-[#D9D9D9] px-7 py-2 font-bold hover:bg-[#bbbbbb]" onClick={handleCancel}>Cancelar</button>
            <button className="bg-[#470FF4] text-white px-7 py-2 hover:bg-[#390cc0]" onClick={handleNext}>Siguiente</button>
        </div>
    )
}

export default PayingConfirmButton