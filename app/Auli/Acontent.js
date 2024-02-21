"use client"

import React, {useState} from 'react'
import Contact from '../Nainital/Contact';

const Acontent = () => {
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
                src="/auli2.jpg"
                alt="search_icon"
                width="290"
                height="130"
                className=' w-screen h-[80vh] sm:h-screen '
            />
        </div>

        <div>

            <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'>
            Auli Nainital Corbett Mussoorie - Couple Special
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
                                35,500
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
                                Nainital
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
                            } bg-red-500  py-2 px-6 rounded-lg`}
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
                                    Auli Nainital Corbett Mussoorie - Couple Special Highlights
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
                                        Enjoy an adventurous safari experience as you go deep into the wilderness and get a chance to catch a glimpse of Royal Bengal Tigers in their natural habitat.
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
                                        Revel in the beautiful Corbett Waterfalls embellished with scenic beauty and cuddled up cosily amidst the lush green forests.
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
                                        Visit the heart of Nainital - Naini Lake and admire the view of standing tall seven hills mirrored in the lake.
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
                                        Witness the beauty of Mall Road running parallel to the Naini Lake which serves as a prime location for food, culture and shopping.
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
                                        Ditch your vehicle and opt a ropeway to Auli from Joshimath to enjoy the bird's eye of the place.
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
                                        Wake up your inner snow animal for Auli offers a Ski Resort for the amazing experience of skiing.
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
                                        The surreal landscape that comprises lofty Himalayas, glistening streams, eye-catching meadows, imposing glaciers and surreal lakes, all make Uttarakhand a coveted destination in Indian Himalayas. From gliding your fingers in the chilly water of the shimmering Naini lake to snuggled in the Gharwal Himalaya. Auli looks like an impeccable fairy tale land where you can enjoy adventure activities to your heart's content.
                                        </p>
                                    </div>
                                     
                                     <div className='my-8'>
                                        <p>
                                        Jim Corbett a perfect place for wildlife lovers and nature enthusiasts. Refresh yourself by the cascading Corbett waterfall backed with the chirping of birds towards the end of the jeep safari in the largest and the oldest tiger reserve.
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
                                                Delhi - Jim Corbett - Nainital - Kausani - Joshimath - Auli- Rishikesh - Delhi
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
                                                7 Days & 6 Nights 
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
                                            Comfortable and sanitized vehicle (Sedan/ SUV depending on group size) for sightseeing on all days as per the itinerary.
                                            </li>
                                            <li className='list-disc'>
                                            Toll tax and parking. 

                                            </li>

                                            <li className='list-disc'>
                                            Driver Allowance. 
                                            </li>
                                            <li className='list-disc'>
                                            Accommodation in Standard, Deluxe and Luxury Properties.
                                            </li>
                                            <li className='list-disc'>
                                            Breakfast and Dinner (North Indian Cuisine) at all hotels as per itinerary. 
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
                                            Short Trek to Clouds End - the highest point in Mussoorie.
                                            </li>
                                            <li className='list-disc'>
                                            Breathtaking view from Gun hill point via ropeway in Mussoorie.
                                            </li>

                                            <li className='list-disc'>
                                            Boating in Naini Lake.
                                            </li>
                                            <li className='list-disc'>
                                            Camping, River rafting and Bungee jumping in Rishikesh.
                                            </li>
                                            <li className='list-disc'>
                                            The famous Ganga Aarti and holy dip at Triveni Ghat in Rishikesh.
                                            </li>

                                            <li className='list-disc'>
                                            Visit the beautiful 66ft high Corbett Waterfalls.
                                            </li>

                                            <li className='list-disc'>
                                            Wildlife safari and River rafting in Jim Corbett National Park.
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
   Delhi is well connected with domestic and international flights. All the major airlines have their flights operating from Indira Gandhi International Airport in New Delhi.
 </li>
 <li  className='list-disc'>
   <strong>By Rail:</strong>
   The railway network connects Delhi to all major and, mostly, all the minor destinations in India. The three important railway stations of Delhi are New Delhi Railway Station, Old Delhi Railway Station and Hazrat Nizamuddin Railway Station.
 </li>

 <li className='list-disc'>
   <strong>By Road: </strong>
   Delhi is well connected by a network of roads and national highways with all the major cities in India. Both the government and private transport providers provide frequent bus services. One can also get government as well as private taxis here.
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
                                        Auli Nainital Corbett Mussoorie - Couple Special Itinerary
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

                                                    Delhi to Corbett | Start your most awaited journey
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
                                                             Corbett
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Your amazing trip starts from Delhi.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Head to the pickup point in Delhi from where a representative will help you get transferred to Corbett.
                                                        </li>
                                                        
                                                       <li className='list-disc'>
                                                       Corbett houses one of the oldest wildlife sanctuaries in India.

                                                        </li>      

                                                        <li className='list-disc'>

                                                        Travel through the rich greenery to reach Corbett, where on reaching you'll directly proceed to check-in to the hotel and take some rest.
                                                            </li>     
                                                            <li className='list-disc'>
                                                            Later, you can proceed to visit the Girija Devi Temple that's built on a rock in the middle of the Kosi River.
                                                                
                                                                </li>           
                                                              <li className='list-disc'>
                                                              In the evening, travel back to the hotel.
                                                              </li>

                                                              <li className='list-disc'>
                                                              Overnight stay at the hotel in Corbett.
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


                                                    Corbett Safari and Transfer to Nainital | Get Face to Face with the Royal Bengal Tigers
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
                                                           Nainital
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Wake up early in the morning and after breakfast, you can proceed to the Corbett Office which is the starting point of safari.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Here, you can board the canter/jeep that will be taking you through the inner stretches of Corbett National Park.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Hold on tight as your vehicle jumps and dips, twists and turns when passing through the narrow clearings surrounded by lush forests.
                                                        </li>
                                                        <li className='list-disc'>
                                                        At the same time keep an eye out to spot a tiger playing with its cubs in the green landscapes.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Keep the camera ready to capture beautiful photographs of the majestic Bengal Tigers.
                                                        </li>
                                                            
                                                            <li className='list-disc'>
                                                            Don’t be fixated only on the tigers though, as there is a lot more beauty to explore like Elephants, Deers, Chitals, Leopards, Black Bears, etc.

                                                            </li>

                                                            <li className='list-disc'>
                                                            Once you are done exploring the beauty of Corbett National Park, the canter/jeep will take you back to Corbett Office from where you can return to the hotel.
                                                            </li>
                                                                

                                                                <li className='list-disc'>
                                                                After having some rest in the hotel, check out and proceed to Nainital.
                                                                </li>

                                                                <li className='list-disc'>
                                                                On your way to Nainital, you can take a stopover at the beautiful Corbett Waterfall which is surrounded by dense teak wood forest.
                                                                </li>

                                                                <li className='list-disc'>
                                                                Spend some quality time listening to the music of birds chirping and the gushing waters.
                                                                </li>

                                                                <li className='list-disc'>
                                                                After experiencing Corbett Falls, you can continue your journey towards Nainital where on reaching you can directly check in to the hotel.
                                                                </li>

                                                                <li className='list-disc'>
                                                                In the evening, You can stroll through the various lanes of Mall Road and can also enjoy a beautiful sunset while boating on Naini Lake.
                                                                </li>

                                                                <li className='list-disc'>
                                                                Later you can return back to your hotel.
                                                                </li>

                                                                <li className='list-disc'>
                                                                Overnight stay at the hotel in Nainital.
                                                                </li>
                                                          </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it34.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it35.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it36.avif'
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

                                                       
                                                    Nainital Sightseeing & Transfer to Kausani | Explore the 'Queen of Hills'
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
                                                                Kausani
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Wake up to a beautiful morning and after breakfast, you can check out from the hotel.
                                                        </li>
                                                        <li className='list-disc'>
                                                        You can then visit the famous Naina Devi Temple, one of the shakti-peeths, where according to a popular belief, the eyes of Goddess Sati fell after her self-immolation.
                                                        </li>
                                                        <li className='list-disc'>
                                                        You can also spend some time buying souvenirs for your loved ones before departing towards Kausani.
                                                        </li>
                                                        <li className='list-disc'>
                                                        On reaching Kausani, you can directly head to check in to the hotel.
                                                        </li>
                                                        <li className='list-disc'>
                                                        The rest of the day is at leisure and you are free to explore the beauty of this beautiful hill station located in the Kumaon Hills.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Later in the evening, you can return back to your hotel.
                                                        </li>

                                                        <li className='list-disc'>
                                                        Overnight stay at the hotel in Kausani.
                                                        </li>

                                                      

                                       
                                                    </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it37.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it38.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it39.avif'
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

                                                    Sightseeing in Kausani & Transfer to Joshimath | Travel to the Gateway of Trekking Expeditions
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
                                                                Joshimath
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <li className='list-disc'>
                                                        Wake up early in the morning and visit the Kausani Tea Estates.
                                                        </li>
                                                        <li className='list-disc'>
                                                        Relish a refreshing cup of hot flavourful aromatic tea as you take a walk through the scenic estates.
                                                        </li>
                                                        <li className='list-disc'>
                                                        You can then proceed back to the hotel where you can enjoy a healthy breakfast.
                                                        </li>

   <li className='list-disc'>
   Once you are ready, head out to visit the Anasakti Ashram.
   </li>

   <li className='list-disc'>
   Also known as the Gandhi Ashram, Anasakti Ashram is the place where Mahatma Gandhi wrote one of his finest literary works, Anasakti Yog.
   </li>

   <li className='list-disc'>
   Then you can also visit Rudradhari Falls and Caves located in the thick pine forest.
   </li>

   <li className='list-disc'>
   Get ready to embark on your journey towards Joshimath.
   </li>

   <li className='list-disc'>
   On your way to Joshimath, take a short stopover at Devprayag to witness the Holy Sangam where Bhagirathi and Alaknanda River come together to form Ganga. 
   </li>

   <li className='list-disc'>
   Pass through Rudraprayag and Karnaprayag to ultimately reach Joshimath. 
   </li>

<li className='list-disc'>
Upon reaching, check-in to the hotel and spend the rest of the day at leisure. 
</li>
<li className='list-disc'>
Overnight stay at the hotel in Joshimath. 
</li>
                                                    </div>

                                                    <div className='flex gap-x-2 mx-4' >
                                                        <div>
                                                            <img
                                                                src='/it40.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="30"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it41.avif'
                                                                alt="search_icon"
                                                                width="160"
                                                                height="40"
                                                                className=' rounded-lg'
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src='/it42.avif'
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

Auli Sightseeing | Explore the Famous Ski Destination of India
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
            Joshimath
        </p>
    </div>
</div>
<div className='px-4 py-2'>
    <li className='list-disc'>
    Wake up early to a beautiful morning, have a healthy breakfast and get ready to embark on a full-day scenic tour to Auli. 
    </li>
    <li className='list-disc'>
    You can choose to drive to Auli by road or can also take the 4 KM long Gondola Ride from Joshimath to Auli that greets you with a magnificent panorama of the snow-capped Himalayas. 
    </li>
    <li className='list-disc'>
    On reaching Auli, you can spend time walking along the beautiful Auli Lake and feel the refreshing breeze or indulge in various adventurous activities like skiing, sledging, etc. 
    </li>

<li className='list-disc'>
While in Auli, you can also choose to take a short trek up to the Gorson Bugyal that lies at an altitude of 3056 mts or further till Chattarkund, located in the center of a dense forest, which is famous for its sweet water. 
</li>

<li className='list-disc'>
In the evening, return to Joshimath for an overnight stay in a hotel and enjoy the night.
</li>






</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it43.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it44.avif'
            alt="search_icon"
            width="160"
            height="40"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it45.avif'
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

Auli to Rishikesh | Explore the “Yoga Capital of India"
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
    Have a delicious breakfast and check out from the hotel.
    </li>
    <li className='list-disc'>
    You can then set off on your journey towards Rishikesh and bid adieu to the majestic Nanda Devi Parbat. 
    </li>
    <li className='list-disc'>
    Upon reaching, check-in to the hotel and take some rest.
    </li>

<li className='list-disc'>
In the evening, if time allows, don’t forget to feel the spiritual vibes during the holy Ganga Aarti at Triveni Ghat in Rishikesh which will add up to your lively evening.
</li>

<li className='list-disc'>
Return back to the hotel for an overnight stay in Rishikesh. 
</li>






</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it46.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it47.avif'
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

{/* Day 7 */}

<div className='flex gap-x-6 py-4'>

<div>
<button className='bg-[#fff]'>
Day 7
</button>
</div>

<div>
<details>
<summary className='hover:cursor-pointer'>

Rishikesh to Delhi | Time to Head Back Home with a Plethora of Memories
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
    Wake up in the morning to the sounds of holy chants all around you.
    </li>
    <li className='list-disc'>
    Have a delicious breakfast and check out from the hotel.
    </li>
    <li className='list-disc'>
    You can visit Laxman Jhula and Ram Jhula and admire the scenic beauty of Rishikesh before leaving the spiritual city.
    </li>

<li className='list-disc'>
You can then set off on your journey back to Delhi.
</li>

<li className='list-disc'>
Conclude the tour with beautiful memories on reaching your desired destination in Delhi for your onward journey. 
</li>






</div>

<div className='flex gap-x-2 mx-4' >
    <div>
        <img
            src='/it49.avif'
            alt="search_icon"
            width="160"
            height="30"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it50.avif'
            alt="search_icon"
            width="160"
            height="40"
            className=' rounded-lg'
        />
    </div>
    <div>
        <img
            src='/it51.avif'
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
                                        Auli Nainital Corbett Mussoorie - Couple Special  Policies
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

export default Acontent