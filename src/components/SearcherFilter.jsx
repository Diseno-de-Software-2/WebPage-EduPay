import SearcherFilterItem from "./SearcherFilterItem"
import { useState } from "react"

function SearcherFilter() {

    const [selected, setSelected] = useState(0)

    const handleSelect = (index) => {
        setSelected(index)
    }

    return (
        <div className='flex flex-col items-center justify-center shadow-2xl w-[300px] py-5'>
            <h2 className='opacity-50 text-lg'>
                Oficina
            </h2>
            <hr className=' bg-[#000] h-[1px] border border-none w-[250px] opacity-50' />
            <ul className='flex flex-col gap-7 mt-5 text-center w-full px-6'>
                {
                    ['Financiamiento', 'Registro', 'Store', 'Centro médico'].map((item, index) => {
                        return (
                            <SearcherFilterItem
                                title={item}
                                selected={selected === index}
                                handleSelect={handleSelect}
                                index={index}
                            />
                        )
                    })

                }

            </ul>
        </div>
    )
}

export default SearcherFilter