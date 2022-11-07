import SearcherHeader from "../components/SearcherHeader"
import SearcherFilter from "../components/SearcherFilter"
import SearcherSearchBar from "../components/SearcherSearchBar"
import SearcherCard from "../components/SearcherCard"
import { useContext, useState } from "react"
import { SearchContext } from "../contexts/SearchContext"
import axios from 'axios'
import { useEffect } from "react"

function Searcher() {

    const { search, setSearch, office, setOffice, officeList, sede, setSede, sedeList, setSedeList } = useContext(SearchContext)

    const [services, setServices] = useState([])
    const [filteredServices, setFilteredServices] = useState([])

    useEffect(() => {
        if (office !== "") {
            axios.get(`http://localhost:3000/query/services-${sede}-${office}`)
                .then(res => {
                    setServices(res.data)
                    setFilteredServices(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            axios.get(`http://localhost:3000/query/servicios-${sede}`)
                .then(res => {
                    setServices(res.data)
                    setFilteredServices(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [office])

    useEffect(() => {
        if (office == "") {
            axios.get(`http://localhost:3000/query/servicios-${sede}`)
                .then(res => {
                    setServices(res.data)
                    setFilteredServices(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [sede])

    useEffect(() => {
        const filteredServices = services.filter(service => (service.nombre.toLowerCase().includes(search.toLowerCase()) || service.descripcion.toLowerCase().includes(search.toLowerCase())))
        setFilteredServices(filteredServices)
    }, [search, sede, office])

    return (
        <>
            <SearcherHeader />
            <div className=" w-full h-full mt-[340px] flex items-start justify-center gap-5 mb-10 px-6">
                <SearcherFilter />
                <div className="flex flex-col gap-5 w-[1000px]">
                    <SearcherSearchBar />
                    <div className="flex flex-col gap-4">
                        {
                            (services.length > 0) ? (
                                (filteredServices.length > 0) ?
                                    (filteredServices.map((service, index) => {
                                        return <SearcherCard
                                            key={index}
                                            title={service.nombre}
                                            description={service.descripcion}
                                            price={service.valor}
                                            link={''} />
                                    })
                                    ) : (
                                        <>
                                            <img src="magnifier.png" alt="" className="w-20 h-20 opacity-50 mx-auto mt-5" />
                                            <p className="text-3xl mx-auto opacity-50">
                                                No se encontraron servicios
                                            </p>
                                        </>
                                    )) : (
                                <p className="text-3xl mx-auto text-red-400">
                                    Ah ocurrido un error, por favor intente nuevamente más tarde
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searcher