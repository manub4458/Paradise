"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const Tkcontent = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
<>
<div className='overflow-hidden'>
           
           <div>
                <img
                src='/kedarnath.jpg'
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
                Kedarnath
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                One of the most revered temple destinations of India, Kedarnath town is nestled in the mighty Garhwal Himalayas. The town, built around the revered Kedarnath temple, is located at an altitude of 3,580 m, near Chorabari glacier, which is the source of the Mandakini river. Dedicated to Lord Shiva, the ancient temple has exquisite architecture and is built of extremely large but evenly shaped grey stone slabs. A conical rock formation inside the temple is worshipped as Lord Shiva in his “Sadashiva” form.  The Kedarnath temple, dedicated to Lord Shiva, is a part of Char Dham pilgrimage circuit, and is one of the 12 Jyotirlingas of Lord Shiva in India. Behind the Kedarnath temple, stand the Kedarnath peak, Kedar Dome and other Himalayan peaks.         
                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                The historical name of this region is "Kedar Khand" and legend says, the Pandavas from the epic Mahabharata, after having defeated the Kauravas, felt guilty of having killed so many people and sought the blessings of Lord Shiva for redemption. The Lord eluded them repeatedly and took refuge at Kedarnath in the form of a bull. The Lord dived into the ground, leaving his hump on the surface at Kedarnath. The remaining portions of Lord Shiva appeared at four other places and are worshipped there as his manifestations. The arms of the Lord appeared at Tungnath, the face at Rudranath, the belly at Madmaheshwar and his locks (hair) at Kalpeshwar. The Kedarnath and four above mentioned shrines make the revered Panch Kedar pilgrimage circuit.    
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                From May to October is the best time to visit Kedarnath. During winter months, the town remains closed due to heavy snowfall. The temple has been shut for the winter of 2021-22.           
                
                </p>

               
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/kedarnath2.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-[40vw] h-[55svh] sm:h-[80vh] sm:w-[100vw] sm:px-2 sm:rounded-3xl rounded-2xl'


/>

            </div>

               
            {/* <div className='bg-blue-800 text-white w-[28vw] sm:w-[100vw] sm:h-[65vh] sm:rounded-none     sm:ml-0  mt-6 ml-28 rounded-xl '>
   
                   <ul className='leading-8 pl-8 px-10  sm:pt-14'>
                    <li className='list-disc'>
                    One of the most popular hill-stations in India
                    </li>
                    <li className='list-disc'>
                    Picturesque colonial town
                    </li>
                    <li className='list-disc'>
                    Centered around beautiful mountain lake
                    </li>
                    <li className='list-disc'>
                    Surrounded by seven hills and snow-capped peaks
                    </li>
                    <li className='list-disc'>
                    Home to Naina Devi temple
                    </li>
                   </ul>

            </div> */}
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
							src='/sonprayag.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/mountkedar.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/kedardome.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/mayali.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>

             </div>

            
             

   </div>


</>
  )
}

export default Tkcontent