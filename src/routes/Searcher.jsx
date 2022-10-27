import SearcherHeader from "../components/SearcherHeader"
import SearcherFilter from "../components/SearcherFilter"
import SearcherSearchBar from "../components/SearcherSearchBar"
import SearcherCard from "../components/SearcherCard"

function Searcher() {
    return (
        <>
            <SearcherHeader />
            <div className=" w-full h-full mt-[340px] flex items-start justify-center gap-5 mb-10 px-6">
                <SearcherFilter />
                <div className="flex flex-col gap-5 w-[1000px]">
                    <SearcherSearchBar />
                    <div className="flex flex-col gap-4">
                        <SearcherCard
                            title={'Certificado de estudio'}
                            description={'Expedido por la oficina de registro'}
                            price={'$28.000'}
                            link={''} />
                        <SearcherCard
                            title={'Certificado de estudio'}
                            description={'Expedido por la oficina de registrro'}
                            price={'$28.000'}
                            link={''} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searcher