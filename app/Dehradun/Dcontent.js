"use client"

import React, {useState} from 'react'
import Contact from '../Nainital/Contact';

const Dcontent = () => {

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
                src="/mussoorie2.jpg"
                alt="search_icon"
                width="290"
                height="130"
                className=' w-screen h-[80vh] sm:h-screen '
            />
        </div>

        <div>

            <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'>
            Dehradun Mussoorie Rishikesh | FREE Excursion to Tehri Dam
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
                                22,700
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
                                Dehradun
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
                                    Dehradun Mussoorie Rishikesh | FREE Excursion to Tehri Dam Highlights
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
                                        Boost your adrenaline while indulging in river rafting and feel the excitement of tumbling down the white waters with a perfect backdrop of Kumaon Mountains.
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
                                        Stay in a comfortable & hygienic camps tucked away in the midst of deodar and oak forest with the fascinating view of the valley.
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
                                        Trek to Kaudia Forest amidst the dense forest that opens up to breathtaking views of steep hills and valleys as you walk through with natural springs gurgling along the sides.
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
                                        Spend your day while enjoying thrilling water sports in Tehri Lake like Jet Skiing, Flyboarding, Knee Boarding, Banana Ride, Motorboating, Canoeing, Rowing and Hot-air-ballooning.
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
                                        Give way to the adventure enthusiast in you in the beautiful state of Uttarakhand that has everything your heart desires. From mighty mountains, majestic rivers, unbeaten paths to the sprawling alpine meadows and the snow-clad gradients in the rugged topography which opens a doorway to the finest adventures. Undoubtedly, the state is an ideal adventure tourism destination in India as it beckons some adventure activities that offer spine-chilling and distinct experiences rarely found anywhere else.
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
                                                Dehradun - Mussoorie - Dhanaulti - Kanatal - Chamba - Rishikesh 
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
                                                Dehradhun
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
                                                Rishikesh
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
                                            Comfortable and sanitized vehicle (Sedan/ SUV depending on group size) for sightseeing on all days as per the itinerary.
                                            </li>
                                            <li className='list-disc'>
                                            Toll tax and parking. 

                                            </li>

                                            <li className='list-disc'>
                                            Accommodation in Camps/ Homestays.
                                            </li>
                                            <li className='list-disc'>
                                            Breakfast, Lunch and Dinner (North Indian Cuisine) as per itinerary. 
                                            </li>
                                            <li className='list-disc'>
                                            Experienced Driver cum Guide.
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
                                            Stroll around the streets of the beautiful Chanderi Town.
                                            </li>
                                            <li className='list-disc'>
                                            Grab a bite at Apple Orchard Resort – The Glasshouse Restaurant.
                                            </li>

                                            <li className='list-disc'>
                                            Khajjiar Lake – For Tranquil Vacay.
                                            </li>
                                            <li className='list-disc'>
                                            Chamera Lake – Admire The Scenic Views.
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
    Nearest Airport: Jolly Grant Airport in Dehradun is 37 km away from Haridwar, whereas Indira Gandhi International Airport in Delhi is 223 km away. You can reach Haridwar from these two airports via bus, taxi or train.
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
                                        Dehradun Mussoorie Rishikesh | FREE Excursion to Tehri Dam Itinerary
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

                                                    Arrival in Dehradun | Transfers from Dehradun to Dhanaulti | Witness the charm of this hill station
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
                                                      Dehradun
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Get ready to have an experience you will cherish for eternity.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Arrive in Dehradun and meet our representative who will drive you to Dhanaulti, a beautiful hill station offers tranquil vistas and perched at an elevation of 2286 meters above sea level.

                                                        </li>
                                                        
                                                       <li className='list-disc'>
                                                       It will take around 1.5 hours to reach Dhanaulti.

                                                        </li>      

                                                        <li className='list-disc'>

                                                        Stroll around the place and mesmerise the breathtaking beauty that it holds.
                                                            </li>     
                                                            <li className='list-disc'>
                                                            Overnight stay in Dhanaulti.
                                                                
                                                                </li>           
                                                                                      </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it52.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>

                                                        <div>
                                                            <img
                                                                src='/it53.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>

                                                        <div>
                                                            <img
                                                                src='/it54.avif'
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


                                                    Dhanaulti – Kanatal | A day filled with adventure
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
                                                            Kanatal
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Wake up with a delicious breakfast and get ready for a wonderful drive to Kanatal.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Kanatal is a quaint hill station enveloped amidst apple orchards and offers a glimpse of the rustic life.
                                                        </li>
                                                        <li className='list-disc'>
                                                        After arrival, proceed towards the campsite and witness the charm of the surroundings and experience a wonderful stay experience in the laps of nature.
                                                        </li>
                                                        <li className='list-disc'>
                                                        After a while, indulge in various thrilling activities like rappelling and climbing activities to feel the adventure deep within.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Overnight stay in camps in Kanatal.
                                                        </li>
                                                            
                                                                        </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it55.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it56.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it57.avif'
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

                                                       
                                                    A day filled with thrill | Trek to the beautiful Kaudia Forest
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
                                                       Kanatal
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Wake up with an amazing breakfast and get ready for an adventurous day.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Our representative will take you to have some adventurous trekking experience to Kaudia Forest.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Trek to the Kaudia Forest is 5 km and it will take around 1.5 hours to reach.
                                                        </li>
                                                        <li className='list-disc'>
                                                        The trail takes you to the forest offers grand views with several natural springs.
                                                        </li>
                                                        <li className='list-disc'>
                                                        You can also enjoy a safari inside the dense forest.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Descend down after a beautiful experience.
                                                        </li>

                                                        <li className='list-disc'>
                                                        Overnight stay at the campsite in Kanatal.
                                                        </li>

                                                      

                                       
                                                    </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it58.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it59.avif'
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
                                                    Kanatal - Chamba | Excursion to Tehri Lake Dam | Indulge in various water sports
                                                  
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
                                                               Chamba
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Wake up with a delicious breakfast and an amazing view from the campsite.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Our representative will take you to Chamba, a picturesque town that offers breathtaking views of the mighty peaks, mist-covered deep gorges, and verdant valleys and so much more.
                                                        </li>
                                                        <li className='list-disc'>
                                                        It will take around half an hour to reach the destination.
                                                        </li>

   <li className='list-disc'>
   After arrival, relish some time at leisure, you can stroll around and witness the charm of this beautiful place.
   </li>

   <li className='list-disc'>
   After a while, get ready for an excursion to Tehri Dam which is around 60 KM long and enjoy various water-based activities like wake surfing, banana ride, or take a ride in a motorboat / Jetski.
   </li>

   <li className='list-disc'>
   Return to camp in the evening.
   </li>

   <li className='list-disc'>
   Enjoy bonfire and evening snacks.
   </li>

   <li className='list-disc'>
   Overnight at camp.
   </li>

  
                                                    </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it60.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it61.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="40"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it62.avif'
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

Chamba to Rishikesh | Welcome to the Yoga Capital of India
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
    Wake up with a delicious breakfast and an amazing view from the campsite.
    </li>
    <li className='list-disc'>
    Our representative will take you to the yoga capital of India, Rishikesh. It sits gracefully near the foot of the mighty Himalayas and opens a doorway to spirituality and adventure. 
    </li>
    <li className='list-disc'>
    Proceed towards the Shivpuri campsite and relish your day at leisure.
    </li>

<li className='list-disc'>
Relax at the camp and enjoy evening snacks with a bonfire.
</li>

<li className='list-disc'>
Overnight stay in camps.
</li>






</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it63.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/rishikesh.jpg'
            alt="search_icon"
            width="160"
            height="40"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it64.avif'
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

Enjoy a thrilling adventure of Rafting | Departure | Take a bag full of memories
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
    Wake up with a delicious breakfast and an amazing view from the campsite.
    </li>
    <li className='list-disc'>
    Indulge in a 16 KM rafting in the Ganges encountering grade 2 and 3 rapids and feel the adventure deep within your bones.
    </li>
    <li className='list-disc'>
    Add some more fun to your adventure with cliff jumping and body surfing.
    </li>

<li className='list-disc'>
Reach Rishikesh and get dropped at the railway station/ bus stand.
</li>

<li className='list-disc'>
Take a bag full of memories to cherish for eternity.
</li>






</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it65.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it66.avif'
            alt="search_icon"
            width="160"
            height="40"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it48.avif'
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
                                        Dehradun Mussoorie Rishikesh | FREE Excursion to Tehri Dam  Policies
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

export default Dcontent