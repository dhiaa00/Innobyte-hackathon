import avatar from '../assets/images/60111.jpg'

const Profile = () => {
  return (
    <div className='flex items-center gap-3 text-xl'>
        <div className="img">
            <img src={avatar} alt="avatar" className='w-12 rounded-full'/>
        </div>
        <div className='flex flex-col'>
          <h1>Hosterly</h1>
          <h3>management</h3>
        </div>
    </div>
  )
}

export default Profile