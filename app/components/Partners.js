"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Partners = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
  <>
  <div className='my-8'>

    <div>

        <h1 className='text-center text-[32px] text-[#05977C] font-bold tracking-wider  leading-8'>
            Where Happiness Finds a Voice
        </h1>
    </div>

    <div className='mt-6'>
        <h3 className='text-center text-[22px] text-[#333333] font-semibold   leading-8'>
        A Tapestry of Happy Memories, Woven by You
        </h3>
    </div>


    <div className='flex justify-evenly mt-6 flex-wrap'>
          <div>

            <h2 className='text-2xl font-semibold text-red-500'>
                Our Rating & Recognitions
            </h2>

           <div className='flex  justify-around gap-x-10 mt-8 sm:mt-4 '>

            <div>
            <img 
            src='/uttrakhand.webp'
            alt='Uttarakhand Approved'
            width="120"
            height="60"
            
            />
            </div>
            <div>
            <img 
            src='/google.png'
            alt='Google 5star Ratings'
            width="90"
            height="60"
            
            />
            </div>

           </div>

          <div className='flex mt-4 justify-center'>
          <img 
            src='/national.png'
            alt='Uttarakhand Approved'
            width="80"
            height="60"
            className='items-center  '
            
            />
          </div>

          <div className='flex  justify-center gap-x-10 mt-4'>

<div>
<img 
src='/msme.jpeg'
alt='Uttarakhand Approved'
width="90"
height="60"

/>
</div>
<div>
<img 
src='/startup.png'
alt='Google 5star Ratings'
width="160"
height="100"
className='mt-4'

/>
</div>

</div>
          </div>

<hr

className='rotate- bg-red-500 h-[30vh] w-[2px] sm:hidden'
/>

          {/* second */}
          <div className='sm:mt-4'>

<h2 className='text-2xl font-semibold text-center text-red-500'>
   Partners With
</h2>

<div className='flex  justify-around gap-x-10 mt-2 sm:mt-4 '>

<div>
<img 
src='/razorpay.png'
alt='Uttarakhand Approved'
width="120"
height="60"
className=''

/>
</div>
<div>
<img 
src='/viator.png'
alt='Google 5star Ratings'
width="90"
height="60"
className='mt-6'

/>
</div>

</div>



<div className='flex  justify-center gap-x-10 '>

<div>
<img 
src='/makemytrip.jpg'
alt='Uttarakhand Approved'
width="150"
height="60"

/>
</div>
<div>
<img 
src='/aws.png'
alt='Google 5star Ratings'
width="120"
height="100"
className='mt-4'

/>
</div>

</div>
</div>




{/* third */}

<div>


<a href="https://www.instagram.com/parad_iseuttarakhand/">

<video width="460" height="440" controls preload="" className='h-[30vh] sm:w-[80vw] sm:mt-4'>
      <source src="/video.mp4" type="video/mp4" />
      <track
        src="/video.mp4"
        kind="subtitles"
        srclang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>

    </a>
</div>
                


    </div>
  </div>
  
  </>
  )
}

export default Partners