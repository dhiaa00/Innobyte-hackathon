import React from 'react'
import useRooms, { postRoom } from '../Hooks/useRooms'
import useGuests from '../Hooks/useGuests'
import useBookings from '../Hooks/useBooking'
import useRoomTypes from '../Hooks/useRoomTypes'

const Booking = () => {
    const {data} = useRoomTypes()
    console.log(data)

    
  return (
    <div>Booking</div>
  )
}

export default Booking