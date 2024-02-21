"use client"

import React, { useState } from 'react'
import Contact from '../Nainital/Contact';

const Gcontent = () => {
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
                        Delhi To Kedarnath Group Trip | FREE Sangam Excursion Highlights
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
                                        16,800
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
                                        New Delhi
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



                        <div className=' flex mt-9 justify-center'>

                            <div className="w-[40vw] sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 card6  ">
                                {state.Oine && (
                                    <>

                                        <div>
                                            <h1 className='text-center font-semibold text-2xl sm:text-xl py-4'>
                                                Delhi To Kedarnath Group Trip | FREE Sangam Excursion Highlights
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
                                                    Feel spiritual and receive the blessing of positive divine at Kedarnath Temple and perform the rituals.
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
                                                    Marvel at the beautiful location of Kedarnath Temple and behold the captivating views it has to offer.

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
                                                    Experience and get soaked in the unforgettable aerial views Of Kedarnath that is truly mesmerizing.
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
                                                    Discover some of the key attractions of the Rishikesh, that attracts tons of tourist throughout the year.
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
                                                    Vasuki Tal Lake, A high glacial lake situated at an impressive altitude of 14,200 feet above sea level in Kedarnath.
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
                                                    Indulge in world famous "Maha aarti" starting with the chanting of bhajans, beating drums, bells and diyas floating on Triveni Ghat at Rishikesh.
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
                                                    Seek blessings from Bhimshila, a massive rock that rolled down and parked it self right behind the temple to protect it from the floods in 2013.
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
                                                    Settled on a level surrounded by high snow-shrouded peaks, Kedarnath Temple is one of the holiest places in India committed to the divine Shiva as the "Ruler of Kedar Khand". It doesn't make any difference if you are a traveler or explorer, a visit to Kedarnath is continually energizing and entrancing for individuals of all ages gatherings. It sits pretty at a statue of 3,900 meters above ocean level and disregards the rich green valleys of the Garhwal Himalayan Range. The best approach to Kedarnath, a modest community, is controlled by the Mother Goddess in her full sprout. Commanding notice as a result of the well-known Kedarnath Temple, the town is situated on the shores of River Mandakini. The ancient temples and the beautiful structures of India have catered to visitors from all over the world. Be it the holy vibes or the challenging peaks of the Himalayas, the diversity of experiences found here cannot be seen anywhere else.
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
                                                        Delhi - Haridwar - Guptkashi - Kedarnath - Guptkashi - Rishikesh - Delhi
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
                                                    Pick up and drop as per your flight timings.
                                                    </li>
                                                    <li className='list-disc'>
                                                    Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary.

                                                    </li>

                                                    <li className='list-disc'>
                                                    Stay on a double and triple-sharing basis in hygienic and sanitized hotels.
                                                    </li>
                                                    <li className='list-disc'>
                                                    Buffet breakfast as per the itinerary.
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
                                                    We Recommended:
                                                </h2>
                                            </div>

                                            <div className='px-6 py-4'>

                                                <div>
                                                    <li className='list-disc'>
                                                    Pay respects at the Guri Kund temple on your way to Kedarnath.
                                                    </li>
                                                    <li className='list-disc'>
                                                    Visit Gandhi Sarovar or Chorabari Lake located near Kedarnath.
                                                    </li>

                                                    <li className='list-disc'>
                                                    Visit Triyuginarayan Temple loctaed in Rudraparag.
                                                    </li>
                                                    <li className='list-disc'>
                                                    Visit Rudra Cave, an underground cave construed for meditation.
                                                    </li>
                                                    <li className='list-disc'>
                                                    Pay a visit to Gauri Kund Temple.
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
                                                   <p>
                                                   Delhi is well connected with domestic and international flights, to all the major cities within and outside India. The railway network connects Delhi to all major and, nearly, all minor destinations in India. The three important railway stations of Delhi are New Delhi Railway Station, Old Delhi Railway Station, and Hazrat Nizamuddin Railway Station. Also well connected, by a network of roads and national highways, with all the major cities in India.
                                                   </p>

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
                                                Delhi To Kedarnath Group Trip | FREE Sangam Excursion Itinerary
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

                                                            Delhi - Haridwar | Arrival
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
                                                                Meet up at the departure point of the vehicle in Delhi that will be communicated to you in advance.
                                                                </li>
                                                                <li className='list-disc'>
                                                                Overnight Journey towards Haridwar.
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


                                                            Haridwar - Guptkashi | Drive through Mandakini river
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
                                                                      Haridwar
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='px-4 py-2'>
                                                                <li className='list-disc'>
                                                                Reach Haridwar in the Morning, Where you can rest for a while before starting your onward journey to Guptkashi.
                                                                </li>
                                                                <li className='list-disc'>
                                                                At around 10:30 AM proceed towards Guptkashi, On the way take a short stopover at Devprayag where you can witness the Holy Sangam of Bhagirathi and Alaknanda that together form Ganga.
                                                                </li>
                                                                <li className='list-disc'>
                                                                After this, You'll get back on the way to Guptkashi witnessing some of the most Beautiful Landscapes.
                                                                </li>
                                                                <li className='list-disc'>
                                                                On reaching Guptkashi, Check-In into the Hotel.
                                                                </li>
                                                                <li className='list-disc'>
                                                                Overnight stay at Guptkashi.
                                                                </li>
         

                                                                  </div>

                                                            <div className='flex gap-x-2 mx-4' >
                                                                <div>
                                                                    <img
                                                                        src='/it21.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="30"
                                                                        className=' rounded-lg'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src='/it22.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="30"
                                                                        className=' rounded-lg'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src='/it23.avif'
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

                                                               
Guptakashi - Gaurikund - Kedarnath | Trek amidst the beautiful trail to Kedarnath Temple
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
                                                                Wake up early and have a delicious breakfast.
                                                                </li>
                                                                <li className='list-disc'>
                                                                Head towards Sonprayag where your trekking to Kedarnath will start.
                                                                </li>
                                                                <li className='list-disc'>
                                                                Have a delicious breakfast and get transferred from Guptkashi to Sonprayag.
                                                                </li>
                                                                <li className='list-disc'>
                                                                Once we reach Sonprayag, we have to walk to the Government Union taxi stand, to reach Gaurikund. (Walk for 1 Km as no private vehicles are allowed in Gaurikund).
                                                                </li>
                                                                <li className='list-disc'>
                                                                Reach Gaurikund, Start the trek to the Kedarnath from Gaurikund.
                                                                </li>
                                                                <li className='list-disc'>
                                                                You can take ponies or palanquins for the journey to make it slightly on a comfortable side. (Own Expense).
                                                                </li>

                                                                <li className='list-disc'>
                                                                Trek through the beautiful valley and river stream.
                                                                </li>

                                                                <li className='list-disc'>
                                                                You can take a lunch stop in between and continue the journey, you will get to see the Kedarnath Temple, situated right at the center of the valley with mountains.
                                                                </li>

                                                                <li className='list-disc'>
                                                                On reaching Kedarnath, you'll witness the whole valley is filled with the sound of ringing bells and prayers going on everywhere this will surely provide relief to your soul.
                                                                </li>

                                                                <li className='list-disc'>
                                                                Overnight stay in Kedarnath.
                                                                </li>
                                                            </div>

                                                            <div className='flex gap-x-2 mx-4' >
                                                                <div>
                                                                    <img
                                                                        src='/it24.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="30"
                                                                        className=' rounded-lg'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src='/it25.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="30"
                                                                        className=' rounded-lg'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src='/it26.avif'
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

                                                            Kedarnath - Rishikesh | Trekking downwards witnessing the valleys
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
                                                                Wake up early and have a delicious breakfast.
                                                                </li>
                                                                <li className='list-disc'>
                                                                Head towards Gaurikund from Kedarnath, you can take ponies or palanquins for the journey to make it slightly on a comfortable side. (Own Expense).
                                                                </li>
                                                                <li className='list-disc'>
                                                                Once you reach Gaurikund from there will proceed to Sonprayag by a government Taxi.
                                                                </li>

           <li className='list-disc'>
           Arrive at Sonprayag from where you'll go to Guptkashi/Rampur (Walk for 1 Km is required at Sonpragyag as no private vehicles are allowed after a certain point)
           </li>

           <li className='list-disc'>
           You'll then start traveling back to Rishikesh.
           </li>

           <li className='list-disc'>
           On arrival at Rishikesh, complete the check-in formalities, freshen up, and head over to explore Rishikesh
           </li>

           <li className='list-disc'>
           If time permits you can explore colorful markets, Ram Jhula & Laxman Jhula.
           </li>

           <li className='list-disc'>
           Have dinner at Rishikesh & take a rest.
           </li>

           <li className='list-disc'>
           Overnight Stay at Rishikesh.
           </li>


                                                            </div>

                                                            <div className='flex gap-x-2 mx-4' >
                                                                <div>
                                                                    <img
                                                                        src='/it27.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="30"
                                                                        className=' rounded-lg'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src='/it28.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="40"
                                                                        className=' rounded-lg'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src='/it29.avif'
                                                                        alt="search_icon"
                                                                        width="160"
                                                                        height="10"
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

        Rishikesh - Delhi
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
                    Rishikesh
                </p>
            </div>
        </div>
        <div className='px-4 py-2'>
            <li className='list-disc'>
            Wake up in the morning & get ready to experience the thrill of rafting through the cold waters of Ganga.
            </li>
            <li className='list-disc'>
            Get transferred to the start point for Rafting.
            </li>
            <li className='list-disc'>
            Experience a round of enthralling rapids hitting your face and body whilst you drift by curves in the flowing river is a memory to be cherished, take a rest stop at the maggie point & go for cliff jumping.
            </li>

<li className='list-disc'>
Get ready for the adrenaline rush & the excitement experienced while riding & tumbling down the white waters of a fast-flowing river while rafting & reach Neem Beach.
</li>

<li className='list-disc'>
Get transferred to the hotel where you can freshen up &have your delicious breakfast.
</li>

<li className='list-disc'>
Complete the check-out formalities of the hotel & depart for Delhi.
</li>

<li className='list-disc'>
Conclude the trip with glorious memories after reaching Delhi.
</li>




        </div>

        <div className='flex gap-x-2 mx-4' >
            <div>
                <img
                    src='/it30.avif'
                    alt="search_icon"
                    width="160"
                    height="30"
                    className=' rounded-lg'
                />
            </div>
            <div>
                <img
                    src='/it31.avif'
                    alt="search_icon"
                    width="160"
                    height="40"
                    className=' rounded-lg'
                />
            </div>
            <div>
                <img
                    src='/it32.avif'
                    alt="search_icon"
                    width="160"
                    height="10"
                    className=' rounded-lg'
                />
            </div>
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
                                                    Nainital with Jim Corbett from Delhi | FREE Jeep Safari Policies
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

export default Gcontent