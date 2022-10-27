import React from 'react'

function HelpButton() {
    return (
        <div className='absolute bottom-5 right-5 rounded-full shadow-2xl bg-[#D9D9D9] w-auto  h-auto flex items-center justify-evenly pl-2 pr-4 '>
            <img src="/Help.png" alt="" />
            <p className='font-semibold text-xl opacity-70'>
                Ayuda
            </p>
        </div>
    )
}

export default HelpButton