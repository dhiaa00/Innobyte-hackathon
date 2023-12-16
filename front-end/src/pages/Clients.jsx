import React from 'react'
import PageTitle from '../components/PageTitle'
import Room from '../components/Room'
import searchIcon from '../assets/images/Vector.svg'
import Client from '../components/Client'



const Clients = () => {
    return (
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
                    <p className="w-[100px]">Name</p>
                    <p className="w-[100px]">Surname</p>
                    <p className="w-[100px]">Phone Number</p>
                </div>
                <Client id="101" />
                <Client id="102" />
                <Client id="103" />
                <Client id="104" />
                <Client id="105" />
                <Client id="106" />
                <Client id="106" />
            </div>
        </div>
    )
}

export default Clients