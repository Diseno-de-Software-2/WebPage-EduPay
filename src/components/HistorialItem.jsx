import React from 'react'

function HistorialItem({ concepto, precio, fecha, medio }) {
    return (
        <div>
            <div className='flex justify-between text-start my-2'>
                <div>
                    <p>
                        {concepto}
                    </p>
                    <p>
                        {fecha}
                    </p>
                    <p>
                        {precio}
                    </p>
                </div>
                <div className='text-end'>
                    <p className='w-52 text-right'>
                        {medio}
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default HistorialItem