"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Thcontent = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
   <>
   <div className='overflow-hidden'>
           
           <div>
                <img
                src='/haridwar2.jpg'
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
                Haridwar
            </h1>
           </div>

           <div className='flex gap-4 mt-8 flex-wrap'>


            <div className='w-[55vw] sm:w-[100vw]  '
            
            
            data-aos="fade-left"
            >
              
                  
                <p className='text-center px-24 sm:px-6 leading-8'>
                One of the holiest pilgrimages in India, Haridwar, or the ‘gateway to gods’, is located where Ganga, the sacredest of all Indian rivers, enters the Indo-Gangetic plains. Located at the foothills of the Himalayas, Haridwar is a city of temples and ashrams and its pious ambience envelops everyone. Haridwar is one of the four holy Indian cities that host the Kumbh Mela, a pious gathering of millions of Hindu devotees every 12 years. The Ardh Kumbh is organised here every six years. It also hosts the Kanwar mela every year during the rainy season. The ‘Panch Tirth’ or the five pilgrimages located within the periphery of Haridwar, are Gangadwara (Har Ki Pauri), Kushwart (Ghat), Kankhal, Bilwa Tirtha (Mansa Devi Temple) and Neel Parvat (Chandi Devi). Haridwar serves as the gateway to the Char Dham of Uttarakhand as well.    
                </p>
                
                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                An ancient city, Haridwar's roots are steeped deep in culture and traditions of the ancient Vedic times, and there are several institutions here imparting traditional knowledge of wellness. If you want to know more and experience the ancient methods of healing, there are many certified Ayurvedic clinics in Haridwar that you can visit. Ashrams also offer sessions in Ayurveda, meditation and yoga. Every morning and evening, the ghats (stepped banks of a river) of River Ganga witnesses the blissful Ganga aarti, which attracts devotees and tourists. The evening ritual being more popular, it makes for a mesmeric sight to see the river being venerated with loud and rhythmic chants and tall lamps, their lights lightening up the darkening waters. It is a spectacular sight as thousands of small diyas (earthen lamps) are set afloat on the river. 

    
                
                </p>
                

                <p className='text-center px-24 sm:px-6  leading-8 pt-6 '>
                While you are in Haridwar, do visit one of the newly renovated ghats, Chandighat.    
                
                </p>

               
            </div>

         <div className='gap-6'
         
         data-aos="fade-right"
         >
               
         <div>
                <img
                src='/haridwar3.jpg'
                alt='Banner'
                width="100"
                height="100"
                className='w-[40vw] h-[60svh] sm:h-[80vh] sm:w-[100vw] sm:px-2 sm:rounded-3xl rounded-2xl'


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
							src='/patanjali.png'
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                </div>
                <div>

<img
            src='/saptrishi.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/chandidevi.png'
            alt="search_icon"
            width="290"
            height="130"
            className='rounded-md relative card7  sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
        />
</div>
<div>

<img
            src='/matamansadevi.png'
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

export default Thcontent