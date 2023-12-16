import React, { useState } from 'react'
import bonus from "../assets/images/Group 89.svg"
import bonustwo from "../assets/images/Group 90.svg"
import PageTitle from '../components/PageTitle'
import xIcon from "../assets/images/serbas.png"
import plusIcon from "../assets/images/Group 87.svg"
import BlackBones from '../components/BlackBones'

const Bookings = () => {
  const [familyNoteBook, setFamilyNoteBook] = useState(false)
  const handleChange = (e) => {
    setFamilyNoteBook(!familyNoteBook)
  }
  // for bonuses
  const [massage, setmassage] = useState(false)
  const [spa, setspa] = useState(false)
  const [resturant, setresturant] = useState(false)
  return (
    <div className='px-6 my-6'>
      <PageTitle title="Bookings" />
      <div className='flex flex-wrap gap-4'>
        <div className='lg:w-[70%]'>
          <form onSubmit={(e) => { e.preventDefault() }} method='post' className='w-full flex flex-col gap-3 bg-white rounded-lg p-6'>
            <div className='flex justify-between '>
              <div className='flex flex-col items-start gap-3 w-[27%]'>
                <label className='font-bold' htmlFor="firstName">First name</label>
                <input name='firstName' placeholder='Enter Your First Name' className='focus:outline-none pl-2 w-full py-2 bg-[#F0F3F8]' type="text" style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68)"

                }} id='firstName' />
              </div>
              <div className='flex flex-col  items-start gap-3 w-[27%]'>
                <label className='font-bold' htmlFor="lastName">last name</label>
                <input placeholder='Enter Your Last Name' name='lastName' className='focus:outline-none pl-2 w-full py-2 bg-[#F0F3F8]' type="text" style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68)"

                }} id='lastName' />
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="phoneNumber">Phone Number</label>
                <input name='phoneNumber' placeholder='Enter Your Phone Number' className='focus:outline-none pl-2 w-full py-2 bg-[#F0F3F8]' type="text" style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68)"

                }} id='phoneNumber' />
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="extraBed">Extra Bed</label>
                <select name="extra-bed" id="extraBed" className='py-2 bg-[#F0F3F8] w-[60%]' style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68);"

                }}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="family">With Family</label>
                <select onChange={(e) => { handleChange(e) }} name="family" id="family" className='py-2 bg-[#F0F3F8] w-[60%]' style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68);"

                }}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="familyNoteBook">View</label>
                <select name="family" id="family" className='py-2 bg-[#F0F3F8] w-full' style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68);"

                }}>
                  <option value="Beach">Beach</option>
                  <option value="Mountain">Mountain</option>
                </select>
              </div>
            </div>
            <div className='flex justify-between'>

              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="roomType">Room Type</label>
                <select name="roomType" id="roomType" className='py-2 bg-[#F0F3F8] w-[60%]' style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68);"

                }}>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Suit">Suit</option>
                </select>
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="familyNoteBook">From</label>
                <input name='from' className='focus:outline-none pl-2 w-full py-2 bg-[#F0F3F8]' type="date" style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68);"

                }} id='familyNoteBook' />
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="to">To</label>
                <input placeholder='Enter Your ID Card' name='to' className='focus:outline-none pl-2 w-full py-2 bg-[#F0F3F8]' type="date" style={{
                  border: "0.782px solid #686D96", boxShadow: "0px 3.908px 25.191px -15.423px rgba(0, 0, 0, 0.68);"

                }} id='IDCard' />
              </div>

            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="familyNoteBook">Family NootBook</label>
                <input disabled={!familyNoteBook} id='familyNoteBook' type="file" className="block w-full text-sm text-gray-500
                  file:me-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-600 file:opacity-20  file:text-white
                  hover:file:bg-blue-700
                  file:disabled:opacity-50 file:disabled:pointer-events-none
                  dark:file:bg-blue-500
                  dark:hover:file:bg-blue-400
                "/>
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]'>
                <label className='font-bold' htmlFor="idCard">ID CARD</label>
                <input type="file" id='idCard' className="block w-full  text-sm text-gray-500
                  file:me-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-600 file:text-white
                  hover:file:bg-blue-700
                  file:disabled:opacity-50 file:disabled:pointer-events-none
                  dark:file:bg-blue-500
                  dark:hover:file:bg-blue-400
                "/>
              </div>
              <div className='flex flex-col items-start gap-3 w-[30%]' style={{ visibility: "hidden" }}>
                <label className='font-bold' htmlFor="to">To</label>
                <input type="file" name="to" id="to" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                       file:border-0
                      file:bg-gray-100 file:me-4
                      file:py-3 file:px-4
                      "></input>
              </div>
            </div>
            <p>Total : <b>220$</b></p>
            <div className='flex flex-col gap-2'>
              {spa && <div className='flex gap-2'>

                <img src={bonustwo} alt="bonus" />
                <p>spa service</p>
              </div>}
              {massage && <div className='flex gap-2'>

                <img src={bonustwo} alt="bonus" />
                <p>Massage Service</p>
              </div>}
              {resturant && <div className='flex gap-2'>

                <img src={bonus} alt="bonus" />
                <p>Massage Service</p>
              </div>}

            </div>
            <input type="submit" value="BOOK" className='w-fit px-7 my-1 rounded-lg py-1 mx-auto text-white' style={{ background: "linear-gradient(109deg, #608AF5 0%, #1E5EFF 99.97%)" }} />
          </form>

        </div>
        <div className='flex flex-col gap-2 w-[26%]'>
          <div className='text-white flex w-[100%] px-4 rounded-lg h-16  items-center justify-between' style={{ background: "linear-gradient(109deg, #608AF5 0%, #1E5EFF 99.97%)" }}>
            <p>spa Service</p>
            <div onClick={() => setspa(!spa)}>
              {spa ? <img src={xIcon} alt="x-icon" className='w-7' /> : <img src={plusIcon} alt="plus-icon" />}
            </div>
          </div>
          <div className='text-white flex w-[100%] px-4 rounded-lg h-16  items-center justify-between' style={{ background: "linear-gradient(109deg, #608AF5 0%, #1E5EFF 99.97%)" }}>
            <p>Massage Service</p>
            <div onClick={() => setmassage(!massage)}>
              {massage ? <img src={xIcon} alt="x-icon" className='w-7' /> : <img src={plusIcon} alt="plus-icon" />}
            </div>
          </div>

          <BlackBones title="Restaurant service" description="launch, dinner" resturant={resturant} setresturant={setresturant} />
        </div>
      </div>
    </div>
  )
}



export default Bookings