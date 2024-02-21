import Foot from "../components/Foot"
import Mobnav from "../components/Mobnav"
import Navbar from "../components/Navbar"
import Jcontent from "./Jcontent"


const page = () => {
  return (
   <>
   <div className='md:hidden'>
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />
</div>
<Jcontent />

<div className='mt-4'>
<Foot />
</div>
   </>
  )
}

export default page