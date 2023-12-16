import plusIcon from '../assets/images/Group 87.svg'
import xIcon from "../assets/images/serbas.png"

const BlackBones = ({ title, description, resturant, setresturant }) => {
    const handleBonus = () => {
        setresturant(e => !e)
    }
    return (
        <div className='text-white flex w-[100%] px-4 rounded-lg h-16  items-center justify-between' style={{ background: "linear-gradient(109deg, #45444A 0%, #24213C 99.97%)" }}>
            <div className='flex flex-col items-start  '>
                <p>{title}</p>
                <p>{description}</p>
            </div>
            <div onClick={() => {handleBonus()}}>
                {!resturant ?  <img src={plusIcon} alt="plus-icon"  /> : <img src={xIcon} alt="x-icon" className='w-7'/>}
            </div>
        </div>
    )
}

export default BlackBones