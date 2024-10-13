import Link from 'next/link'
import React from 'react'
import { BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { FaCediSign, FaFacebook } from 'react-icons/fa6'

function Footer() {
  return (
     
       <div className='grid grid-cols-1 h-[394px] bg-custom-gradient-button p-10'>
        <div className='flex justify-between mt-10'>
      <div>
        <h1  className='text-xl md:text-3xl font-extrabold text-white'>Health Node</h1>
        <p className='mt-5 text-white'>8 W. South St.Buford, GA 30518 <br/>
        5Briarwood LaneVienna, VA 22180 RER</p>
        <div className='flex mt-5 space-x-5'>
        <BsYoutube className='text-white h-6 w-6'/>
        <FaFacebook className='text-white h-6 w-6' />
        <BsWhatsapp className='text-white  h-6 w-6' />
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-white'>Company Info</h1>
        <Link href='/' className='mt-5 text-white'>About</Link>
        <Link href='/' className='text-white'>Services</Link>
        <Link href='/' className='text-white'>Blog</Link>

      </div>
      <div>
        <h1 className='font-bold text-white'>Book Now</h1>
        <Link href='/' className='mt-5 text-white'>About</Link>
      </div>
      <div>
        <h1 className='font-bold text-white'>Contact</h1>
        <h1 className='mt-5 text-white'>+1 123456789</h1>
        <h1 className='text-white'>remmcal@mail.com</h1>
        <h1 className='text-white'>Phone: +1 12345678</h1>
      </div>
      </div>
      <div>
      <div className='border border-white mt-10'>  
      </div>
      <h1 className='flex justify-center mt-5 text-white'>&copy; 2024 Health Node. All Rights Reserved.</h1>
      </div>
    </div>
    

  )
}

export default Footer
