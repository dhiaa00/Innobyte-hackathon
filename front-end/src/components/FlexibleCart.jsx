import React from 'react'
import arrowBottom from '../assets/images/angle-small-down 1.svg'
import { useState } from 'react'

const FlexibleCart = ({bgColor, img, title, type, desc, info }) => {



    return (
        <div className="md:w-64 p-6 rounded-lg" style={{background : `linear-gradient(109deg, #608AF5 0.01%, #1E5EFF 99.98%)`}}>
            <div className={`flex gap-2 ${bgColor} mb-5`} >
                <div className="img">
                    <img src={img} alt="img" />
                </div>
                <p className='flex-1'>{title}</p>
                {type == "dynamic" ?
                    <div className="img">
                        <img src={arrowBottom} alt="arrow-bottom" />
                    </div> :
                    <>
                    </>
                }
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p>{info.number}</p>
                    <p>of {info.total} total</p>
                </div>
                {
                    info.percentage ? 
                    <div className={`w-14 h-14 flex justify-center items-center`}>
                        <p>{info.percentage} %</p>
                    </div>:
                    <p>Safe</p>
                }
            </div>

        </div>
    )
}

export default FlexibleCart