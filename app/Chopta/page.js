import React from 'react'
import Navbar from '../components/Navbar'
import Mobnav from '../components/Mobnav'
import Foot from '../components/Foot'
import Chopcontent from './Chopcontent'

const page = () => {
  return (
   <>
   <div className='md:hidden'>
   
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />

</div>
<Chopcontent />
<div className='mt-4'>
<Foot />
</div>
   
   </>
  )
}

export default page