import React from 'react'

function LoginForm() {
    return (
        <div className='w-[550px] aspect-square shadow-2xl flex flex-col items-center p-10 mx-auto'>
            <h2 className='text-4xl font-bold mb-8'>
                Iniciar Sesión
            </h2>
            <form className='w-full flex flex-col' action='/home'>
                <label className='text-2xl' htmlFor="Usuraio">Usuario</label>
                <input className='my-5 border-2 h-14 border-black px-5 text-xl' type="text" id='Usuario' />
                <label className='text-2xl' htmlFor="Usuraio">Contraseña</label>
                <input className=' my-5 border-2 h-14 border-black px-5 text-xl' type="password" id='Contraseña' />
                <button className='h-14 my-5 bg-[#470FF4] text-white rounded-md text-2xl' type='submit'>
                    Ingresar
                </button>
            </form>
            <p>
                ¿No tienes una cuenta? <a href='/searcher'>Seguir como invitado</a>
            </p>
        </div>
    )
}

export default LoginForm