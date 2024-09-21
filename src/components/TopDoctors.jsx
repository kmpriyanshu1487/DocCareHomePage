import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <di className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx10 '>
            <h1 className='text-3xl font-medium'>Top Doctors for Appointment</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {
                    doctors.slice(0, 10).map((items, index) => (
                        <div onClick={() => navigate(`/appointment/${items._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                            <img src={items.image} alt="" className='bg-blue-50 ' />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full '></p><p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{items.name}</p>
                                <p className='text-sm text-gray-600'>{items.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='btn text-gray-500 px-9 py-2 rounded-full mt-10'>more</button>
        </di>
    )
}

export default TopDoctors
