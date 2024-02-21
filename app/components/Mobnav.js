"use client"

import React, {useState} from 'react'
import Link from 'next/link';

const Mobnav = () => {
    const [nav, setNav] = useState(false);

   
  return (
 <>
 
 <div className='overflow-hidden'>

    <div className='  px-4 flex  items-center justify-between'>
      <div>
        <Link href='/' >
<img 
src='/logoo.png'
alt='LOGO'
width="60"
height="60"
className='rounded-full'
/>
</Link>
      </div>

      <div>
      <button
      onClick={() => setNav(!nav)}
        className='z-[999999999] text-2xl select-none rotate-90 sm:mr-[1rem] text-black focus:outline-none  py-4'
        >
           |||
        </button>
      </div>
    </div>

    <div
				className={` ${
					nav ? "top-0 right-0" : "top-0 right-[-100vw]"
				} transition-all duration-[400ms] ease-in-out fixed bg-[#333333] blurry_bg w-[100%] sm:w-[100%] h-screen  z-[999]`}>
				<div className="">
					<button
						onClick={() => setNav(!nav)}
						className="absolute top-12 right-16 text-3xl text-white giga ">
						X
					</button>
					<img
						className="absolute top-[7%] left-20 sm:left-8 invert"
						src="/loog.webp"
						width="40"
						alt="Photo"
					/>

					<ul className="mt-[13rem] giga ml-[6rem] sm:ml-[4rem] text-black">
						<div className="md:ml-[1rem] scale-[0.7] z-[999999999]">
							{/* <input onClick={() => setNav(!nav)} type="checkbox" id="checkbox" />
						<label htmlFor="checkbox" className="toggle">
							<div className="bars" id="bar1"></div>
							<div className="bars" id="bar2"></div>
							<div className="bars" id="bar3"></div>
						</label> */}
						</div>

						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/">Home</Link>
						</li>
						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/Contact">Contact Us</Link>
						</li>
						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<div>About Us</div>
						</li>
						<li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
							<Link href="/">Blog</Link>
						</li>
						
					</ul>
				</div>
			</div>
 </div>
 
 </>
  )
}

export default Mobnav