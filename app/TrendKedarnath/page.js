import React from 'react'
import Navbar from '../components/Navbar'
import Mobnav from '../components/Mobnav'
import Tkcontent from './Tkcontent'
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
<Tkcontent />
<div className='mt-4'>
<Foot />
</div>
 </>
  )
}

export default page