"use client"

import React, {useState} from 'react'
import Contact from '../Nainital/Contact';

const Kcontent = () => {
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
                src="/kedarnath.jpg"
                alt="search_icon"
                width="290"
                height="130"
                className=' w-screen h-[80vh] sm:h-screen '
            />
        </div>

        <div>

            <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'>
            Kedarnath Yatra Package
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
                                24,500
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
                                5N / 6D
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
                            } bg-red-500   py-2 px-6 rounded-lg`}
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
                            } bg-red-500   py-2 px-6 rounded-lg`}
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
                                    Kedarnath Yatra Package Highlights
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
                                        Conquer the holy trail of Kedarnath as you set out on this spiritual trek to seek the divine blessings of Lord Shiva.
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
                                        Answer the divine calls of Himalayas and journey to the religious odyssey of Kedarnath amidst the snowscapes of these majestic peaks.
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
                                        Gather in serenity to the spiritual chants and ringing bells for the Ganga aarti at the Triveni Ghat in Rishikesh.
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
                                        Discover the legendary tales of Ramayana as you cross the Ram and Laxman Jhula above the sacred waters of Ganga.
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
                                        The Kedarnath Yatra Package is an extraordinary journey that connects with the sacred, finds inner peace, and embraces the breathtaking beauty of the Himalayas. Our journey kicks off in Delhi, the capital city, and we will venture into the tranquil landscapes of Uttarakhand and make way for Guptkashi, a serene town in the majestic Himalayan mountains. However, the prime destination is Kedarnath, the land of Lord Shiva, nestled amidst the towering peaks of the Himalayas. Here, you will be greeted by snow-clad mountains and pristine vistas, and once you reach the ambiance, it will touch your heart. The Kedarnath Yatra Package is a transformative journey and a chance to experience the ultimate beauty in a single breath.
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
                                                Delhi-Guptakashi-Kedarnath-Delhi
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
                                                5 Days & 4 Nights 
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
                                     Kedarnath Yatra Itinerary
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

                                                    Delhi to Haridwar | Seek blessings at the evening Ganga Aarti
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
                                                Haridwar
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Total distance: 250 kms | Total time: 6 Hrs
                                                        </li>
                                                        <li className='list-disc'>
                                                        The journey to Haridwar unfolds like a storybook of changing landscapes, offering travelers a visual feast of rural vistas and rolling hills. As you traverse the winding roads, anticipation fills the air, leading to the spiritual haven of Haridwar. Upon arrival, the city's serene ambiance sets the stage for the evening Ganga Aarti. The melodic chants, the fragrance of incense, and the soft glow of oil lamps create a profoundly divine experience.
                                                        </li>
                                                        
                                                       <li className='list-disc'>
                                                      <strong> Transfer in Swift Dzire, Innova</strong>


                                                        </li>      

                                                        <li className='list-disc'>

                                                        The driver will pick you up from Delhi and drop you off at your pre-booked hotel in Haridwar.
                                                            </li>     
                                                                     <li className='list-disc'>
                                                                     After completing the check-in formalities, the rest day is at leisure.
                                                                     </li>

                                                                     <li>
                                                                        <strong>Activity: Haridwar Local | Ganga Arti & Local Market</strong>
                                                                     </li>
                                                                       
                                                                       <li className='list-disc'>
                                                                       After check-in rest for some time, enjoy the divine Ganga aarti, and explore the local markets (on your own).
                                                                       </li>

                                                                                      </div>

                                                                                      <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it71.avif'
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
                                                        Early morning after having a healthy breakfast, the driver will help you with the transfer from Haridwar to Guptakashi.
                                                        </li>
                                                        <li className='list-disc'>
                                                        As you reach Guptakashi complete the check-in formalities and in the evening explore the local Mandirs and Markets (on your own).
                                                        </li>

                                                        <li >
                                                       <strong>Activity: En route Sightseeing | Witness the Confluence of Alaknanda and Bhagirathi Rivers</strong>
                                                        </li>

                                                        <li className='list-disc'>
                                                        En route have a small stopover at the Sangam of Alaknanda and Bhagirathi Rivers and witness the birth of the sacred river Ganga and feel the divinity.
                                                        </li>  

                                                      
                                                            
                                                                        </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it72.avif'
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

                                                       
                                                    Guptkashi to Kedarnath | Conquer the Trek To A Spiritual Odyssey
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
                                                    Kedarnath to Guptkashi | Return From The Holy Abode Of Lord Shiva
                                                  
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

Guptkashi to Rishikesh | Explore the Yoga Capital of the World
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
    Experience a profound journey to Rishikesh, where spirituality intertwines with adventure. Explore iconic sites like Laxman Jhula and Ram Jhula, resonating with ancient legends. Immerse in nature at Robber's Cave, then find solace by the serene Ganges. Witness the ethereal Ganga Aarti, a spiritual finale. Discover Rishikesh's essence, a harmonious blend of ancient wisdom and natural beauty.
    </li>
    <li className='list-disc'>
    <strong>Transfer in Swift Dzire, Innova</strong>
    </li>

<li className='list-disc'>
After having a healthy breakfast, the driver will pick you up from the hotel and drop you off at the hotel in Rishikesh.
</li>

<li className='list-disc'>
After completing the check-in formalities, the driver will take you to the local sightseeing of Rishikesh.
</li>

<li className='list-disc'>
Post-sightseeing, get transferred to your hotel for an overnight stay and dinner.
</li>

<li className='list-disc'>
    <strong>Activity: Rishikesh Sightseeing | Laxman Jhula, Ram Jhula, Cafe Hopping & Leisure at Banks of Ganga, Ganga Aarti at Triveni Ghat</strong>
</li>

<li className='list-disc'>
You will first visit the Laxman Jhula, the place from where Lord Laxman crossed the Ganga River.
</li>

<li className='list-disc'>
Next, you will visit Ram Jhula.
</li>

<li className='list-disc'>
After that, feel the divinity of the atmosphere as you witness the Ganga Arti at Triveni Ghat.
</li>




</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it73.avif'
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

Departure | Bid Farewell

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
    Total distance: 250 kms | Total time: 6 Hrs
    </li>
    <li className='list-disc'>
    Our spiritual adventure in the hills concludes our hearts filled with the peace of the Dhams we explored. The way to Delhi brings new beginnings, brimming with excitement. Let the warmth of our dham visits stay with us, lighting our way and reminding us of the beauty in every journey.
    </li>
    <li className='list-disc'>
   <strong>Transfer in Swift Dzire, Innova</strong>
    </li>

<li className='list-disc'>
After having a healthy breakfast and completing the check-out formalities, the driver will help you with the transfer from Rishikesh to a pre-decided spot in Delhi.
</li>








</div>


</details>
</div>

</div>

{/* Day7 */}






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

export default Kcontent