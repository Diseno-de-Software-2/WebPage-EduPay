
function TitlePaymentForm({ title, handleEdit, handleDelete, edit, create }) {
    return (
        <div className='flex justify-between mb-5'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className={(!create) ? ('flex gap-2 items-center') : ('flex gap-2 items-center invisible')}>
                <div className='bg-[#470FF4] rounded p-1 hover:cursor-pointer hover:bg-[#3C11BE]' onClick={handleEdit}><img
                    className='w-4' src="/Edit.svg" alt="" /></div>
                <div className='bg-[#E71D36] rounded p-1 hover:cursor-pointer hover:bg-[#BC192D]' onClick={handleDelete}><img className='w-4' src="/Delete.svg" alt="" /></div>
            </div>
        </div>
    )
}

export default TitlePaymentForm