import { useLocation } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function NavBar() {

    const { user, setUser } = useContext(UserContext)

    const [dropped, setDropped] = useState(false)
    const location = useLocation()
    const path = location.pathname
    return (
        <div className="flex w-full justify-between px-14 py-5 items-center z-10">
            <a href="/">
                <p className="text-2xl text-[#E71D36] font-bold">EduPay</p>
            </a>
            <div className="flex text-xl items-center justify-between gap-10">
                <div className="flex items-center">
                    <p className="">Servicios</p>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/l6sefjnst09-165%3A26?alt=media&token=fb4679fa-b01f-4707-9081-3e56a9ce4f19"
                        alt="Not Found"
                        className="w-4 h-3 ml-3"
                    />
                </div>
                <p className="">Contáctanos</p>
                {
                    (JSON.stringify(user) === '{}' && path !== "/login") ? (
                        <a className="bg-[#470FF4] py-3 px-7" href="/login">
                            <p className="text-[#fff] font-thin">INICIAR SESIÓN</p>
                        </a>) : (
                        (JSON.stringify(user) !== '{}') ? (
                            <div>
                                <img onClick={() => (dropped ? setDropped(false) : setDropped(true))} className='h-10 aspect-square' src="/user.png" alt="" />
                                <div className='absolute top-16 right-14'>
                                    <div className='relative h-5 w-5 border border-black border-l-0 border-b-0 bg-white z-10 -rotate-45 -bottom-[9.5px] -right-44'></div>
                                    <div className={dropped ? ' bg-white w-52 h-36  shadow-2xl flex flex-col justify-evenly px-3 text-left border border-black' : 'hidden'}>
                                        <a href='/personalsettings' className='text-lg font-light'>Datos personales</a>
                                        <a href='/securitysettings' className='text-lg font-light'>Seguridad</a>
                                        <a href='/logout' className='text-lg font-light text-red-500'>Cerrar sesión</a>
                                    </div>
                                </div>
                            </div>) : (null)
                    )
                }
            </div>
        </div>
    )
}

export default NavBar