"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Tccontent = () => {
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
                Chardham
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                Uttarakhand, also known as Devbhoomi or the Land of Gods, is home to numerous temples and welcomes devotees all year round. Among the countless religious sites and circuits that devotees visit in Uttarakhand, one of the most prominent is the Char Dham Yatra. This Yatra or pilgrimage is a tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath – nestled high up in the Himalayas. In Hindi, 'char' means four and 'dham' refers to religious destinations.     
                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                The high-altitude shrines remain shut for around six months every year, opening in summers (April or May) and closing with the onset of winter (October or November). It is believed that one should complete the Char Dham Yatra in a clockwise direction. Hence, the pilgrimage starts from Yamunotri, proceeds towards Gangotri, onto Kedarnath, and finally ends at Badrinath. The journey can be completed by road or by air (helicopter services are available). Some devotees even do a Do Dham Yatra or a pilgrimage to two shrines - Kedarnath and Badrinath.         
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                The Yamunotri temple, lodged in a narrow gorge close to the source of River Yamuna (the second-most sacred Indian river after River Ganga) in Uttarkashi district, is dedicated to Goddess Yamuna. The district of Uttarkashi is also home to Gangotri dedicated to Goddess Ganga, the most sacred of all Indian rivers. Located in the Rudraprayag district lies Kedarnath, dedicated to Lord Shiva. Badrinath, home to the sacred Badrinarayan Temple, is dedicated to Lord Vishnu. The Char Dham Yatra is as divine as it is arduous but fulfills the soul!
                </p>

               
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/badrinath2.jpeg'
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
							src='/yamunotri.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/gangotritrend.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/badritrend.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/kedarnathtrend.png'
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

export default Tccontent