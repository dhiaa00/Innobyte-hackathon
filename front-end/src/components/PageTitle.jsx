import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <div className='relative font-bold my-4'>
            <p className='text-3xl'>
                {title}
            </p>
            <p className='absolute w-1 bg-[#608af5] h-7 -left-2  top-1/2 -translate-y-1/2'></p>
        </div>
    )
}

export default PageTitle