import { createContext, useState, useEffect } from "react"
import axios from 'axios'

const SearchContext = createContext()

function SearchProvider({ children }) {

    const [search, setSearch] = useState("")
    const [office, setOffice] = useState("")
    const [officeList, setOfficeList] = useState([])
    const [sede, setSede] = useState("")
    const [sedeList, setSedeList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/query/oficinas')
            .then(res => {
                setOfficeList(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('http://localhost:3000/query/sedes')
            .then(res => {
                setSedeList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if (sedeList.length > 0) {
            setSede(sedeList[0].id)
        }
    }, [sedeList])

    useEffect(() => {
        // if (sedeList.length > 0 && officeList.length > 0) {
        //     const offices = officeList.filter(office => office.id_sede === sede)
        //     setOffice(offices[0].nombre)
        // }
    }, [sede])

    return (
        <SearchContext.Provider value={{ office, setOffice, search, setSearch, officeList, setOfficeList, sede, setSede, sedeList, setSedeList }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }