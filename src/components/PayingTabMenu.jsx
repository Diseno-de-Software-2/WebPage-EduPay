import React from 'react'

function PayingTabMenu({ children, selected, handleSelect }) {

    const propsSelected = {
        className: 'h-full w-auto border border-black flex items-center justify-center px-3 border-b-0 rounded-t-sm '
    }

    const propsUnselected = {
        className: 'h-full w-auto flex items-center justify-center px-3 border border-x-0 border-t-0 border-black cursos-pointer'
    }

    const propsSpaceFillerLeft = {
        className: 'h-full border-black flex items-center justify-center px-3 border border-x-0 border-t-0'
    }
    const propsSpaceFillerRight = {
        className: 'h-full grow border-black flex items-center justify-center px-3 border border-x-0 border-t-0'
    }

    const propsCreditCard = {
        className: selected === 'creditcard' ? propsSelected.className : propsUnselected.className,
        onClick: () => handleSelect('creditcard')
    }

    const propsBankAccount = {
        className: selected === 'bankaccount' ? propsSelected.className : propsUnselected.className,
        onClick: () => { handleSelect('bankaccount') }
    }

    return (
        <div className='w-full h-auto'>
            <div className='h-10 flex'>
                <div {...propsSpaceFillerLeft}>
                </div>
                <div {...propsCreditCard}>
                    <p className='cursor-pointer'> Tarjeta de crédito</p>
                </div>
                <div {...propsBankAccount}>
                    <p className='cursor-pointer'> Cuenta de banco</p>
                </div>
                <div {...propsSpaceFillerRight}>
                    <p></p>
                </div>
            </div>
            <div className='h-full w-full'>
                {children}
            </div>
        </div>
    )
}

export default PayingTabMenu