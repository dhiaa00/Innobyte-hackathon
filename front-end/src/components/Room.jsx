import React from 'react'

const Room = ({ id }) => {
    return (
        <div className="relative bg-[#F0F3F8] py-2 flex justify-evenly text-center space-x-3">
            <input type="checkbox" className='absolute top-1/2 -translate-y-1/2 left-4' />
            <p className="w-[100px]">{id}</p>
            <p className="w-[100px]">Double</p>
            <p className="w-[100px]">Sea</p>
            <p className="w-[100px]">Yes</p>
            <p className="w-[100px]">Yes</p>
            <p className="w-[100px]">N/A</p>
            <p className="w-[100px]">07/12/2023</p>
        </div>
    )
}

export default Room