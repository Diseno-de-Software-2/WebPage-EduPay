import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import axios from 'axios'

function PersonalInfoForm() {

    const { user, setUser, token } = useContext(UserContext)

    const [name, setName] = useState(user.nombre)
    const [lastName, setLastName] = useState(user.apellidos)
    const [email, setEmail] = useState(user.email)
    const [id, setId] = useState(user.id)
    const [birth_date, setBirthDate] = useState(user.fecha_nacimiento.toString().split('T')[0])

    const handleUpdateUser = (e) => {
        e.preventDefault()
        // enviar a la api de cuentas que no está hecha
        if (validateForm()) {
            axios.post('http://localhost:3000/account/updateinfo', {
                nombre: name,
                apellidos: lastName,
                email: email,
                id: id,
                fecha_nacimiento: birth_date
            }, {
                headers: {
                    'Authorization': `${token}`
                }
            }).then((response) => {
                alert('Información actualizada')
                setUser({
                    nombre: name,
                    apellidos: lastName,
                    email: email,
                    id: id,
                    fecha_nacimiento: birth_date
                })
            }).catch((error) => {
                if (error.response.status === 503) {
                    alert(`Servicio de ${error.response.data.service} no disponible, ${error.response.data.message}. Por favor inténtelo más tarde.`)
                } else {
                    alert(`Un error inesperado ha ocurrido, por favor intente de nuevo.`)
                }
            })
        } else {
            alert('Hay campos vacíos o con formato incorrecto')
        }
    }

    const validateForm = () => {
        // validar que los campos no estén vacíos
        if (name === '' || lastName === '' || email === '' || id === '' || birth_date === '') {
            return false
        }
        // validar que el email sea válido
        if (!email.includes('@') || !email.includes('.')) {
            return false
        }
        // validar que la fecha de nacimiento sea válida
        if (birth_date.split('-').length !== 3) {
            return false
        }
        // validar que la fecha de nacimiento sea menor a la actual
        const today = new Date()
        const birthDate = new Date(birth_date)
        if (birthDate > today) {
            return false
        }
        // validar que el nombre y apellido no tengan números
        if (name.match(/\d/) || lastName.match(/\d/)) {
            return false
        }
        // validar que el id no esté vacío y que sea un número
        if (id === '' || isNaN(id)) {
            return false
        }
        return true
    }

    return (
        <form action="" className="flex flex-col gap-3 w-[380px]" onSubmit={handleUpdateUser}>
            <div className="flex gap-3">
                <div>
                    <label className="block" htmlFor="nombre">Nombre</label>
                    <input className="input-box" type="text" name="nombre" id="nombre" value={name} onChange={
                        (e) => {
                            setName(e.target.value)
                        }
                    } />
                </div>
                <div>
                    <label className="block" htmlFor="apellido">Apellido</label>
                    <input className="input-box" type="text" name="apellido" id="apellido" value={lastName} onChange={
                        (e) => {
                            setLastName(e.target.value)
                        }
                    } />
                </div>
            </div>
            <div>
                <label className="block" htmlFor="email">Correo electrónico</label>
                <input className="input-box" type="email" name="email" id="email" value={email} onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }
                } />
            </div>
            <div>
                <label className="block" htmlFor="numero">Número de identificación</label>
                <input className="input-box grow" type="text" name="numero" id="numero" value={id} onChange={
                    (e) => {
                        setId(e.target.value)
                    }
                } />
            </div>
            <div>
                <label htmlFor="birth_date">
                    Fecha de nacimiento
                </label>
                <input className="input-box" type="date" name="birth_date" id="birth_date" value={birth_date} onChange={
                    (e) => {
                        setBirthDate(e.target.value)
                    }
                } />
            </div>
            {/* <div>
                <label htmlFor="sede">Sede</label>
                <select className="input-box w-auto" name="sede" id="sede">
                    <option value="1">Barranquilla</option>
                    <option value="2">Santa Marta</option>
                    <option value="3">Montería</option>
                    <option value="4">Sincelejo</option>
                    <option value="4">Cartagena</option>
                </select>
            </div> */}
            <div className="flex justify-end">
                <button className="primary-button" type="submit">
                    Guardar
                </button>
            </div>
        </form>
    )
}

export default PersonalInfoForm