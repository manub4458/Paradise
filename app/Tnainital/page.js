
import React from 'react'
import Mobnav from '../components/Mobnav'
import Navbar from '../components/Navbar'
import Tncontent from './Tncontent'
import Foot from '../components/Foot'

const page = () => {
  return (
  <>
  
  <div className='md:hidden'>
   
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />
</div>
<Tncontent />
<div className='mt-4'>
<Foot />
</div>
  </>
  )
}

export default page