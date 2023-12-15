import React from 'react'
import Profile from './Profile'
import Navbutton from './Navbutton'

const Nav = () => {
  return (
    <nav className='bg-red-500 p-4'>
        <Profile/>
        <div className='mt-8'>
          <h3>Menu</h3>
          <ul >
            <Navbutton pageLink="dashboard"/>
            <Navbutton pageLink="reserve"/>
            <Navbutton pageLink="rooms"/>
            <Navbutton pageLink="settings"/>
            <Navbutton pageLink="idea"/>
          </ul>
        </div>
    </nav>
  )
}

export default Nav