import React from 'react'
import side from "../assets/images/site-alt 1.svg"
import elipse from "../assets/images/Ellipse 104.svg"
import circle from "../assets/images/daeira.png"

const Statistique = () => {
    return (
        <div className="text-black w-[47%] bg-white px-6" style={{ background: "linear-gradient(295deg, #E9F6FF 1.46%, rgba(208, 235, 255, 0.00) 100%)", borderRadius: "10px", boxShadow: "0px 5px 27px -9px rgba(0, 0, 0, 0.50)" }}>
            <div className='text-black  mb-8 px-6 flex items-center'>
                <img src={side} alt="" />
                <p className='pl-4 border-l-black my-3 font-bold text-2xle'>Online Bookings’ stats</p>
            </div>
            <div className='flex  gap-5'>
                <div className="flex flex-col gap-4 left w-[47%] my-14">
                    <div className='flex flex-col gap-1 '>
                        <p className='font-bold text-xl'>238 Application</p>
                        <p>in a month</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-xl'>23 Refused</p>
                        <p>by the automated system</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-xl'>1 Mistake</p>
                        <p>found when reachecking manually </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 right w-[47%]">
                    <div className='relative text-center'>
                        <img src={circle} alt="elipse" />
                        <div className='absolute font-bold text-xl top-28 left-[105px] -translate-x-1/2 -translate-y-1/2'>
                            <p>238</p>
                            <p>online client</p>
                            <p className='font-normal'>in a month</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 bg-[#4F7FF8]'></span>
                            <p>syphax site</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 bg-black'></span>
                            <p>reservili</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Statistique


