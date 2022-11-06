import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

function PersonalInfoForm() {

    const { user, setUser } = useContext(UserContext)

    const [name, setName] = useState(user.nombre)
    const [lastName, setLastName] = useState(user.apellidos)
    const [email, setEmail] = useState(user.email)
    const [id, setId] = useState(user.id)
    const [birth_date, setBirthDate] = useState(user.fecha_nacimiento.toString().split('T')[0])

    const handleGuardar = () => {
        // enviar a la api de cuentas que no está hecha
    }

    return (
        <form action="" className="flex flex-col gap-3 w-[380px]">
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