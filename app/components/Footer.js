import React from 'react'
import { global } from 'styled-jsx/css'

const Footer = () => {
  return (
   <>
   
   <div className='bg h-[60vh] text-white overflow-x-hidden'>

    <div>
        <h1 className='text-white text-2xl font-semibold text-center pt-6'>
        Adventure awaits! Explore, dream, discover.
        </h1>
    </div>
     <div className='flex justify-center gap-x-40 pt-24  '>

        <div className='leading-8'>
            <p className='pb-8'>
                Company
            </p>

            <li className='list-none hover:text-red-500 hover:underline hover:cursor-pointer'>Our Story</li>
            <li className='list-none hover:text-red-500 hover:underline hover:cursor-pointer'>Disclaimer</li>
            <li className='list-none hover:text-red-500 hover:underline hover:cursor-pointer'>Cancellation Policy</li>
            <li className='list-none hover:text-red-500 hover:underline hover:cursor-pointer'>Terms and Conditions</li>
            <li className='list-none hover:text-red-500 hover:underline hover:cursor-pointer'>Privacy Policy</li>

        </div>

        <div className='leading-8'>
            <p className='pb-8'>
              National
            </p>

            <li className='list-none'>Rishikesh</li>
            <li className='list-none'>Kedarnath</li>
            <li className='list-none'>Badrinath</li>
            <li className='list-none'>Gangotri</li>
            <li className='list-none'>Haridwar</li>

        </div>

        <div className='leading-8'>
            <p className='pb-8'>
                Company
            </p>

            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>

        </div>

        <div className='leading-8'>
            <p className='pb-8'>
                Company
            </p>

            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>
            <li className='list-none'>Our Story</li>

        </div>

      
     </div>
   </div>
   </>
  )
}

export default Footer