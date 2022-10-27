import React from 'react'

function PayingProgressBar({ step }) {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <div className={step >= 1 ? "flex justify-center items-center w-8 h-8 rounded-full bg-[#470FF4]" : "flex justify-center items-center w-8 h-8 rounded-full bg-[#d9d9d9]"}>
                <p className={step >= 1 ? "text-white font-bold" : "text-black font-bold"}>1</p>
            </div>
            <div className={step > 1 ? 'w-2 grow bg-[#470FF4]' : 'w-2 grow bg-[#d9d9d9]'}>
            </div>
            <div className={step >= 2 ? "flex justify-center items-center w-8 h-8 rounded-full bg-[#470FF4]" : "flex justify-center items-center w-8 h-8 rounded-full bg-[#d9d9d9]"}>
                <p className={step >= 2 ? "text-white font-bold" : "text-black font-bold"}>2</p>
            </div>
            <div className={step > 2 ? 'w-2 grow bg-[#470FF4]' : 'w-2 grow bg-[#d9d9d9]'}>
            </div>
            <div className={step >= 3 ? "flex justify-center items-center w-8 h-8 rounded-full bg-[#470FF4]" : "flex justify-center items-center w-8 h-8 rounded-full bg-[#d9d9d9]"}>
                <p className={step >= 3 ? "text-white font-bold" : "text-black font-bold"}>3</p>
            </div>
        </div>
    )
}

export default PayingProgressBar