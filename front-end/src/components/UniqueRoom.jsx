import React from 'react'

const UniqueRoom = ({ id }) => {
    return (
        <div>

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
            <div className='flex'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <div className="flex">
                            <div className="flex flex-col">
                                <p>Tue</p>
                                <p>19</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Wed</p>
                                <p>19</p>
                            </div>
                        </div>
                        <p className='w-full px-4 text-white'>Cleaning</p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default UniqueRoom