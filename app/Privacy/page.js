import Foot from "../components/Foot"
import Mobnav from "../components/Mobnav"
import Navbar from "../components/Navbar"
import Privacycontent from "./Privacycontent"


const page = () => {
  return (
   <>
    <div className='md:hidden'>
   
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />
</div>
   <Privacycontent />

   <Foot />
   </>
  )
}

export default page