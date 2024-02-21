"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Mucontent = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
  <>
  <div className='overflow-hidden'>
           
           <div>
                <img
                src='/mussoorie2.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-screen h-[80svh]'


/>


           </div>

           <div
           data-aos="fade-down"
           >
            <h1 className='text-3xl font-bold text-red-500 pt-6 text-center'>
            Mussoorie
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                Mussoorie, also known as Queen of the Hills, is among the most popular hill stations of the country. A Britisher, Captain Frederick Young, accompanied by an official named FJ Shore, had climbed up the hill from the Doon valley in 1827 and found this ridge offering great views and a salubrious climate. This visit laid the foundation for this grand hill station. 

                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                A captivating paradise for leisure travellers and honeymooners, it is a perfect summer resort. Located on a 15-km-long horseshoe ridge with the grand Himalayas as a backdrop, Mussoorie spreads across at a height of 2,000 m above sea level. From this vantage point, it offers scenic views of Himalayas peaks in Western Garhwal.                         
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                Many famous personalities have made Mussoorie their home – most notable being authors Ruskin Bond and Bill Aitken. Filmstar Victor Banerjee resides in Mussoorie while deceased filmstar Tom Alter was born and brought up here. In the 1960s filmstar Prem Nath had his house here while the son of Dev Anand studied in Woodstock school. Cricketers Sachin Tendulkar and Mahendra Singh Dhoni are frequent visitors to this hill resort. 
                </p>

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                The best time to visit Mussoorie is during summers, as it offers respite from the scorching summer heat. However, if you are looking for a secluded holiday, come here during winters to witness the snowfall.
              
                
                </p>
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/muss.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-[40vw] h-[40svh] sm:h-[80vh] sm:w-[100vw] sm:px-2 sm:rounded-3xl rounded-2xl'


/>

            </div>

               
            <div className='bg-blue-800 text-white w-[28vw] sm:w-[100vw] sm:h-[65vh] sm:rounded-none     sm:ml-0  mt-6 ml-28 rounded-xl '>
   
                   <ul className='leading-8 pl-8 px-10  sm:pt-14'>
                    <li className='list-disc'>
                    One of the most popular hill stations
                    </li>
                    <li className='list-disc'>
                    Famous as weekend getaway and honeymoon destination
                    </li>
                    <li className='list-disc'>
                    Gateway to Gangotri and Yamunotri shrines
                    </li>
                    <li className='list-disc'>
                    Lush green hills, varied flora and fauna
                    </li>
                    <li className='list-disc'>
                    Winterline, a rare natural phenomenon, visible from here
                    </li>

                    <li className='list-disc'>
                    Home to authors, actors and other celebrities
                    </li>
                   </ul>

            </div>
         </div>
           </div>
        
             <div className='mt-10 '
             data-aos="fade-down"
             >
                <h1 className='text-2xl text-center font-bold'>
                    ATTRACTIONS
                </h1>
             </div>

             <div className='flex justify-center mt-4 gap-x-8  sm:gap-4 flex-wrap'
            data-aos="fade-right" 
             
             
             >

                <div>

                <img
							src='/surkanda.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/kempty.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/mallroad.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/laltibba.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>

             </div>

             <div className='mt-8'>

                <h2 className='text-center text-3xl font-bold '>
                    WHAT TO DO
                </h2>
             </div>
             <div className='flex justify-center mt-4 gap-x-8 sm:gap-4 flex-wrap'
            data-aos="fade-right" 
             
             
             >

                <div>

                <img
							src='/choptrek.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/mountain.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
{/* <div>

<img
            src='/yoga.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card8   sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div> */}


             </div>

          
             

   </div>
   
  </>
  )
}

export default Mucontent