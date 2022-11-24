import React from 'react'

function HistorialItem({ concepto, precio, fecha, medio, exitoso }) {
    return (
        <div>
            <div className='flex justify-between text-start my-2'>
                <div className={!exitoso && 'text-red-600'}>
                    <p>
                        {concepto + (!exitoso ? '- Fallido' : "")}
                    </p>
                    <p>
                        {fecha}
                    </p>
                    <p>
                        {precio}
                    </p>
                </div>
                <div className={!exitoso ? 'text-red-600 text-end' : 'text-end'}>
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