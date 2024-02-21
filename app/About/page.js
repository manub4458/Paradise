import React from 'react'
import Navbar from '../components/Navbar';
import Mobnav from '../components/Mobnav';
import Aboutcontent from './Aboutcontent';
import Foot from '../components/Foot';

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

<Aboutcontent />

<div>
  <Foot />
</div>
   </div>
   
   </>
  )
}

export default page