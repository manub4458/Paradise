import { sendMail } from '@/lib/mail'
import React from 'react'

const Ema = () => {

    const send = async () =>{
        "use server"
        await sendMail ({to:"manav7895060556@gmail.com",name:"Manav", subject:"Testing",
    body:`<h1>Hello World</h1>`
    })
    }
  return (
    <>
   <form>
   <button className='bg-blue-800 text-white p-6'
   formAction={send}
   >
    Test
    
    </button> 
   </form>
    
    </>
  )
}

export default Ema