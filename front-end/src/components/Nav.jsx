import React from 'react'
import Profile from './Profile'
import Navbutton from './Navbutton'
import homeIcon from '../assets/images/Vector (1).svg'
import checkin from "../assets/images/Vector (2).svg"
import folderIcon from "../assets/images/folder 1 (1).svg"
import rooms from "../assets/images/Vector (3).svg"
import clients from "../assets/images/Vector (4).svg"
import statisticsIcon from "../assets/images/Group 59.svg"
import hotelIcon from "../assets/images/Vector (7).svg"

const Nav = () => {
  return (
    <nav className='bg-[#222032]  h-screen relative w-52 p-4 text-white'>
        <Profile/>
        <div className='mt-8'>
          <h3>Menu</h3>
          <ul >
            <Navbutton pageLink="dashboard" imgName={homeIcon}/>
            <Navbutton pageLink="check in" imgName={checkin}/>
            <Navbutton pageLink="rooms" imgName={folderIcon}/>
            <Navbutton pageLink="clients" imgName={rooms}/>
            <Navbutton pageLink="statistics" imgName={statisticsIcon}/>
            <Navbutton pageLink="pricing" imgName={clients}/>
            <Navbutton pageLink="hotel" imgName={hotelIcon}/>
          </ul>
        </div>
    </nav>
  )
}

export default Nav