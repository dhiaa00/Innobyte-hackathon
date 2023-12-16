import React from 'react'
import PageTitle from '../components/PageTitle'
import FlexibleCart from '../components/FlexibleCart'
import bed from "../assets/images/Vector (8).svg"
import elepse from "../assets/images/Vector.png"
import vecteur from "../assets/images/Vector (1).png"
import FlexibleCartBlack from '../components/FlexibleCartBlack'
import Comments from '../components/Comments'



const Home = () => {
  return (
    <>
      <div className='px-6'>
        <PageTitle title="Dashboard" />
        <div className='flex flex-wrap gap-1 text-white'>
          <FlexibleCart bgColor="linear-gradient(109deg, #608AF5 0.01%, #1E5EFF 99.98%);" img={bed} title="Occupancy" type="dynamic" info={{ number: 47, total: 230, percentage: 20 }} />
          <FlexibleCartBlack bgColor=" linear-gradient(108deg, #45454A -0.08%, #24213C 89.86%);" img={vecteur} title="Security risks" type="dynamic" info={{ number: 0 }} />
          <FlexibleCart bgColor="linear-gradient(109deg, #608AF5 0.01%, #1E5EFF 99.98%);" img={elepse} title="Housekeeping" type="dynamic" info={{ number: 20, total: 230, percentage: 37 }} />
          <FlexibleCart bgColor="linear-gradient(109deg, #608AF5 0.01%, #1E5EFF 99.98%);" img={vecteur} title="Housekeeping" type="dynamic" info={{ number: 20, total: 230, percentage: 37 }} />
          <div className="flex w-full gap-2 my-3">
            <div className='text-black w-[47%] bg-white px-6'>
              <p className='border-l-4 pl-4 border-l-black my-3 font-bold text-2xle'>Latest reviews</p>
              <Comments />
              <Comments />
              <Comments />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home