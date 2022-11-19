import { UserContext } from '../contexts/UserContext'
import { useContext, useState } from 'react'
import axios from 'axios'

function SecurityForm() {

    const { user, setUser, token } = useContext(UserContext)

    const [actualPassword, setActualPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('')

    const [error, setError] = useState('')
    // recordar actualizar el user solo despues que el servidor confirmó que se actualizó

    const validatePassword = () => {
        if (newPassword === '') {
            setError('Debe ingresar una contraseña nueva')
            return false
        }
        if (actualPassword === '') {
            setError('Debe ingresar su contraseña actual')
            return false
        }
        if (newPassword !== newPassword2) {
            setError('Las contraseñas no coinciden')
            return false
        }
        if (newPassword.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres')
            return false
        }
        if (actualPassword === newPassword) {
            setError('La contraseña nueva debe ser diferente a la actual')
            return false
        }
        if (actualPassword != user.contraseña) {
            setError('La contraseña actual es incorrecta')
            console.log(actualPassword)
            console.log(user.contraseña)
            return false
        }
        return true
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        if (validatePassword()) {
            setError('')
            axios.post('http://localhost:3000/account/updatepassword', {
                id: user.id,
                contraseña: newPassword
            }, {
                headers: {
                    'Authorization': `${token}`
                }
            }).then(res => {
                alert('Contraseña actualizada')
                setUser({
                    ...user,
                    contraseña: newPassword
                })
            }).catch(err => {
                if (err.response.status === 503) {
                    alert(`Servicio de ${err.response.data.service} no disponible, ${err.response.data.message}. Por favor inténtelo más tarde.`)
                } else {
                    alert('Error al actualizar contraseña')
                }
            })
            setActualPassword('')
            setNewPassword('')
            setNewPassword2('')
        }
    }

    return (
        <form className="flex flex-col gap-3 w-[380px]" onSubmit={handlePasswordChange}>
            <div>
                <label className="block" htmlFor="actualpass">Contraseña actual</label>
                <input className="input-box" type="password" name="actualpass" id="actualpass" value={actualPassword} onChange={
                    (e) => {
                        setActualPassword(e.target.value)
                    }
                } />
            </div>
            <div>
                <label className="block" htmlFor="newpass">Nueva contraseña</label>
                <input className="input-box" type="password" name="newpass" id="newpass" value={newPassword} onChange={
                    (e) => {
                        setNewPassword(e.target.value)
                    }
                } />
            </div>
            <div>
                <label className="block" htmlFor="confirmpass">Confirmar contraseña</label>
                <input className="input-box" type="password" name="confirmpass" id="confirmpass" value={newPassword2} onChange={
                    (e) => {
                        setNewPassword2(e.target.value)
                    }
                } />
            </div>
            {
                (error !== '') ? (
                    <p className='text-red-500 text-base'>{error}</p>
                ) : (null)
            }
            <div className="flex justify-end">
                <button className="primary-button" type="submit">
                    Guardar
                </button>
            </div>
        </form>
    )
}

export default SecurityForm