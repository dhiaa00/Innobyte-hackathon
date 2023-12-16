import React from 'react'

const Room = ({ id }) => {
    return (
        <div className="relative  py-2 flex justify-evenly text-center space-x-3">
            <input type="checkbox" className='absolute top-1/2 -translate-y-1/2 left-6 bg-[]' />
            <p className="w-[100px]">{id}</p>
            <p className="w-[100px]">Double</p>
            <p className="w-[100px]">Sea</p>
            <p className="w-[100px]">Yes</p>
            <p className="w-[100px]">Yes</p>
            <p className="w-[100px]">N/A</p>
            <p className="w-[100px]">07/12/2023</p>
            <p className='absolute h-full w-1 bg-[#6B94FB] left-[1px] top-0'></p>
        </div>
    )
}

export default Room