import React, { useState } from 'react'
import avatar from "../assets/images/60111.jpg"
import downAngle from "../assets/images/angle-small-down 1.svg"
import logoutIcon from "../assets/images/Log Out.svg"













const Header = () => {
  const [toggle, settoggle] = useState(false)

  return (
    <header className='flex  bg-white justify-end items-center py-3 px-6'>
      <div className='flex items-center  gap-3 relative'>
        <div className="img-profile">
          <img src={avatar} alt="avatar" className='w-10 rounded-full' />
        </div>
        <h3>John Doe</h3>
        <div className="img">
          <img src={downAngle} alt="" className={`rotate-${toggle * 180} `} onClick={() => {settoggle(!toggle)}}/>
        </div>
        {toggle ?
          <div className='absolute open-toggle duration-500 bg-white items-center -bottom-16 p-2 rounded-lg flex-col w-full flex'>
            <div className='flex w-full justify-between'>
              <p>Logout</p>
              <img src={logoutIcon} alt="" />
            </div>
            <div>

            </div>
          </div> :
          <div className='absolute closed-toggle duration-500 bg-white items-center -bottom-16 p-2 rounded-lg flex-col w-full '>
            <div className='flex w-full justify-between'>
              <p>Logout</p>
              <img src={logoutIcon} alt="" />
            </div>
            <div>

            </div>
          </div>
      }

      </div>
    </header>
  )
}

export default Header