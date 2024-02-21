import React from 'react'
import Top from '../components/Top'
import Navbar from '../components/Navbar'
import Mobnav from '../components/Mobnav'
import Charcont from './Charcont'
import Foot from '../components/Foot'
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

<Charcont />
<Foot />
   </div>
   
   </>
  )
}

export default page