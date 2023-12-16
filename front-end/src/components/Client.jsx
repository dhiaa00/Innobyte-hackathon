import React from 'react'

const Client = ({id}) => {
  return (
    <div className="relative  py-2 flex justify-evenly text-center space-x-3">
    <input type="checkbox" className='absolute top-1/2 -translate-y-1/2 left-6 bg-[]' />
    <p className="w-[100px]">{id}</p>
    <p className="w-[100px]">Youcef</p>
    <p className="w-[100px]">Youcef ZeD</p>
    <p className="w-[100px]">+1 123123</p>
    <p className='absolute h-full w-1 bg-[#6B94FB] left-[1px] top-0'></p>
</div>
  )
}

export default Client