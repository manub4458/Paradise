
import { Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  
  return (
   <>
   <div className=''>
       <div className='card6 p-4 '>

        <div>
            <p className='leading-8'>
            Starting from <s>Rs. 27,105</s>
            </p>
        </div>
          <div>
            <h2 className='text-xl font-medium leading-8'> 
            INR 19,500 per Adult
            </h2>
          </div>

          <div className='my-4'>
            <button className='bg-yellow-100 px-4 py-2 rounded-lg'>
                28% off
            </button>
          </div>
       </div>

      <div className='card6   p-8 '>

         <div>
            <h2 className='text-center text-xl font-semibold'>
            Nainital with Jim Corbett from Delhi | FREE Jeep Safari: Get 28% off!
            </h2>
         </div>

         <div className='mt-6'>
            <h2 className='text-lg'>
             Name:
            </h2>

            <input 
            required
            type='text'
            placeholder="Enter Your Name"
            className='bg-[#D7D7D7] outline-none items-center justify-center '
            >
            
            
            </input>
         </div>
         <div className='mt-6'>
            <h2 className='text-lg'>
             Email:
            </h2>

            <input 
            type='email'
            required
            placeholder="Enter Your Email"
            className='bg-[#D7D7D7] outline-none'
            >
            
            
            </input>
         </div>

         <div className='mt-6'>
            <h2 className='text-lg'>
             Choose date for Travel:
            </h2>

            <input 
            type='date'
            required
            placeholder="Enter the date"
            className='bg-[#D7D7D7] outline-none'
            >
            
            
            </input>
         </div>

         <div className='mt-6'>
            <h2 className='text-lg'>
             No. Of Travellers:
            </h2>

            <input 
            type='number'
            required
            placeholder="Enter the Number of Travellers"
            className='bg-[#D7D7D7] outline-none '
            >
            
            
            </input>
         </div>



         <div className='mt-6'>
            <h2 className='text-lg'>
              Write a Message:
            </h2>

            <textarea
            type='text'
            required
            placeholder="Message"
            className='bg-[#D7D7D7] outline-none h-[80px] '
            >
            
            
            </textarea>

            <form>
               <button className='bg-gray-700 text-white p-2 mt-2 rounded-lg'>
                  Submit
               </button>
            </form>
         </div>

      </div>

   </div>
   
   
   </>
  )
}

export default Contact