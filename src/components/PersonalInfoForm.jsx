function PersonalInfoForm() {
    return (
        <form action="" className="flex flex-col gap-3 w-[380px]">
            <div className="flex gap-3">
                <div>
                    <label className="block" htmlFor="nombre">Nombre</label>
                    <input className="input-box" type="text" name="nombre" id="nombre" />
                </div>
                <div>
                    <label className="block" htmlFor="apellido">Apellido</label>
                    <input className="input-box" type="text" name="apellido" id="apellido" />
                </div>
            </div>
            <div>
                <label className="block" htmlFor="email">Correo electrónico</label>
                <input className="input-box" type="email" name="email" id="email" />
            </div>
            <div className="flex gap-3 grow">
                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <select className="input-box w-auto" name="tipo" id="tipo">
                        <option value="1">C.C.</option>
                        <option value="2">T.I.</option>
                        <option value="3">Pasaporte</option>
                    </select>
                </div>
                <div>
                    <label className="block" htmlFor="numero">Número de identificación</label>
                    <input className="input-box grow" type="text" name="numero" id="numero" />
                </div>
            </div>
            <div>
                <label htmlFor="username">
                    Nombre de usuario
                </label>
                <input className="input-box" type="text" name="username" id="username" />
            </div>
            <div>
                <label htmlFor="sede">Sede</label>
                <select className="input-box w-auto" name="sede" id="sede">
                    <option value="1">Barranquilla</option>
                    <option value="2">Santa Marta</option>
                    <option value="3">Montería</option>
                    <option value="4">Sincelejo</option>
                    <option value="4">Cartagena</option>
                </select>
            </div>
            <div className="flex justify-end">
                <button className="primary-button" type="submit">
                    Guardar
                </button>
            </div>
        </form>
    )
}

export default PersonalInfoForm