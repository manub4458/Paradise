"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Tncontent = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
  <>
  
  <div className='overflow-hidden'>
           
           <div>
                <img
                src='/nainital.jpg'
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
                Nainital
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                Nainital, the charming Himalayan lake town, is a picture-postcard perfect hill-station and one of the most popular in Northern India. Commonly known as the ‘Lake District’, Nainital is nestled high up in the Kumaon Himalayas at an altitude of around 2,000 m above sea level. This beautiful town in surrounded by seven hills, popularly known as ‘Sapta-Shring’ – Ayarpata, Deopata, Handi-Bandi, Naina, Alma, Lariya-Kanta and Sher-Ka-Danda. The majestic mountains and the sparkling waters of the lake add an immense lot to the beauty of the town.  The town is centred around the emerald mountain lake Naini, which on most days is dotted with colourful sailboats. According to mythology, the lake is believed to have been formed when the eyes of goddess “Sati” fell at this spot while her body was being carried by Lord Shiva after her death. 
                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                The summer capital of the United Provinces during the British era, the town has a strong colonial heritage with vibrant clusters of villas and bungalows. Homesick Britishers used to flock to this quaint town spread over a forested valley. It is also known for the revered Naina Devi temple, which stands on the edge of the lake. Nainital is not only a famous tourist destination but is also known for its prestigious educational institutions and schools, which have stood since the British era. 
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                There are many renowned personalities who are either born here or have been associated with Nainital. Jim Corbett, author, and conservationist, was born in Nainital and was also educated here. Jim Corbett National Park in the vicinity is named after him, which is also the first National Park of India. Anoop Jalota, a popular classical singer and cricketer Manish Pandey were born in Nainital. Major Somnath Sharma, India’s first Param Vir Chakra awardee as well as legendary actor Amitabh Bachchan were educated at Sherwood College of Nainital. 

                </p>

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                Today, Nainital offers everything that's required for a perfect holiday. Plenty of hotels and resorts are set on the hillside; the Mall Road is a busy shopping hub; cafes and restaurants serve both local and global cuisine and there are innumerable forested trails that offer stunning views of the surrounding landscape. You can paddle in the lake or even try riding a horse in the town. Nainital is also a popular hot-air ballooning and mountaineering. 
                </p>
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/nainital2.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-[40vw] h-[60svh] sm:h-[80vh] sm:w-[100vw] sm:px-2 sm:rounded-3xl rounded-2xl'


/>

            </div>

               
            <div className='bg-blue-800 text-white w-[28vw] sm:w-[100vw] sm:h-[65vh] sm:rounded-none     sm:ml-0  mt-6 ml-28 rounded-xl '>
   
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
							src='/nauk.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/kainchi.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/kilbury.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/naini.png'
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
							src='/water.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card8  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/para.png'
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
							src='/golf.png'
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
            src='/hotair.png'
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

export default Tncontent