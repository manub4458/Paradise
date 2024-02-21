"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Rcontent = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
   <>
   
   <div className='overflow-hidden'>
           
           <div>
                <img
                src='/rishikesh_trend1.jpg'
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
                RISHIKESH
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                Set against the backdrop of the Himalayas and with the pristine Ganga flowing through it, the ancient town of Rishikesh is one of the major tourist and pilgrimage hubs in northern India, where people from across the world arrive in search of peace. Rishikesh is commonly referred to as the ‘yoga capital of the world’ and rightly so. The destination is abuzz with visitors, who come here to learn yoga and meditation. Rishikesh has numerous ashrams, some of which are internationally recognised as centres of philosophical studies, yoga and other ancient Indian traditions of wellness. The Uttarakhand Tourism Development Board organises the annual International Yog Festival (IYF) here, which attracts thousands of yoga enthusiasts. There are several legends associated with Rishikesh. It is said Rishikesh finds a mention in the ancient text Skanda Purana, and in the epic Ramayana. It is said Lord Rama, along with his brothers, came to Rishikesh to do penance after killing Ravana.
                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                Rishikesh is also known for its connection with The Beatles. In February 1968, members of the legendary English rock band visited Maharishi Mahesh Yogi's ashram (now popularly known as the Beatles Ashram) to learn transcendental meditation. The band composed nearly 48 songs during their time at the Maharishi's ashram, many of which appear on the White Album (and a few from Abbey Road). John Lennon recorded a song titled, 'The Happy Rishikesh Song' after his visit. Several other international artists, including Mike Love of the Beach Boys, Paul Horn, Donovan and Gyp Mills, visited the site to contemplate and meditate.
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                Rishikesh is also a town of quaint cafes, which offer local and international cuisines and are mostly packed with tourists. Interestingly, in the last couple of years, Rishikesh has become very popular for its vibrant Holi celebrations, mostly organised by private hotels and resorts.


                </p>
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/rishitrend2.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-[40vw] h-[45svh] sm:h-[80vh] sm:w-[100vw] sm:px-2 sm:rounded-3xl rounded-2xl'


/>

            </div>

               
            <div className='bg-blue-800 text-white w-[28vw] sm:w-[100vw] sm:h-[65vh] sm:rounded-none     sm:ml-0  mt-6 ml-28 rounded-xl '>
   
                   <ul className='leading-8 pl-8 px-10  sm:pt-14'>
                    <li className='list-disc'>
                    Known as world capital of yoga and meditation
                    </li>
                    <li className='list-disc'>
                    Holy town with pleasant weather throughout the year
                    </li>
                    <li className='list-disc'>
                    Most loved place for all Beatles' fan across the world
                    </li>
                    <li className='list-disc'>
                    Unmatched white water rafting and other adventure sports
                    </li>
                    <li className='list-disc'>
                    Gateway to the Garhwal Himalayas
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
							src='/byasi.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/narendra.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/beatles.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/shiv.png'
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
							src='/rafting.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/bungee.png'
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

             <div className='flex justify-center mt-4 gap-x-8 sm:gap-4 flex-wrap'
            data-aos="fade-right" 
             
             
             >

                <div>

                <img
							src='/trekking.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                {/* <div>

<img
            src='/giant.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md sm:hidden relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div> */}
<div>

<img
            src='/zipline.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>


             </div>
             

   </div>
   
   </>
  )
}

export default Rcontent