function Footer() {
    return (
        <div className="flex bg-[#000] w-full h-auto">
            <div>
                <img src="/logoUniversidad.png" alt="" />
            </div>
            <div className="flex items-center justify-between w-full px-10">
                <div className="px-10">
                    <h2 className="text-4xl font-bold text-[#fff] w-52 text-center">
                        Universidad Generica
                    </h2>
                </div>
                <div className="text-center mx-auto">
                    <p className="text-[#fff] text-2xl font-thin">
                        Redes sociales
                    </p>
                    <div className="flex gap-5 mt-2 mb-5">
                        <a href=""><img className="w-12" src="/redes sociales/Twitter.png" alt="" /></a><a href=""><img className="w-12" src="/redes sociales/YouTube.png" alt="" /></a><a href=""><img className="w-12" src="/redes sociales/Facebook.png" alt="" /></a><a href=""><img className="w-12" src="/redes sociales/Instagram.png" alt="" /></a><a href=""><img className="w-12" src="/redes sociales/LinkedIn.png" alt="" /></a><a href=""><img className="w-12" src="/redes sociales/WhatsApp.png" alt="" /></a>
                    </div>
                    <p className="text-[#fff] opacity-50">© Copyright 2022 EduPay. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer