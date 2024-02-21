
import { sendMail } from '@/lib/mail'
import React from 'react'

const Count = () => {
    const send = async() => {
        "use server"
        await sendMail()
    }
  return (
   <>
   <div>
      <form >
        <button className='bg-gray-700 text-white p-4'
        formAction={send}
        >
            Submit
        </button>
      </form>

   </div>
   
   </>
  )
}

export default Count