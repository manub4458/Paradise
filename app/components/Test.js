import React from 'react'
import Testimonial from './Testimonial'

const Test = () => {
  return (
    <>
    
    <div className='overflow-x-hidden'>
        <div>
            <h1 className='text-3xl font-semibold text-center'>
                What Our Client Says
            </h1>
        </div>
        <div className='flex justify-center gap-x-6 lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-wrap'>
          <div>
          <Testimonial 
           review=""
           place="Kolkata, India"
           />
          </div>

          <div>
          <Testimonial 
          review=""
           name="Shubham Chaudhary"
           place="Kolkata, India"
           />
          </div>

          <div>
          <Testimonial 
          review=""
           name="Shubham Chaudhary"
           place="Kolkata, India"
           />
          </div>

          <div>
          <Testimonial 
          review=""
           name="Shubham Chaudhary"
           place="Kolkata, India"
           />
          </div>
        </div>
    </div>
    </>
  )
}

export default Test