import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20' >
            <div className=' md;w-1/2 flex flex-col items-start justify-center gap-4 py-10 mm-auto md:py-[10vw]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leadinh-tight'>Book Appointment <br /> With Trusted Doctors</p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our existensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment. </p>
                </div>
                 <a href="#speciality" className=' btn flex items-centergap-2  px-8 py-3 rounded-full text-gray-500 text-sm m-auto md:m-0 gap-2 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a> 
                

            </div>
            <div className=' md:w-1/2 relative'>

                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img2} alt="" />

            </div>
        </div>
    )
}

export default Header;
