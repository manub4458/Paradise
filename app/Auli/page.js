import React from 'react'
import Top from '../components/Top'
import Navbar from '../components/Navbar'
import Acontent from './Acontent'
import Foot from '../components/Foot'
import Mobnav from '../components/Mobnav'

const page = () => {
  return (
   <>
   <div>
   <div className='md:hidden'>
   
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />
</div>
    <Acontent />
    <Foot />
   </div>
   
   </>
  )
}

export default page