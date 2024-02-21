import React from 'react'
import Termcontent from './Termcontent'
import Foot from '../components/Foot'
import Navbar from '../components/Navbar'
import Mobnav from '../components/Mobnav'

const page = () => {
  return (
  <>
  
  <div className='md:hidden'>
   
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />
</div>
<Termcontent />
<div className=''>
<Foot />
</div>
  </>
  )
}

export default page