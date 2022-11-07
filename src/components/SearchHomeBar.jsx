import { useContext } from "react"
import { Link } from "react-router-dom"
import { SearchContext } from "../contexts/SearchContext"

function SearchHomeBar() {

    const { search, setSearch, office, setOffice, officeList, sede, setSede, sedeList } = useContext(SearchContext)

    if (officeList.length === 0 || sedeList.length === 0) {
        return (
            <div className="my-10 text-center max-w-[1150px] mx-auto">
                <h2 className="text-2xl font-thin mb-3">Busca aquí lo qué desees pagar</h2>
                <div className="flex flex-row items-center justify-center shadow-2xl py-5 px-10 gap-3 ">
                    <p className="text-xl opacity-70 mr-6 text-red-600">
                        Ah ocurrido un error al cargar la información, por favor recarga la página
                    </p>
                </div>
            </div>
        )

    }

    return (
        <div className="my-10 text-center max-w-[1150px] mx-auto">
            <h2 className="text-2xl font-thin mb-3">Busca aquí lo qué desees pagar</h2>
            <div className="flex flex-row items-center justify-between shadow-2xl py-5 px-10 gap-3">
                <input type="text" placeholder="Buscar" className="w-96 h-12 border-2 border-black grow pl-3" onChange={
                    (e) => {
                        setSearch(e.target.value)
                    }
                } value={search} />
                <select className="h-12 border-2 border-black px-3" name="sede" id="sede" onChange={
                    (e) => {
                        setSede(e.target.value)
                    }
                }>
                    {
                        sedeList.map((sede, i) => {
                            return (
                                <option key={i} value={sede.id}>{sede.ciudad}</option>
                            )
                        })
                    }
                </select>
                <Link to="/searcher" className="bg-[#4056F4] text-white w-24 h-12 flex justify-center items-center">Buscar</Link>
            </div>
        </div>
    )
}

export default SearchHomeBar