"use client"

import React, {useEffect} from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Aos from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
const Trending = () => {
  useEffect(() => {
		Aos.init();
	}, []);
  return (
    <>
    <div className=' overflow-x-hidden  mt-8 '>
        <div
        data-aos="fade-down"
        >
            <h1 className='text-center font-semibold text-3xl sm:text-xl pt-1 sm:pt-4'>
                Explore By Trending Destination
            </h1>
            
            <h2 className='text-center text-pretty text-lg pt-4'>
                Turning Travel desire into reality 
            </h2>
        </div>
        <div>

       
        <div className='flex  gap-x-8 sm:gap-x-3 justify-center lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-row'
        
        data-aos="fade-right">
          <Link href='/TrendHaridwar'> 
      <div>
        <Card1
        
        image1="/Haridwar_trend.png"
        place="Haridwar"
        
        />
      </div>
      </Link>

      <Link href='/Rishikesh_trend' > 
      <div>
        <Card1
        
        image1="/rishikesh_trend.png"
        place="Gangotri"
        
        />
      </div>
      </Link>
    
    <Link  href='/TrendKedarnath'> 
      <div>
        <Card1
        
        image1="/kedarnath_trend.png"
        place="Kedarnath"
        
        />
      </div>
      </Link>
      <Link  href="/Tnainital"> 
      <div>
        <Card1
        
        image1="/nainital_trend.png"
        place="Rishikesh"
        
        />
      </div>
      </Link>

        </div>

        <div className='flex gap-x-8 sm:gap-x-3 justify-center lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-row   '
        data-aos="fade-left">

          <Link href='/Jimcorbet'> 
      <div>

        <Card2
        
        image1="/jim_trend.png"
        place="Kedarkantha"
        
        />
      </div>
      </Link>

      <Link href='/Chopta' >  
      <div>
        <Card2
        
        image1="/chopta_trend.png"
        place="Mussorie"
        
        />
      </div>
      </Link>

      <Link href='/Mussoorie' >  
      <div>
        <Card2
        
        image1="/mussorrie_trend.png"
        place="Dhanaulti"
        
        />
      </div>
      </Link>
      <Link href='/TrendChardham' > 
      <div>
        <Card2
        
        image1="/chardham_trend.png"
        place="Hills"
        
        />
      </div>
      </Link>

        </div>


        </div>
    </div>
    </>
  )
}

export default Trending