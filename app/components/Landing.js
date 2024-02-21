import React from 'react'
import Top from './Top'
import Navbar from './Navbar'
import Hero from './Hero'
import Trending from './Trending'
import Card1 from './Card1'
import Banner1 from './Banner1'
import Fixed from './Fixed'
import Popular from './Popular'
import Trip from './Trip'
import Testimonial from './Testimonial'
import Test from './Test'
import Mobile_Header from './Mobile_Header'
import Navu from './Navu'
import Cont from './Cont'

import Mobnav from './Mobnav'
import Banner2 from './Banner2'
import Partners from './Partners'


const Landing = () => {
  return (
   <>
   {/* <Top />
   <Navbar /> */}
{/* <div className='absolute hidden w-screen  md:inline-block'>
<Mobnav />
</div> */}
<div className='md:hidden'>
<Navbar />
</div>
<div className="select-none landing_conatiner h-screen ">
				<div
					className=" md:hidden "
					data-aos="fade-up"
					data-aos-duration="1200">
			
				</div>
				<div className="absolute hidden w-screen  md:inline-block">
					<Mobnav />
				</div>
				<div className="absolute top-20 z-[1] w-screen">
					<Hero />
				</div>
			</div>
 {/* <Navu />
 <Mobile_Header /> */}
 
{/* <Hero /> */}
<Banner2 />
<Trending />
<Banner1 />
<Fixed />
{/* <Ema /> */}


{/* <Popular /> */}
<Trip />
{/* <Testimonial /> */}
{/* <Test /> */}
{/* <Card1 /> */}
   <Partners />
   </>
  )
}

export default Landing