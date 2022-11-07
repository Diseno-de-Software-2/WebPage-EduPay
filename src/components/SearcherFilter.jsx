import SearcherFilterItem from "./SearcherFilterItem"
import { useState, useContext, useEffect } from "react"
import { SearchContext } from "../contexts/SearchContext"

function SearcherFilter() {

    const { sede, setSede, office, setOffice, officeList, sedeList } = useContext(SearchContext)

    const [selectedOffice, setSelectedOffice] = useState(-1)
    const [selectedSede, setSelectedSede] = useState(0)


    const handleSelectOffice = (index) => {
        if (selectedOffice == index) {
            setSelectedOffice(-1)
            setOffice("")
        } else {
            setSelectedOffice(index)
            setOffice(officeList[index].nombre)
        }
    }

    const handleSelectSede = (index) => {
        setSelectedSede(index)
        setSede(index + 1)
        setOffice("")
        setSelectedOffice(-1)
    }

    return (
        <div className='flex flex-col items-center justify-center shadow-2xl w-[300px] py-5'>
            <h2 className='opacity-50 text-lg'>
                Oficina
            </h2>
            <hr className=' bg-[#000] h-[1px] border border-none w-[250px] opacity-50' />
            <ul className='flex flex-col gap-7 mt-5 text-center w-full px-6'>
                {
                    (officeList.length > 0) ? (
                        officeList.map((item, index) => {
                            if (item.id_sede == sede) {
                                return (
                                    <SearcherFilterItem
                                        key={index}
                                        title={item.nombre}
                                        selected={selectedOffice === index}
                                        handleSelect={handleSelectOffice}
                                        index={index}
                                    />
                                )
                            }
                        })
                    ) : (
                        <img src="charging.png" alt="" className="animate-spin w-20 h-20 mt-5 mx-auto opacity-70" />
                    )

                }

            </ul>
            <h2 className='opacity-50 text-lg mt-16'>
                Sede
            </h2>
            <hr className=' bg-[#000] h-[1px] border border-none w-[250px] opacity-50' />
            <ul className='flex flex-col gap-7 mt-5 text-center w-full px-6'>
                {
                    (sedeList.length > 0) ? (
                        sedeList.map((item, index) => {
                            return (
                                <SearcherFilterItem
                                    key={index}
                                    title={item.ciudad}
                                    selected={selectedSede === index}
                                    handleSelect={handleSelectSede}
                                    index={index}
                                />
                            )
                        })
                    ) : (
                        <img src="charging.png" alt="" className="animate-spin w-20 h-20 mt-5 mx-auto opacity-70 mb-5" />
                    )

                }

            </ul>
        </div>
    )
}

export default SearcherFilter