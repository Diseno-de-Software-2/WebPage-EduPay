import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'


function LoginForm() {

    const { setToken, setUser } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        const data = {
            email,
            password
        }

        axios.post('http://localhost:3000/auth/login', data)
            .then(res => {
                if (res.status === 200) {
                    setError('')
                    setUser(res.data.user)
                    setToken(res.data.token)
                } else if (res.status === 400) {
                    setError(res.message)
                }
                else {
                    setError(res.message)
                }
            })
            .catch(({ response }) => {
                if (response) {
                    switch (response.status) {
                        case 400:
                            setError(response.data)
                            break;

                        default:
                            setError('Ocurrió un error inesperado, por favor intente más tarde')
                            break;
                    }
                } else {
                    setError('Ocurrió un error inesperado, por favor intente más tarde')
                }
            });
    }

    return (
        <div className='w-[550px] aspect-square shadow-2xl flex flex-col items-center p-10 mx-auto'>
            <h2 className='text-4xl font-bold mb-8'>
                Iniciar Sesión
            </h2>
            <form className='w-full flex flex-col' onSubmit={handleLogin}>
                <label className='text-2xl' htmlFor="Email">Correo electronico</label>
                <input className='my-5 border-2 h-14 border-black px-5 text-xl' type="text" id='Email' onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }
                } required />
                <label className='text-2xl' htmlFor="Contraseña">Contraseña</label>
                <input className=' my-5 border-2 h-14 border-black px-5 text-xl' type="password" id='Contraseña' onChange={
                    (e) => {
                        setPassword(e.target.value)
                    }
                } required />
                {
                    (error !== '') ? (
                        <p className='text-red-500 text-base'>{error}</p>
                    ) : (null)
                }
                <button className='h-14 my-5 bg-[#470FF4] text-white text-2xl' type='submit'>
                    Ingresar
                </button>
            </form>
            <p>
                ¿No tienes una cuenta? <a href='/searcher' className='text-blue-500 underline'>Seguir como invitado</a>
            </p>
        </div>
    )
}

export default LoginForm