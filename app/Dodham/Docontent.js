"use client"

import React, {useState} from 'react'
import Contact from '../Nainital/Contact';
const Docontent = () => {

    const defaultsx = {
        Oine: false,
        Tiwo: false,
        Tihree: false,
        Fiour: false,
        Foive: false,
    };
    const [state, setState] = useState({
        Oine: true,
        Tiwo: false,
        Tihree: false,
        Fiour: false,
        Foive: false,
    });
  return (
    <>
    <div className='my-6'>
        <div>
            <img
                src="/dodham2.jpg"
                alt="search_icon"
                width="290"
                height="130"
                className=' w-screen h-[80vh] sm:h-screen '
            />
        </div>

        <div>

            <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'>
            Do Dhaam Yatra Package
            </h1>
        </div>

        <div className='flex lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-wrap'>

            <div className='w-[60vw] mt-10 sm:w-[100vw] lg:w-[100vw]'>


                <div className='flex justify-center gap-x-6 lg:gap-x-10 lg:flex lg:justify-around sm:flex sm:flex-wrap sm:text-base  text-lg'>

                    <div className='flex gap-x-2 sm:gap-x-1 '>

                        <div>
                            <img
                                src="/price.gif"
                                alt="search_icon"
                                width="20"
                                height="30"
                                className='sm:w-[15px] '
                            />
                        </div>

                        <div>
                            <p>
                                Cost (+5% GST)
                            </p>
                            <p className='text-green-600 font-bold text-xl'>
                                32,500
                            </p>
                        </div>

                    </div>



                    <div className='flex gap-x-2 sm:gap-x-1'>

                        <div>
                            <img
                                src="/duration.png"
                                alt="search_icon"
                                width="20"
                                height="30"
                                className=' '
                            />
                        </div>

                        <div>
                            <p>
                                Duration
                            </p>
                            <p className='text-blue-600 font-bold'>
                                6N / 7D
                            </p>
                        </div>

                    </div>




                    <div className='flex gap-x-2 sm:gap-x-1'>

                        <div>
                            <img
                                src="/location.gif"
                                alt="search_icon"
                                width="20"
                                height="30"
                                className=' '
                            />
                        </div>

                        <div>
                            <p>
                                Pickup / Drop
                            </p>
                            <p className='text-blue-600 font-bold'>
                                Delhi
                            </p>
                        </div>

                    </div>




                </div>

                <div className='flex  sm:flex sm:flex-wrap lg:flex lg:justify-around justify-center gap-3 text-white mt-4'>
                    <div>
                        <button className={`${state.Oine ? `actives` : ``
                            } bg-red-500  py-2 px-6 rounded-lg`}
                            onClick={() => {
                                setState({ ...defaultsx, Oine: true });
                            }}
                        >
                            Overview
                        </button>
                    </div>

                    <div>
                        <button className={`${state.Tiwo ? `actives` : ``
                            } bg-red-500   py-2 px-6 rounded-lg`}
                            onClick={() => {
                                setState({ ...defaultsx, Tiwo: true });
                            }}
                        >
                            About the Tour
                        </button>
                    </div>

                    <div>
                        <button className={`${state.Tihree ? `actives` : ``
                            } bg-red-500   py-2 px-6 rounded-lg`}
                            onClick={() => {
                                setState({ ...defaultsx, Tihree: true });
                            }}
                        >
                            Itinerary
                        </button>
                    </div>

                    <div>
                        <button className={`${state.Fiour ? `actives` : ``
                            } bg-red-500  py-2 px-6 rounded-lg`}
                            onClick={() => {
                                setState({ ...defaultsx, Fiour: true });
                            }}
                        >
                            Policy
                        </button>
                    </div>


                </div>

{/* Overview */}

                <div className=' flex mt-9 justify-center'>

                    <div className="w-[40vw] sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 card6  ">
                        {state.Oine && (
                            <>

                                <div>
                                    <h1 className='text-center font-semibold text-2xl sm:text-xl py-4'>
                                    Do Dhaam Yatra Package Highlights
                                    </h1>
                                </div>
                                <div className='flex gap-1  '>
                                    <div>
                                        <img
                                            src="/bullet.png"
                                            alt="search_icon"
                                            width="20"
                                            height="30"
                                            className=' py-2  '
                                        />

                                    </div>

                                    <div>
                                        <p className='leading-8'>
                                        Experience the divine grace of gods as you set out on a spiritual journey to the two of the holiest shrines in India.
                                        </p>
                                    </div>
                                </div>


                                <div className='flex gap-1'>
                                    <div>
                                        <img
                                            src="/bullet.png"
                                            alt="search_icon"
                                            width="20"
                                            height="30"
                                            className=' py-2 '
                                        />

                                    </div>

                                    <div>
                                        <p className='leading-8'>
                                        Seek blessings at the ancient temple of Kedarnath, a religious odyssey amidst the ice-clad beauty of the mountain peaks.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-1'>
                                    <div>
                                        <img
                                            src="/bullet.png"
                                            alt="search_icon"
                                            width="20"
                                            height="30"
                                            className=' py-2 '
                                        />

                                    </div>

                                    <div>
                                        <p className='leading-8'>
                                        Rejuvenate your soul in the tranquility of the Badrinath temple surrounded by snow-capped peaks of the Himalayas.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-1'>
                                    <div>
                                        <img
                                            src="/bullet.png"
                                            alt="search_icon"
                                            width="20"
                                            height="30"
                                            className=' py-2 '
                                        />

                                    </div>

                                    <div>
                                        <p className='leading-8'>
                                        Witness the divine confluence of five rivers at Panch Prayag as they unite in harmony to form the holy river of Ganga.
                                        </p>
                                    </div>



                                </div>

                                <div className='flex gap-1'>
                                    <div>
                                        <img
                                            src="/bullet.png"
                                            alt="search_icon"
                                            width="20"
                                            height="30"
                                            className=' py-2 '
                                        />

                                    </div>

                                    <div>
                                        <p className='leading-8'>
                                        Discover the untouched paradise of the Mana Village where ancient tales of Mahabharata await your arrival.
                                        </p>
                                    </div>



                                </div>
                             

                          

                             
                            </>
                        )}

                    </div>





                </div>





                {/* About The tour */}

                <div className='flex mt-9 justify-center'>
                    <div className="w-[50vw] card6 sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 px-4">
                        {state.Tiwo && (

                            <>
                                <div>
                                    <div>
                                        <h2 className='text-xl font-medium'>
                                            About the Tour:
                                        </h2>


                                    </div>

                                    <div className='my-8'>
                                        <p>
                                        Discover a spiritual and awe-inspiring journey with our Do Dhaam Yatra Package. Starting from Delhi, move towards the Guptakashi in Uttarakhand, where the pristine mountain air and the gentle sounds of nature set the tone for your spiritual voyage. Kedarnath, the abode of Lord Shiva, within the majestic Himalayan backdrop, and the Badrinath, which is dedicated to Lord Vishnu and surrounded by serene natural beauty. The trip covers the Rudraprayag, where two rivers converge in a breathtaking confluence. This pilgrimage is not more than just a tour; it's an unforgettable experience, a chance to explore spiritual and natural wonders, and to return with a heart full of blessings.
                                        </p>
                                    </div>
                                     
                                   

                                    <div>
                                        <h2 className='text-xl font-medium '>
                                            Quick Info:
                                        </h2>
                                    </div>

                                    <div className='px-6 py-4'>
                                        <div className='flex gap-x-2'>
                                            <div>
                                                <li className='list-disc font-medium'>
                                                    Route:
                                                </li>
                                            </div>
                                            <div>
                                                <p>
                                                Delhi-Guptakashi-Kedarnath-Guptakashi-Badrinath-Rudraprayag-Delhi
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex gap-x-2'>
                                            <div>
                                                <li className='list-disc font-medium'>
                                                    Duration:
                                                </li>
                                            </div>
                                            <div>
                                                <p>
                                                6 Days & 5 Nights 
                                                </p>
                                            </div>
                                        </div>


                                        <div className='flex gap-x-2'>
                                            <div>
                                                <li className='list-disc font-medium'>
                                                    Start Point:
                                                </li>
                                            </div>
                                            <div>
                                                <p>
                                                Delhi
                                                </p>
                                            </div>
                                        </div>


                                        <div className='flex gap-x-2'>
                                            <div>
                                                <li className='list-disc font-medium'>
                                                    End Point:
                                                </li>
                                            </div>
                                            <div>
                                                <p>
                                                Delhi
                                                </p>
                                            </div>
                                        </div>

                                    </div>


                                    <div>
                                        <h2 className='text-xl font-medium '>
                                            Inclusions:
                                        </h2>
                                    </div>

                                    <div className='px-6 py-4'>

                                        <div>
                                            <li className='list-disc'>
                                            Pickup and drop-off from bus stand or railway station.
                                            </li>
                                            <li className='list-disc'>
                                            Comfortable and hygienic vehicle (Sedan, SUV, or traveler) for sightseeing on all days as per the itinerary.

                                            </li>

                                            <li className='list-disc'>
                                            Stay on a double- and triple-sharing basis in hygienic and sanitized hotels.
                                            </li>
                                            <li className='list-disc'>
                                            Breakfast as per the itinerary.
                                            </li>
                                            <li className='list-disc'>
                                            Highly-Experienced driver cum guide.
                                            </li>

                                            <li className='list-disc'>
                                            Sightseeing as per itinerary.
                                            </li>
                                           
                                        </div>

                                    </div>

                                  


                                    <div>
                                        <h2 className='text-xl font-medium '>
                                            How to Reach:
                                        </h2>
                                    </div>
                                    <div className='px-6 py-4'>

<div>
 <li className='list-disc'>
   <strong>By Air: </strong>
   Indira Gandhi International Airport (IGI) in Delhi is a feasible option for traveling to Uttarakhand as it serves both domestic and international flights.
 </li>
 <li  className='list-disc'>
   <strong>By Rail:</strong>
   Another alternative is the New Delhi Railway Station, which is one through which most trains arrive and depart from Delhi and is located in Paharganj, near Connaught Place.
 </li>

 <li className='list-disc'>
   <strong>By Road: </strong>
   One of the best options will be through buses, as they are well connected to cities like Jaipur, Agra, Alwar, Dehradun, and even Kathmandu, among others.
 </li>


</div>

</div>


                                    <div className='flex gap-2 py-4'>
                                        <div>
                                            <h2 className='text-lg font-medium '>
                                                Note:
                                            </h2>
                                        </div>

                                        <div>
                                            <p>
                                                The above rates would vary and won't be the same on special days such as Diwali, Dussehra, Christmas, and New Year, to get the best rates for these days you can connect with us directly.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </>

                        )}
                    </div>
                </div>




                {/* itinerary */}

                <div className='flex mt-9 justify-center'>
                    <div className="w-[50vw] sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 card6  px-4">
                        {state.Tihree && (

                            <>
                                <div>

                                    <div>
                                        <h2 className='text-center font-medium text-2xl'>
                                     Do Dham Yatra Itinerary
                                        </h2>
                                    </div>

                                    <div className='py-6'>

                                        <div className='flex gap-x-6'>

                                            <div>
                                                <button className='bg-[#fff]'>
                                                    Day 1
                                                </button>
                                            </div>

                                            <div>
                                                <details>
                                                    <summary className='hover:cursor-pointer'>

                                                    Start trip from Delhi | Embark on a journey to the Wonderland of India
                                                    </summary>
                                                    <div className='flex px-2'>
                                                        <div>
                                                            <img
                                                                src='/location.gif'
                                                                alt="search_icon"
                                                                width="20"
                                                                height="30"
                                                                className=' '
                                                            />

                                                        </div>
                                                        <div>
                                                            <p>
                                                Delhi
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Total distance: 220 kms | Total time: 5 Hrs
                                                        </li>
                                                        <li className='list-disc'>
                                                        Your trip starts in the late evening of this day as you get picked up from a pre-decided location in Delhi for the transfers to Haridwar.
                                                        </li>
                                                        
                                                       <li className='list-disc'>
                                                      <strong> Transfer in Swift Dzire, Innova</strong>


                                                        </li>      

                                                        <li className='list-disc'>

                                                        The driver will pick you up from Delhi, from where you will travel overnight to reach Haridwar the next morning.
                                                            </li>     
                                                                     
                                                                                      </div>

                                                  

                                                   
                                                </details>
                                            </div>

                                        </div>




                                        <div className='flex gap-x-6 py-4'>

                                            <div>
                                                <button className='bg-[#fff]'>
                                                    Day 2
                                                </button>
                                            </div>

                                            <div>
                                                <details>
                                                    <summary className='hover:cursor-pointer'>


                                                    Haridwar to Guptakashi | Sacred Journey Through Himalayas
                                                    </summary>
                                                    <div className='flex px-2 py-2'>
                                                        <div>
                                                            <img
                                                                src='/location.gif'
                                                                alt="search_icon"
                                                                width="20"
                                                                height="30"
                                                                className=' '
                                                            />

                                                        </div>
                                                        <div>
                                                            <p>
                                                            Guptakashi
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Total distance: 210 kms | Total time: 6 Hrs
                                                        </li>
                                                        <li className='list-disc'>
                                                        In the embrace of Guptakashi's serene beauty, the confluence of the Alaknanda and Bhagirathi Rivers gives birth to the sacred Ganga. At the revered Sangam, prayers merge with the flowing waters. Guptakashi, surrounded by majestic peaks, becomes a sanctuary for spiritual contemplation, marking the zenith of this divine odyssey.
                                                        </li>
                                                        <li className='list-disc'>
                                                       <strong>Transfer in Swift Dzire, Innova</strong>
                                                       
                                                        </li>
                                                        <li className='list-disc'>
                                                        The driver will continue the overnight journey to reach Haridwar.
                                                        </li>
                                                        <li className='list-disc'>
                                                        After some time you will proceed towards Guptkashi.
                                                        </li>

                                                        <li className='list-disc'>
                                                        Upon reaching Guptkashi, you’ll transfer to a hotel where you can take some rest.
                                                        </li>

                                                        <li className='list-disc'>
                                                        <strong>Activity: En route Sightseeing | Witness the Confluence of Alaknanda and Bhagirathi Rivers</strong>
                                                        </li>  

                                                        <li className='list-disc'>
                                                        En route have a small stopover at the Sangam of Alaknanda and Bhagirathi Rivers and witness the birth of the sacred river Ganga and feel the divinity.
                                                        </li>
                                                            
                                                                        </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it67.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        
                                                       
                                                    </div>
                                                </details>
                                            </div>

                                        </div>



                                        {/* Day3 */}


                                        <div className='flex gap-x-6 py-4'>

                                            <div>
                                                <button className='bg-[#fff]'>
                                                    Day 3
                                                </button>
                                            </div>

                                            <div>
                                                <details>
                                                    <summary className='hover:cursor-pointer'>

                                                       
                                                    Guptkashi to Kedarnath | Enter the Holy Shrine of Lord Shiva
                                                    </summary>
                                                    <div className='flex px-2 py-2'>
                                                        <div>
                                                            <img
                                                                src='/location.gif'
                                                                alt="search_icon"
                                                                width="20"
                                                                height="30"
                                                                className=' '
                                                            />

                                                        </div>
                                                        <div>
                                                            <p>
                                                       Kedarnath
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Total distance: 50 kms | Total time: Full day
                                                        </li>
                                                        <li className='list-disc'>
                                                        Embarking on a spiritual odyssey, the journey to Kedarnath leads pilgrims through the majestic Himalayas. Along the sacred route, enveloped in the serene aura of the mountains, devotees traverse the rugged terrain with unwavering faith. As pilgrims approach the revered Kedarnath Temple, the atmosphere becomes electric with spirituality, marking the culmination of this profound pilgrimage, where every step resonates with divine grace.
                                                        </li>
                                                        <li className='list-disc'>
                                                        <strong>Transfer in Swift Dzire, Innova</strong>
                                                        </li>
                                                        <li className='list-disc'>
                                                        Get ready early morning and have a healthy breakfast, the driver will help you with the transfer from Guptakashi to Sonprayag from where you will board a government vehicle to Gaurikund from the Kedarnath trek start.
                                                        </li>
                                                        <li className='list-disc'>
                                                        <strong>Activity: Kedarnath Darshan Seek the Blessings</strong>
                                                        </li>
                                                        <li className='list-disc'>
                                                        Get ready to behold the divine aura of Lord Shiva at the mesmerizing Kedarnath Mandir, nestled between two majestic hills, offering a soul-stirring experience of spiritual reverence and natural beauty.
                                                        </li>

                                                        <li className='list-disc'>
                                                        As soon as you complete the darshan proceed toward your hotels for overnight stay and dinner.
                                                        </li>

                                                      

                                       
                                                    </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/kedarnath.jpg'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it68.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        
                                                    </div>
                                                </details>
                                            </div>

                                        </div>


                                        {/* Day 4 */}

                                        <div className='flex gap-x-6 py-4'>

                                            <div>
                                                <button className='bg-[#fff]'>
                                                    Day 4
                                                </button>
                                            </div>

                                            <div>
                                                <details>
                                                    <summary className='hover:cursor-pointer'>
                                                    Kedarnath to Guptkashi | Descending from Divine Heights
                                                  
                                                    </summary>
                                                    <div className='flex px-2 py-2'>
                                                        <div>
                                                            <img
                                                                src='/location.gif'
                                                                alt="search_icon"
                                                                width="20"
                                                                height="30"
                                                                className=' '
                                                            />

                                                        </div>
                                                        <div>
                                                            <p>
                                                            Guptakashi
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Total distance: 50 kms | Total time: Full day
                                                        </li>
                                                        <li className='list-disc'>
                                                        From the sacred realms of Kedarnath, the journey back to Guptakashi is a descent from the divine heights. Pilgrims trace their steps, carrying the blessings of Lord Shiva in their hearts. As they return to Guptakashi, the echo of prayers lingers, wrapped in the tranquility of the Himalayas, marking the completion of this spiritual sojourn.
                                                        </li>
                                                        <li className='list-disc'>
                                                       <strong>Transfer in Swift Dzire, Innova</strong>
                                                        </li>

   <li className='list-disc'>
   The driver will meet you again at the point where he dropped you off and will help you with the transfer back from Sonprayag to Guptakashi.
   </li>

   <li className='list-disc'>
   As you reach Guptkashi, complete the check-in formalities and the rest day is at leisure.

   </li>

   <li className='list-disc'>
   <strong>Activity: Kedarnath to Guptakashi | Trek down & Board your Transfer
</strong>
   </li>

   <li className='list-disc'>
   After having a healthy breakfast trek down to the point from where you will board your transfer back to Guptakashi for an overnight stay and dinner.
   </li>

 

  
                                                    </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it69.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        
                                                       
                                                    </div>
                                                </details>
                                            </div>

                                        </div>

{/* Day5 */}

                                        <div className='flex gap-x-6 py-4'>

<div>
<button className='bg-[#fff]'>
Day 5
</button>
</div>

<div>
<details>
<summary className='hover:cursor-pointer'>

Guptkashi to Badrinath | Divya Desam of Lord Vishnu
</summary>
<div className='flex px-2 py-2'>
    <div>
        <img
            src='/location.gif'
            alt="search_icon"
            width="20"
            height="30"
            className=' '
        />

    </div>
    <div>
        <p>
  Badrinath
        </p>
    </div>
</div>
<div className='px-4 py-2'>
    <li className='list-disc'>
    Total distance: 200 kms | Total time: 7 Hrs
    </li>
    <li className='list-disc'>
    The spiritual expedition to Badrinath unfolds amidst the scenic grandeur of the Garhwal region. Wind through picturesque routes, where the melody of mountain streams accompanies their path. Approaching Badrinath, the atmosphere resonates with reverence, heralding the pilgrims' arrival at the sacred abode of Lord Vishnu. Each step echoes with ancient blessings, making this journey a profound experience of divine serenity.
    </li>
    <li className='list-disc'>
    <strong>Transfer in Swift Dzire, Innova</strong>
    </li>

<li className='list-disc'>
After having a healthy breakfast the driver will help you with the transfer from Guptkashi to Badrinath Temple.
</li>

<li className='list-disc'>
As you complete the darshan, the driver will drop you at the hotel. Complete the check-in formalities for an overnight stay and dinner.
</li>

<li className='list-disc'>
    <strong>Activity: Badrinath Darshan</strong>
</li>

<li className='list-disc'>
Seek Blessings from Lord Vishnu at Badrinath Temple, and Immerse Yourself in the Profound Divinity of Badrinath.
</li>




</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it70.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
    
   
</div>
</details>
</div>

</div>


{/* Day 6 */}

<div className='flex gap-x-6 py-4'>

<div>
<button className='bg-[#fff]'>
Day 6
</button>
</div>

<div>
<details>
<summary className='hover:cursor-pointer'>

Badrinath to Rudraprayag | Witness the Holy Sangam's
</summary>
<div className='flex px-2 py-2'>
    <div>
        <img
            src='/location.gif'
            alt="search_icon"
            width="20"
            height="30"
            className=' '
        />

    </div>
    <div>
        <p>
            Rudraprayag
        </p>
    </div>
</div>
<div className='px-4 py-2'>
    <li className='list-disc'>
    Total distance: 160 kms | Total time: 5 Hrs
    </li>
    <li className='list-disc'>
    Traveling through the majestic Himalayas, pilgrims witness the confluence points where the Alaknanda River merges with diverse streams, each site resonating with spiritual significance. Continuing, the blending of Alaknanda with Mandakini and other rivers in Rudraprayag creates a serene haven. Here, amid nature's harmonious blend, travelers find solace and spiritual rejuvenation.
    </li>
    <li className='list-disc'>
   <strong>Transfer in Swift Dzire, Innova</strong>
    </li>

<li className='list-disc'>
Early morning after having a healthy breakfast, complete the check-out formalities. After that driver will take to the Badrinath Temple.
</li>

<li className='list-disc'>
Next, the driver will take you to Mana village for a short sightseeing tour.
</li>

<li className='list-disc'>
Post-sightseeing driver will drop you at the hotel in Rudraprayag for an overnight stay and dinner.
</li>

<li className='leading-8'>
    <strong>Activity: Badrinath Darshan & Enroute Sightseeing | Badrinath Darshan, Mana Village, Holy Prayags of Alaknanda River</strong>
</li>

<li className='list-disc'>
First, you will visit the Badrinath temple, and start a fresh day with the blessings of Lord Vishnu.
</li>

<li className='list-disc'>
Next, proceed toward Mana village, which is the last Indian village from the border of India and Tibet in the Himalayas.
</li>

<li className='list-disc'>
After that, you will depart for Rudraprayag and have short stopovers at 4 different prayags of river Alaknanda, namely, Vishnuprayag, Nandaprayag, Karnaprayag, and Rudraprayag.
</li>


</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it70.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
   
   
</div>
</details>
</div>

</div>

{/* Day7 */}

<div className='flex gap-x-6 py-4'>

<div>
<button className='bg-[#fff]'>
Day 7
</button>
</div>

<div>
<details>
<summary className='hover:cursor-pointer'>

Rudraprayag to Delhi | Departure
</summary>
<div className='flex px-2 py-2'>
    <div>
        <img
            src='/location.gif'
            alt="search_icon"
            width="20"
            height="30"
            className=' '
        />

    </div>
    <div>
        <p>
          Delhi
        </p>
    </div>
</div>
<div className='px-4 py-2'>
    <li className='list-disc'>
    Total distance: 370 kms | Total time: 9 Hrs
    </li>
    <li className='list-disc'>
    Our spiritual adventure in the hills concludes our hearts filled with the peace of the Dhams we explored. The way to Delhi brings new beginnings, brimming with excitement. Let the warmth of our dham visits stay with us, lighting our way and reminding us of the beauty in every journey.
    </li>
    <li className='list-disc'>
   <strong>Transfer in Swift Dzire, Innova</strong>
    </li>

<li className='list-disc'>
After having a healthy breakfast and completing the check-out formalities, the driver will help you with the transfer from Rudraprayag to a pre-decided spot in Delhi.
</li>







</div>


</details>
</div>

</div>




                                    </div>


                                </div>
                            </>
                        )}

                    </div>
                </div>

                {/* Policy */}
                <div className='flex mt-9 justify-center'>
                    <div className="w-[50vw] card6 sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6  px-4">
                        {state.Fiour && (

                            <>
                                <div>


                                    <div>
                                        <h1 className='text-2xl text-center font-semibold'>
                                        Policies
                                        </h1>
                                    </div>

                                    {/* Confirmation Policy */}
                                    <div className='my-4'>
                                        <div>
                                            <h2 className='text-xl font-semibold'>
                                                Confirmation Policy:
                                            </h2>
                                        </div>

                                        <div className='mx-6 leading-8'>
                                            <li className='list-disc'>
                                                The customer receives a confirmation voucher via email within 24 hours of successful booking.
                                            </li>
                                            <li className='list-disc'>
                                                In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation voucher will be sent via email.
                                            </li>

                                            <li className='list-disc'>
                                                Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.
                                            </li>
                                        </div>

                                    </div>
                                    {/* Cancellation policy */}

                                    <div className='my-4'>
                                        <div>
                                            <h2 className='text-xl font-semibold'>
                                                Cancellation Policy:
                                            </h2>
                                        </div>

                                        <div className='mx-6 leading-8'>
                                            <li className='list-disc'>
                                                If cancellation is made 30 days or more before the date of travel, 25.0% of total booking cost will be charged as cancellation fees.
                                            </li>
                                            <li className='list-disc'>
                                                If cancellation is made between 15 days to 30 days before the date of travel, 50.0% of total booking cost will be charged as cancellation fees.
                                            </li>

                                            <li className='list-disc'>
                                                If cancellation is made within 15 days before the date of travel, total booking cost will be charged as cancellation fees.
                                            </li>
                                        </div>

                                    </div>



                                    {/* Refund policy */}

                                    <div className='my-4'>
                                        <div>
                                            <h2 className='text-xl font-semibold'>
                                                Refund Policy:
                                            </h2>
                                        </div>

                                        <div className='mx-6 leading-8'>
                                            <li className='list-disc'>
                                                The applicable refund amount will be processed within 10 business days.
                                            </li>
                                            <li className='list-disc'>
                                                All applicable refunds will be done in the traveler's wallet.
                                            </li>


                                        </div>

                                    </div>



                                    {/* Payment policy */}


                                    <div className='my-4'>
                                        <div>
                                            <h2 className='text-xl font-semibold'>
                                                Payment Terms Policy :
                                            </h2>
                                        </div>

                                        <div className='mx-6 leading-8'>
                                            <li className='list-disc'>
                                                100.0% of total tour cost will have to be paid 0 days before the date of booking
                                            </li>



                                        </div>

                                    </div>




                                </div>
                            </>
                        )}
                    </div>
                </div>


            </div>









            <div className='m-8 mt-4'>
                <Contact />
            </div>
        </div>
    </div>

</>
  )
}

export default Docontent