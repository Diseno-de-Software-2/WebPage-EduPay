import React from 'react'

function SecurityForm() {
    return (
        <form action="" className="flex flex-col gap-3 w-[380px]">
            <div>
                <label className="block" htmlFor="actualpass">Contraseña actual</label>
                <input className="input-box" type="password" name="actualpass" id="actualpass" />
            </div>
            <div>
                <label className="block" htmlFor="newpass">Nueva contraseña</label>
                <input className="input-box" type="password" name="newpass" id="newpass" />
            </div>
            <div>
                <label className="block" htmlFor="confirmpass">Confirmar contraseña</label>
                <input className="input-box" type="password" name="confirmpass" id="confirmpass" />
            </div>
            <div className="flex justify-end">
                <button className="primary-button" type="submit">
                    Guardar
                </button>
            </div>
        </form>
    )
}

export default SecurityForm