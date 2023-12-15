import React from 'react'
import PageTitle from '../components/PageTitle'
import FlexibleCart from '../components/FlexibleCart'
import bed from "../assets/images/Vector (8).svg"


const Home = () => {
  return (
    <>
      <div className='px-6'>
        <PageTitle title="Dashboard" />
        <div className='flex'>
          <FlexibleCart bgColor="linear-gradient(109deg, #608AF5 0.01%, #1E5EFF 99.98%);" img={bed} title="Occupancy" type="dynamic" info={{number: 47,total : 230}}/>
        </div>
      </div>
    </>
  )
}

export default Home