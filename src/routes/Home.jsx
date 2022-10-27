import SearchHomeBar from "../components/SearchHomeBar"
import PersonalInformation from "../components/PersonalInformation"

function Home() {
    return (
        <div className="mx-14 my-10">
            <h1 className="text-start text-5xl font-bold mr-10 leading-normal w-[600px] ">
                Bienvenido, José
            </h1>
            <div>
                <div>
                    <SearchHomeBar />
                </div>
                <div>
                    <PersonalInformation />
                </div>
            </div>
        </div>
    )
}

export default Home