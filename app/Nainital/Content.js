"use client"

import React, {useState, useEffect} from 'react'
import Contact from './Contact';

import Aos from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
		Aos.init();
	}, []);

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
							src="/nainital.jpg"
							alt="search_icon"
							width="290"
							height="130"
                            className=' w-screen h-[70vh] '
						/>
       </div>

  <div>

    <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'
    data-aos="fade-down">
      Nainital With Jim Corbett from Delhi
    </h1>
  </div>

      <div className='flex lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-wrap'>

        <div className='w-[60vw] mt-10 sm:w-[100vw] lg:w-[100vw]'>
     

          <div className='flex justify-center gap-x-6 lg:gap-x-10 lg:flex lg:justify-around sm:flex sm:flex-wrap sm:text-base  text-lg'
          data-aos="fade-left">

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
              19,500
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
    3N / 4D
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

          <div className='flex  sm:flex sm:flex-wrap lg:flex lg:justify-around justify-center gap-3 text-white mt-4'
          data-aos="fade-right">
            <div data-aos="fade-">
            
                     <button className={`${
								state.Oine ? `actives` : ``
							} bg-red-500  py-2 px-6 rounded-lg`}
              onClick={() => {
								setState({ ...defaultsx, Oine: true });
							}}
              >
                      Overview
                     </button>
            </div>

            <div>
            <button className={`${
								state.Tiwo ? `actives` : ``
							} bg-red-500 py-2 px-6 rounded-lg`}
              onClick={() => {
								setState({ ...defaultsx, Tiwo: true });
							}}
              >
                    About the Tour
                     </button>
            </div>

            <div>
            <button className={`${
								state.Tihree ? `actives` : ``
							} bg-red-500  py-2 px-6 rounded-lg`}
              onClick={() => {
								setState({ ...defaultsx, Tihree: true });
							}}
              >
                   Itinerary
                     </button>
            </div>
             
            <div>
            <button className={`${
								state.Fiour ? `actives` : ``
							} bg-red-500  py-2 px-6 rounded-lg`}
              onClick={() => {
								setState({ ...defaultsx, Fiour: true });
							}}
              >
                  Policy
                     </button>
            </div>

         
          </div>

      

<div className=' flex mt-9 justify-center'>

   <div    className="w-[40vw] sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 card6  "
   data-aos="fade-right">
							{state.Oine && (
                <> 

                <div>
                  <h1 className='text-center font-semibold text-2xl sm:text-xl py-4'>
                  Nainital with Jim Corbett from Delhi | FREE Jeep Safari Highlights
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
                 Feel the goosebumps as you hear the mighty roar of the Royal Bengal Tiger from the wilderness during your adventurous safari.
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
                 Revel in the beautiful Corbett Waterfalls embellished with scenic beauty cuddled up cosily amidst the lush green forests.


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
                 Surround yourself with the jaw dropping views of the finest peaks of the Himalayas like Mt Nanda Devi Kamet, Mana Parwat, Nilkanth, Hathi Parbat, Ghori Parbat and Nar Parbat.


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
                 Enjoy a pleasant climate of the hill station of Nainital which is surrounded by the hills and centered around the glistening blue green Naini Lake.


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
                 Get a chance to spot the marine species along the marshy swamps and rivulets as you drive along the banks of Kosi River in the national park.


                 </p>
              </div>


              
             </div>
                </>
                )}

   </div>

  



</div>





{/* About The tour */}

<div className='flex mt-9 justify-center'>
<div    className="w-[50vw] card6 sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 px-4">
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
                  Uttarakhand is a land of myths and mountains; a land wearing a cape of mighty Himalayas and holds revered temples, quaint villages, vibrant culture and so much more. From admiring the serene grace that Nainital holds to breathing in the shades of thrill and adventure in Corbett, this tour is filled with lots of colors and offers you an experience worth cherishing.
                  </p>
                </div>
                <div className='my-8'>
                <p>
                As you go deep into the wilderness of the Corbett National Park, the thrill and the aura of the place you feel cannot be put into words. Hearing the mighty roar of the Bengal Tigers will make you tremble yet give you a once-in-a-lifetime experience to witness them crouching behind some bushes or perhaps lying around by a waterbody. Rowing your boat gently down the shimmering waters of Naini Lake as the sun splashes its golden lights on the waters will be a fascinating experience to embrace.
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
                                 Delhi - Nainital - Corbett - Delhi
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
                                 4 Days & 3 Nights
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
                  Airport pick up and drop as per your flight timings.
                  </li>
                  <li  className='list-disc'>
                  Comfortable and hygienic vehicle (Ac Sedan/SUV car) for sightseeing on all days as per the itinerary.
                  </li>

                  <li className='list-disc'>
                  Breakfast at all hotels as per itinerary.
                  </li>
                  <li className='list-disc'>
                  Highly experienced Driver cum guide.
                  </li>
                  <li className='list-disc'>
                  Accommodation (Depending on the variant selected)
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
                  Safari Jim Corbett.
                  </li>
                  <li  className='list-disc'>
                  River Rafting in Corbett National Park.
                  </li>

                  <li className='list-disc'>
                  Enjoy Boating in Naini Lake.
                  </li>
                  <li className='list-disc'>
                  Snow View Point is 2270 meters above sea level (the most attractive spot).
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
                    Indira Gandhi International Airport (IGI) in Delhi is a feasible option for traveling to Himachal as it serves both domestic and well as International flights.
                  </li>
                  <li  className='list-disc'>
                    <strong>By Rail:</strong>
                    Another Alternative is the New Delhi Railway Station is one through which most trains arrive and depart from Delhi and is located in Paharganj, near Connaught Place.
                  </li>

                  <li className='list-disc'>
                    <strong>By Road: </strong>
                    One of the best Options will be by Bus as it is well connected to cities like Jaipur, Agra, Alwar, Dehradun, and even Kathmandu among others.
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
<div    className="w-[50vw] sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 card6  px-4">
							{state.Tihree && (

                <>
                <div>

               <div>
                <h2 className='text-center font-medium text-2xl'>
                Nainital with Jim Corbett from Delhi | FREE Jeep Safari Itinerary
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
                    Transfer from Delhi to Nainital | Aboard your Adventurous Journey
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
              Nainital
            </p>
</div>
                 </div>
                    <p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
                    Embark on your scenic tour with a comfortable transfer from Delhi to Nainital. Experience a picturesque drive and immerse in the beauty of Nainital and indulge in nature's bounty amidst the Himalayan backdrop. On your arrival in Nainital, check in to your pre-booked hotel and relax as you prepare for exciting adventures from the next day. 
                    </p>

                    <div className='flex gap-x-2 mx-4' >
                      <div>
                      <img
							src='/it1.avif'
							alt="search_icon"
							width="160"
							height="30"
                            className=' rounded-lg'
						/>
                      </div>
                      <div>
                      <img
							src='/it2.avif'
							alt="search_icon"
							width="160"
							height="30"
                            className=' rounded-lg'
						/>
                      </div>
                      <div>
                      <img
							src='/nainital.jpg'
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
  
Local Sightseeing in Nainital | Welcome to the 'City of Lakes'
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
Jim Corbett National Park
</p>
</div>
</div>
 <div className='px-4 py-2'>
  <li className='list-disc'>
  Wake up in the morning, have a hearty breakfast and get ready for Nainital local tour
  </li>
  <li className='list-disc'>
  Visit to the holy Naina Devi Temple, famous tourist spots likeCave Garden, Bara Pathar, Lover's Point, Lands End, Naina Peak etc.(sightseeing will be covered as per time permitting). 
  </li>
  <li className='list-disc'>
  After that you would be taken to Naini lake, where you can enjoy boating.
  </li>
  <li className='list-disc'>
  In the evening, enjoy shopping at the Mall Road. 
  </li>
  <li className='list-disc'>
  Return back to your hotel for dinner.
  </li>
  <li className='list-disc'>
  Overnight stay in Nainital.
  </li>
 </div>

  <div className='flex gap-x-2 mx-4' >
    <div>
    <img
src='/it3.avif'
alt="search_icon"
width="160"
height="30"
          className=' rounded-lg'
/>
    </div>
    <div>
    <img
src='/it4.avif'
alt="search_icon"
width="160"
height="30"
          className=' rounded-lg'
/>
    </div>
    <div>
    <img
src='/nainital.jpg'
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
  
  Transfers from Nainital to Jim Corbett | Drive to the Land of Tigers
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
  Wake up in the morning, have a hearty breakfast and get ready to explore Nainital.
  </li>
  <li className='list-disc'>
  Visit Bhimtal, Naina Peak, Astronomical Observatory, Land's End, Dorothy Seat and Tiffin Top, Raj Bhavan, Snow View Point, St. John's Church.
  </li>
  <li className='list-disc'>
  After exploring Nainital, proceed to the Jim Corbett National Park which is a 2hour drive from Nainital. 
  </li>
  <li className='list-disc'>
  On arrival at Jim Corbett, check into a wildlife resort and spend the rest of the day at leisure. 
  </li>
  <li className='list-disc'>
  Enjoy scrumptious dinner at the resort.
  </li>
  <li className='list-disc'>
  Overnight stay in Jim Corbett.
  </li>
 </div>

  <div className='flex gap-x-2 mx-4' >
    <div>
    <img
src='/it5.avif'
alt="search_icon"
width="160"
height="30"
          className=' rounded-lg'
/>
    </div>
    <div>
    <img
src='/it6.avif'
alt="search_icon"
width="160"
height="30"
          className=' rounded-lg'
/>
    </div>
    <div>
    <img
src='/it7.avif'
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
  
  Departure from Jim Corbett | Bid Farewell with Jungle Safari
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
Nainital Zoo Complex
</p>
</div>
</div>
 <div className='px-4 py-2'>
  <li className='list-disc'>
  Wake up in the morning, enjoy a healthy breakfast and get ready for jeep safari in the Corbett National Park .
  </li>
  <li className='list-disc'>
  Leave for the Jeep Safari and get a chance to catch the glimpse of the Royal Bengal Tigers which will be a delightful view to witness.
  </li>
  <li className='list-disc'>
  Enjoy the safari and behold the sight of many animals that Jim Corbett is famous for like Tiger, Deers, Black bears etc.
  </li>
  <li className='list-disc'>
  After Jeep Safari, have a scrumptious breakfast and enjoy the sunrise.

  </li>
  <li className='list-disc'>

Check out from the resort and head back to Delhi.
  </li>
  <li className='list-disc'>
  Reach Delhi and end this thrilling trip with a bundle full of memories.

  </li>
 </div>

  <div className='flex gap-x-2 mx-4' >
    <div>
    <img
src='/it8.avif'
alt="search_icon"
width="160"
height="30"
          className=' rounded-lg'
/>
    </div>
    <div>
    <img
src='/it9.avif'
alt="search_icon"
width="160"
height="30"
          className=' rounded-lg'
/>
    </div>
    <div>
    <img
src='/it10.avif'
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


               </div>


                </div>
                </>
              )}

                </div>
</div>

{/* Policy */}
<div className='flex mt-9 justify-center'>
<div    className="w-[50vw] card6 sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6  px-4">
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

export default Content