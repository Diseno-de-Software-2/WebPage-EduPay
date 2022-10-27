import React from 'react'

function PersonalInformationCard({ title, img, href }) {
    return (
        <a className='flex flex-col items-center justify-center shadow-2xl py-5 px-10 gap-3 w-[300px] aspect-square' href={href}>
            <img src={img} alt="" />
            <h3 className='text-2xl opacity-50 font-bold'>
                {title}
            </h3>
        </a>
    )
}

export default PersonalInformationCard