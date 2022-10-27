function SearchHomeBar() {
    return (
        <div className="my-10 text-center max-w-[1150px] mx-auto">
            <h2 className="text-2xl font-thin mb-3">Busca aquí lo qué desees pagar</h2>
            <div className="flex flex-row items-center justify-between shadow-2xl py-5 px-10 gap-3">
                <input type="text" placeholder="Buscar" className="w-96 h-12 border-2 border-black grow pl-3" />
                <select className="h-12 border-2 border-black pl-3" name="departamento" id="departamento">
                    <option value="0">Registro</option>
                    <option value="1">Financiamiento</option>
                    <option value="2">Biblioteca</option>
                    <option value="3">Store</option>
                    <option value="4">Centro médico</option>
                </select>
                <a href="/searcher" className="bg-[#4056F4] text-white w-24 h-12 flex justify-center items-center">Buscar</a>
            </div>
        </div>
    )
}

export default SearchHomeBar