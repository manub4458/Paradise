
"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
   <>
   
   <div>


<div className='flex justify-between mx-20 my-3 overflow-x-hidden'>
   <div>
   <Image
							src="/logoo.png"
							alt="search_icon"
							width="70"
							height="30"
                            className='rounded-full'
						/>
   </div>

   <div className='flex gap-x-6 font-medium my-2'
   data-aos="fade-up"
   >
       <div>
        <Link href="/">
        <p>
            Home
        </p>
        </Link>
       
       </div>
       <Link href='/Contact'>
       <div>
        <p>
            Contact Us
        </p>
       </div>
       </Link>

       <Link href='/About'>
       <div>
        <p>
           About Us
        </p>
       </div>
       </Link>
       <div>
        <p>
            Blog
        </p>
       </div>
   </div>

   <div>
   <a href="https://wa.me/7417013033">
   <Image
							src="/whatsapp_icon.gif"
							alt="search_icon"
							width="40"
							height="40"
                            className='rounded-full'
						/>
                        </a>
   </div>
</div>

   </div>
   </>
  )
}

export default Navbar