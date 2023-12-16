import React from 'react'
import user from "../assets/images/Group 65.svg"
import { FaStar } from "react-icons/fa";

const Comments = () => {
  return (

        <div className='flex flex-col  my-6 gap-2 p-5 rounded-lg bg-[#F0F3F8]'>
            <div>
                <div className='flex gap-2 mb-2 items-center'>
                    <div className="img">
                        <img src={user} alt="" />
                    </div>
                    <p >Karim Djaber</p>
                    <div className='flex gap-1'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <p>Syfax Hotel provides a decent stay; room comfort is good, but service could be improved.</p>
            </div>
        </div>
  )
}

export default Comments