import React from 'react'

function TabMenu({ children, tabs, selected }) {
    return (
        <div className='min-w-[50%] mx-auto my-10 shadow border'>
            <div className='flex items-center justify-start px-3 m-0 h-14'>
                <div className='ml-2'>
                    <a href="/home">
                        <img className='w-6' src="/home.png" alt="" />
                    </a>
                </div>
                {
                    tabs.map((tab, index) => (
                        (index === selected) ?
                            (
                                <div className='px-5 py-3 h-full ml-6 drop-shadow-xl bg-white' key={index}>
                                    <p className='text-xl opacity-50'>{tab.title}</p>
                                </div>
                            )
                            :
                            (

                                <a className='p-5 h-full ml-6' href={tab.link} key={index}>
                                    <p className='text-xl opacity-50'>{tab.title}</p>
                                </a>
                            )
                    ))
                }
            </div>
            <div className='w-full h-auto px-16 py-8 bg-white drop-shadow-xl'>
                {children}
            </div>
        </div>
    )
}

export default TabMenu