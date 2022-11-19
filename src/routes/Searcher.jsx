import SearcherHeader from "../components/SearcherHeader"
import SearcherFilter from "../components/SearcherFilter"
import SearcherSearchBar from "../components/SearcherSearchBar"
import SearcherCard from "../components/SearcherCard"
import { useContext, useState, useEffect } from "react"
import { SearchContext } from "../contexts/SearchContext"
import axios from 'axios'
import { UserContext } from "../contexts/UserContext"

function Searcher() {

    const { token } = useContext(UserContext)

    const { search, setSearch, office, setOffice, officeList, sede, setSede, sedeList, setSedeList } = useContext(SearchContext)

    const [services, setServices] = useState([])
    const [filteredServices, setFilteredServices] = useState([])

    var no_queries = false

    useEffect(() => {
        if (office !== "") {
            axios.get(`http://localhost:3000/query/services-${sede}-${office}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    setServices(res.data)
                    setFilteredServices(res.data)
                })
                .catch(err => {
                    if (no_queries === false) {
                        no_queries = true
                        if (err.response.status === 503) {
                            alert(`Servicio de ${err.response.data.service} no disponible, ${err.response.data.message}. Por favor inténtelo más tarde.`)
                        }
                    }
                })
        } else {
            axios.get(`http://localhost:3000/query/servicios-${sede}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    setServices(res.data)
                    setFilteredServices(res.data)
                })
                .catch(err => {
                    if (no_queries === false) {
                        no_queries = true
                        if (err.response.status === 503) {
                            alert(`Servicio de ${err.response.data.service} no disponible, ${err.response.data.message}. Por favor inténtelo más tarde.`)
                        }
                    }
                })
        }
    }, [office])

    useEffect(() => {
        if (office == "") {
            axios.get(`http://localhost:3000/query/servicios-${sede}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    setServices(res.data)
                    setFilteredServices(res.data)
                })
                .catch(err => {
                    if (no_queries === false) {
                        no_queries = true
                        if (err.response.status === 503) {
                            alert(`Servicio de ${err.response.data.service} no disponible, ${err.response.data.message}. Por favor inténtelo más tarde.`)
                        }
                    }
                })
        }
    }, [sede])

    useEffect(() => {
        const filteredServices = services.filter(service => (service.nombre.toLowerCase().includes(search.toLowerCase()) || service.descripcion.toLowerCase().includes(search.toLowerCase())))
        setFilteredServices(filteredServices)
    }, [search, sede, office, services])


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
                                    (
                                        filteredServices.map((service, index) => {
                                            return <SearcherCard
                                                key={index}
                                                title={service.nombre}
                                                description={service.descripcion}
                                                price={service.valor}
                                                link={''}
                                                oficina={service.nombre}
                                                sede={service.id_sede} />
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
                                    Ha ocurrido un error, por favor intente nuevamente más tarde
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