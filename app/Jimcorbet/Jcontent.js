"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Jcontent = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
 <>
   <div className='overflow-hidden'>
           
           <div>
                <img
                src='/jim2.jpg'
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
                Jim Corbett
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                Established in 1936, this is India's first national park. It is named after the legendary naturalist and conservationist Jim Corbett.  Located at the Himalayas' foothills, near the popular hill-station of Nainital, the beautiful Jim Corbett National Park, is famous for being home to a large number of tigers, the highest among any Indian national park. Spread over 1318.54 sq km, of which 520 sq km is the main area, and the remaining is buffer; the park is spread over the picturesque landscapes of Pauri Garhwal, Almora, and Nainital. The jeep safari into the dense forest to see the wild animals in their natural habitat is a must-have experience. And if you are lucky, then you may get a chance to even spot a tiger. While on the jeep safari, enjoy the lush green forest's views cut across by streams and rivers and a few waterfalls. There are accommodations available inside the park for night-stay as well, which offer you once-in-a-lifetime experience.     
                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                To promote tourism in this region, the Corbett National Park has been divided into six major different tourism zones. These are the manifested core or buffer areas of the park where visitors can be a part of the wildlife safari and can relish the tempting behaviour of the animals with their bare eyes in the vicinity.

         
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                Ramnagar is perhaps the nearest to approach the Corbett National Park which configures the headquarters of CTR. This small city is well connected by the rail and road networks with the major cities of India like Delhi, Moradabad, Nainital, and Bareilly. Once you reach Ramnagar, then it takes only half an hour to reach Corbett National Park. The Park is around 15 km from Ramnagar railway station.
                </p>

               
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/corbett.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-[40vw] h-[40svh] sm:h-[80vh] sm:w-[100vw] sm:px-2 sm:rounded-3xl rounded-2xl'


/>

            </div>

               
            <div className='bg-blue-800 text-white w-[28vw] sm:w-[100vw] sm:h-[65vh] sm:rounded-none     sm:ml-0  mt-6 ml-28 rounded-xl '>
   
                   <ul className='leading-8 pl-8 px-10  sm:pt-14'>
                    <li className='list-disc'>
                    Famous for having the highest number of tigers among Indian national parks.
                    </li>
                    <li className='list-disc'>
                    Covers thousands of kilometers of stunning landscape.
                    </li>
                    <li className='list-disc'>
                    Allows overnight stays in certain areas.
                    </li>
                    <li className='list-disc'>
                    Look-out for Royal Bengal tiger, Asiatic elephant, bear, a variety of deer, otters, other animals and over 650 species of domestic and migratory birds.
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
							src='/corbettwaterfall.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/sitabaniforest.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/museum.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/garjiya.png'
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
							src='/junglesafari.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/river.png'
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

export default Jcontent