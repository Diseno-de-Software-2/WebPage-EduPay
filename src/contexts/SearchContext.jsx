import { createContext, useState, useEffect, useContext } from "react"
import { UserContext } from "./UserContext"
import axios from 'axios'

const SearchContext = createContext()

function SearchProvider({ children }) {

    const { user, setUser, token, setToken } = useContext(UserContext)

    const [search, setSearch] = useState("")
    const [office, setOffice] = useState("")
    const [officeList, setOfficeList] = useState([])
    const [sede, setSede] = useState("")
    const [sedeList, setSedeList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/query/oficinas', {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then(res => {
                setOfficeList(res.data)
            })
            .catch(err => {
                if (err) {
                    if (err.response.status == 403) {
                        if (token != "") {
                            setUser({})
                            setToken("")
                            window.location.href = '/login'
                        }
                    } else {
                        console.log(err)
                    }
                }
            })

        axios.get('http://localhost:3000/query/sedes', {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then(res => {
                setSedeList(res.data.sort((a, b) => a.id - b.id))
            })
            .catch(err => {
                if (err.status == 403) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    window.location.href = '/login'
                } else {
                    console.log(err)
                }
            })
    }, [])

    useEffect(() => {
        if (sedeList.length > 0) {
            setSede(sedeList[0].id)
        }
    }, [sedeList])

    return (
        <SearchContext.Provider value={{ office, setOffice, search, setSearch, officeList, setOfficeList, sede, setSede, sedeList, setSedeList }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }