"use client"

import React, {useEffect} from 'react'
import Fixed_Card from './Fixed_Card'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";

const Fixed = () => {
  useEffect(() => {
		Aos.init();
	}, []);
  return (
    <>
    <div className='my-10 overflow-x-hidden'>


         <div className='   '
         
         data-aos="fade-down">
            <h1 className='text-3xl font-semibold text-center sm:text-xl'
          
            >
                Explore By Fixed Departures
            </h1>
            <p className='text-center'>
                Wonder Beyond Boundaries
            </p>
         </div>
<div>


      <div className='flex justify-center gap-x-8 sm:gap-x-3 lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-row'
      
      data-aos="fade-right">
      <Link href="/Nainital" >
              <div>
         
            <Fixed_Card 
                image="/nainital.jpg"
                place="Nainital with Jim Corbet from Delhi "
                days="4 days & 3 nights"
                price="19,500"
                />
            
           
              </div>
              </Link>

              <Link href="/Haridwar">
              <div>
                <Fixed_Card 
                image="/mussoorie2.jpg"
                place="Delhi to Haridwar Rishikesh Mussoorie"
                days="4 days & 3 nights"
                price="19,500"
                />
              </div>

              </Link>

              <Link href='/Group'>
              <div>
                <Fixed_Card 
                image="/kedarnath.jpg"
                place="Delhi to Kedarnath Group Trip"
                days="6 days & 5 nights"
                price="16,800"
                />
              </div>
              </Link>


              <Link href='/Auli'>
             
              <div>
                <Fixed_Card 
                image="/auli2.jpg"
                place="Auli Nainital Corbett Mussoorie"
                days="7 days & 6 nights"
                price="35,500"
                />
              </div>
              </Link>
      </div>


      <div className='flex justify-center gap-x-8 sm:gap-x-3 lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-row'
      data-aos="fade-left"
      >
              <Link href='/Chardham' >
              <div>
                <Fixed_Card 
                image="/chardham2.jpg"
                place="Chardham Yatra from Haridwar"
                days="10 Days & 9 nights"
                price="38,300"
                />
              </div>
              </Link>


<Link href='/Dehradun' >
              <div>
                <Fixed_Card 
                image="/mussorie.jpg"
                place="Dehradun Mussoorie Rishikesh"
                days="6 days & 5 nights"
                price="22,700"
                />
              </div>
              </Link>

<Link href='/Dodham'>
              <div>
                <Fixed_Card 
                image="/badrinath.jpg"
                place="Do Dham yatra from Haridwar"
                days="6 days & 5 nights"
                price="32,500"
                />
              </div>

              </Link>

              <Link href='/Kedarnath'>
              <div>
                <Fixed_Card 
                image="/kedarnath2.jpg"
                place="Kedarnath yatra from Haridwar"
                days="5 days & 4 nights"
                price="24,500"
                />
              </div>

              </Link>
      </div>


      </div>




    </div>
    
    </>
  )
}

export default Fixed