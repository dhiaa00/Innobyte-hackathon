
import arrowBottom from '../assets/images/angle-small-down 1.svg'


const FlexibleCartBlack = ({ bgColor, img, title, info }) => {
    return (
        <div className="md:w-64 p-6 rounded-lg" style={{ background: 'linear-gradient(108deg, #45454A -0.08%, #24213C 89.86%)' }}>
            <div className={`flex gap-2 ${bgColor} mb-5`} >
                <div className="img">
                    <img src={img} alt="img" />
                </div>
                <p className='flex-1'>{title}</p>

            </div>
            <div className='flex  flex-col '>
                <div className='flex flex-col'>
                    <p className='font-bold text-2xl'>{info.number}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Risk at the Moment</p>
                    <p>Safe</p>
                </div>


            </div>

        </div>
    )
}

export default FlexibleCartBlack