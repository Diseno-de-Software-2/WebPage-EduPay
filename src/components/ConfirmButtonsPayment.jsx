function ConfirmButtonsPayment({ handleCancel, handleSave, create, edit }) {

    return (
        <div className={
            (create || edit) ?
                'flex justify-end gap-3' :
                'invisible flex justify-end gap-3'
        }>
            <button className="bg-[#D9D9D9] px-7 py-2 font-bold hover:bg-[#bbbbbb]" onClick={handleCancel}>Cancelar</button>
            <button className="bg-[#470FF4] text-white px-7 py-2 hover:bg-[#390cc0]" onClick={handleSave}>Guardar</button>
        </div>
    )
}

export default ConfirmButtonsPayment