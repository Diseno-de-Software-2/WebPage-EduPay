import React, { useState } from 'react'

function HelpButton() {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className='absolute bottom-5 right-5 rounded-full shadow-2xl bg-[#D9D9D9] w-auto  h-auto flex items-center justify-evenly pl-2 pr-4 hover:cursor-pointer' onClick={handleClick}>
            {
                show && <div className='absolute -top-20 w-72 h-16 -left-40 bg-white rounded shadow-2xl border border-gray-400'>
                    <p className='text-base text-center pt-2'>¿Necesitas ayuda?</p>
                    <a className='text-base text-center ml-14' href='https://chat.whatsapp.com/IXuc87CTfj8IHpQ9Z3IOu5'>Escríbenos a: <span className='text-blue-500'>Whatsapp</span></a>
                </div>
            }
            <img src="/Help.png" alt="" />
            <p className='font-semibold text-xl opacity-70'>
                Ayuda
            </p>
        </div>
    )
}

export default HelpButton