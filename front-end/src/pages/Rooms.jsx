import PageTitle from "../components/PageTitle"
import searchIcon from '../assets/images/Vector.svg'
import Room from "../components/Room"
import UniqueRoom from "../components/UniqueRoom"


const Rooms = () => {
    return (

        <>
            <div className="px-6">
                <div className="flex justify-between">
                    <PageTitle title="Rooms" />
                    <div className='flex my-2 items-center pl-2 rounded-md bg-white'>
                        <img src={searchIcon} alt="search-icon" className='w-5' />
                        <input type="text" className=' search py-2 pl-3 focus:outline-none' placeholder='Type To Search' />
                    </div>
                </div>
                <div className="my-5 flex flex-col gap-5">
                    <div className="bg-[#F0F3F8] py-2  filter   flex justify-evenly text-center space-x-3">
                        <p className="w-[100px]">N°</p>
                        <p className="w-[100px]">type</p>
                        <p className="w-[100px]">view</p>
                        <p className="w-[100px]">in service</p>
                        <p className="w-[100px]">occupied</p>
                        <p className="w-[100px]">Cleaned</p>
                        <p className="w-[100px]">available on</p>
                    </div>
                    <Room id="101" />
                    <Room id="102" />
                    <Room id="103" />
                    {/* <UniqueRoom id="104" /> */}
                    <Room id="104" />
                    <Room id="105" />
                    <Room id="106" />
                    <Room id="106" />
                </div>
            </div>
        </>
    )
}

export default Rooms