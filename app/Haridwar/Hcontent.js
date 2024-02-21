"use client"

import React,{useState} from 'react'
import Contact from '../Nainital/Contact';

const Hcontent = () => {
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
                             src="/rishikesh.jpg"
                             alt="search_icon"
                             width="290"
                             height="130"
                             className=' w-screen h-[70vh] '
                         />
        </div>
 
   <div>
 
     <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'>
     Delhi to Haridwar Rishikesh Mussoorie Expedition
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
     Delhi
   </p>
 </div>
 
 </div>
 
 
  
 
           </div>
 
           <div className='flex  sm:flex sm:flex-wrap lg:flex lg:justify-around justify-center gap-3 text-white mt-4'>
             <div>
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
                             } bg-red-500   py-2 px-6 rounded-lg`}
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
                             } bg-red-500   py-2 px-6 rounded-lg`}
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
 
    <div    className="w-[40vw] sm:w-[100vw] lg:w-[100vw] lg:px-8 sm:px-6 card6  ">
                             {state.Oine && (
                 <> 
 
                 <div>
                   <h1 className='text-center font-semibold text-2xl sm:text-xl py-4'>
                   Delhi to Haridwar Rishikesh Mussoorie Expedition Highlights
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
                  Bathe in the aura of serenity and spirituality as you witness the divine Ganga Aarti at Har Ki Pauri.
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
                  Pat yourself after taking a daredevil leap from the highest bungee jumping point of India in Rishikesh.
 
 
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
                  Stand tall at the highest point of Mussoorie - ‘Gun Hill’ and get yourself clicked in the ‘I rule the world’ pose.
 
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
                  Take a refreshing dip in the white burbling water cascading down the rugged face of a mountain at the Kempty Waterfall.
 
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
                  Boost your adrenaline by indulging in white water rafting in Rishikesh with its untamed currents, the drifts and the the fast rapids.
 
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
                 Escape the humdrum of city life to witness the layer of hills rising above each other to join the snow clade himalayan peaks as you take this amazing tour from Haridwar which literally means "Gateway to the land of Gods" to the rustic hill station of Mussoorie - "The Queen of Hills". Along with the scenic vistas and a number of spiritual sites, this tour will also greet you with legends and adventure at every turn in Rishikesh - a region that offers a plethora of activities from thrill to wellness.
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
                                  Delhi - Haridwar - Rishikesh - Dehradun - Mussoorie - Delhi
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
                   Stay in hygienic and sanitized hotels (As per the variant selected).
                   </li>
                   <li  className='list-disc'>
                   Buffet breakfast on all days.

                   </li>
 
                   <li className='list-disc'>
                   Highly-Experienced driver cum guide.
                   </li>
                   <li className='list-disc'>
                   Sightseeing as per itinerary.
                   </li>
                   <li className='list-disc'>
                   All toll tax, parking, fuel, and driver allowances.
                   </li>
                   <li className='list-disc'>
                   Comfortable and hygienic vehicle ( AC Sedan/SUV/Traveler) for sightseeing on all days as per the itinerary.
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
                   Marvel at the huge statue of Lord Shiva peeping from above the Swami Vivekanand park in Haridwar.
                   </li>
                   <li  className='list-disc'>
                   Pay homage to the Bharat Mata Mandir, which does not worship any gods or goddesses but the idea of India as a nation and the sacrifices that have been made for it.
                   </li>
 
                   <li className='list-disc'>
                   Sit and meditate at the Beatles ashram, exactly where the band learned meditation and wrote dozens of songs.
                   </li>
                   <li className='list-disc'>
                   Admire the view of Rishikesh as you walk through the glittering Laxman Jhula.
                   </li>
                  <li className='list-disc'>
                  Practice a few Yoga poses by the river beach with the sound of the gurgling Ganga soothing your ears.
                  </li>

                  <li className='list-disc'>
                  Shop souvenirs like silver jewelry, books, and handcrafted wooden items from the Mall road, Mussoorie.
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
                     Delhi is well connected with domestic and international flights from all major cities of India and abroad. All the major airlines have their flights operating from Indira Gandhi International Airport in New Delhi.
                   </li>
                   <li  className='list-disc'>
                     <strong>By Rail:</strong>
                     The railway network connects Delhi to all major and, nearly, all the minor destinations in India. The three important railway stations of Delhi are New Delhi Railway Station, Old Delhi Railway Station, and Hazrat Nizamuddin Railway Station.
                   </li>
 
                   <li className='list-disc'>
                     <strong>By Road: </strong>
                     Delhi is well connected, by a network of roads and national highways, with all the major cities in India. Both the government and private transport providers provide frequent bus services. One can also get government as well as private taxis here.
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
                 Delhi to Haridwar Rishikesh Mussoorie Expedition Itinerary
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
                    
Delhi to Rishikesh via Haridwar | Travel to the 'Gateway to Gods'
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
              Rishikesh
             </p>
 </div>
                  </div>
                  <div className='px-4 py-2'>
   <li className='list-disc'>
   Your amazing Haridwar Rishikesh Mussoorie Tour starts from Delhi.
   </li>
   <li className='list-disc'>
   Head to the pickup point in Delhi from where a representative will help you get transferred to Rishikesh - "The Yoga Capital of the World".
   </li>
   <li className='list-disc'>
   On the way to Rishikesh, you can take a stopover at Haridwar.
   </li>
   <li className='list-disc'>
   Here, you can visit the Vaishno Devi Mandir which is a replica of 'Vaishno Devi Temple in Jammu and Kashmir' with caves & tunnels leading to the shrine.
   </li>
   <li className='list-disc'>
   Then you can also visit the Daksheshwar Mahadev Temple, dedicated to Lord Shiva and situated on the banks of Ganga, this temple is believed to be the place where Goddess Parvati (Sati) jumped into the holy fire.
   </li>
   <li className='list-disc'>
   In the evening you can go to Har Ki Pauri Ghat where you can visit the famous Mansa Devi Temple that offers panoramic views of Haridwar City and gives a sense of calmness to the mind.
   </li>

   <li className='list-disc'>
   Later in the evening, get surrounded by chanting mantras and reflection of the diyas off the surface of the holy river while witnessing the famous Ganga Aarti.
   </li>
  <li className='list-disc'>
  After taking a holy dip in Har ki Pauri, you can travel to Rishikesh.
  </li>

  <li className='list-disc'>
  Upon arrival complete the check-in formalities at the hotel.
  </li>
  <li className='list-disc'>
  Overnight stay at the hotel in Rishikesh.
  </li>

  </div>
 
                     <div className='flex gap-x-2 mx-4' >
                       <div>
                       <img
                             src='/it11.avif'
                             alt="search_icon"
                             width="160"
                             height="30"
                             className=' rounded-lg'
                         />
                       </div>
                       <div>
                       <img
                             src='/it12.avif'
                             alt="search_icon"
                             width="160"
                             height="30"
                             className=' rounded-lg'
                         />
                       </div>
                       <div>
                       <img
                             src='/it13.avif'
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
   
 
Rishikesh Sightseeing and Transfer to Mussoorie | Let the Rapids Pump Up the Adrenaline while Indulging in Rafting
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
 Mussoorie
 </p>
 </div>
 </div>
  <div className='px-4 py-2'>
   <li className='list-disc'>
   Wake up to a beautiful morning in the mountains and have a delicious breakfast.
   </li>
   <li className='list-disc'>
   Get ready and head out to experience the most exciting day of the tour.
   </li>
   <li className='list-disc'>
   Transfer to Shivpuri, from where you can head out for a rafting session till Laxman Jhula and get face to face with the thrilling rapids in the glaciated Ganga.
   </li>
   <li className='list-disc'>
   You can also level up your adventure by daring to cliff jump into the cold water of the river and can also enjoy having a bowl of hot Maggi during the short stopover in the quiet waters.
   </li>
   <li className='list-disc'>
   On reaching Laxman Jhula, facing another round of rapids, you can return back to the hotel to dry up.
   </li>
   <li className='list-disc'>
   Check out from the hotel and again proceed to explore the bustling city of Rishikesh.
   </li>

   <li className='list-disc'>
   One can choose to explore the different parts of Rishikesh like the iconic Ram Jhula and Laxman Jhula or go shopping in the local markets in the surrounding areas.
   </li>

   <li className='list-disc'>
   You can also spend some time by the river beach or go café hopping in the vibrant cafes that line the banks of Ganga.
   </li>

   <li className='list-disc'>
   Don’t forget to feel the spiritual vibes during the holy Ganga Aarti at Triveni Ghat in Rishikesh which will add up to your lively evening.
   </li>

   <li className='list-disc'>
   Later in the evening, you can depart for Mussoorie.
   </li>

   <li className='list-disc'>
   Upon reaching Mussoorie, you can head directly to your hotel and complete the check-in process.
   </li>

   <li className='list-disc'>
   Overnight stay at the hotel in Mussoorie.
   </li>
  </div>
 
   <div className='flex gap-x-2 mx-4' >
     <div>
     <img
 src='/it14.avif'
 alt="search_icon"
 width="160"
 height="30"
           className=' rounded-lg'
 />
     </div>
     <div>
     <img
 src='/it15.avif'
 alt="search_icon"
 width="160"
 height="30"
           className=' rounded-lg'
 />
     </div>
     <div>
     <img
 src='/it16.avif'
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
   
   Mussoorie Sightseeing and Excursion to Dhanaulti | Witness Milky Streams Somersaulting from Gigantic Kempty Waterfalls
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
 Mussoorie
 </p>
 </div>
 </div>
  <div className='px-4 py-2'>
   <li className='list-disc'>
   Get up early in the morning to a beautiful view of the mountains.
   </li>
   <li className='list-disc'>
   You can then head out for a small excursion to Dhanaulti.
   </li>
   <li className='list-disc'>
   On reaching Dhanaulti you can visit the Eco Park which features a plethora of flora as well as the native Deodar, Oak & Rhododendron trees, and houses endangered bird species that add to its natural beauty.
   </li>
   <li className='list-disc'>
   The park is also a stellar destination for fun hikes and treks that provide you with amazing views of Doon Valley and the Himalayas.
   </li>
   <li className='list-disc'>
   While in Dhanaulti you can also enjoy the various adventure activities like Zipline, Sky bridge, and Valley Crossing.
   </li>
   <li className='list-disc'>
   You can then return back to Mussoorie and head directly for a picnic to the cascading Kempty Waterfalls which is a popular tourist attraction near Mussoorie.
   </li>

   <li className='list-disc'>
   You can also trek through the tall dense trees to Gun Hill or take a round-trip cable car ride to the top.
   </li>

   <li className='list-disc'>
   Gun Hill offers unobstructed views of the Majestic Himalayas and is perfect to spend a leisurely evening.
   </li>

   <li className='list-disc'>
   Later you can head back to your hotel.
   </li>

   <li className='list-disc'>
   Overnight stay at the hotel in Mussoorie.
   </li>
  </div>
 
   <div className='flex gap-x-2 mx-4' >
     <div>
     <img
 src='/it17.avif'
 alt="search_icon"
 width="160"
 height="30"
           className=' rounded-lg'
 />
     </div>
     <div>
     <img
 src='/it18.avif'
 alt="search_icon"
 width="160"
 height="30"
           className=' rounded-lg'
 />
     </div>
     <div>
     <img
 src='/it19.avif'
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
   
   Departure from Mussoorie to Delhi | Wave Goodbye to The Beautiful Mountains
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
   Have a delicious breakfast and check out from the hotel.
   </li>
   <li className='list-disc'>
   You can then set off on your journey towards Delhi. and bid adieu to the beautiful hill station.
   </li>
   <li className='list-disc'>
   Conclude the tour with beautiful memories on reaching your desired destination in Delhi for your onward journey.
   </li>
   
  
  
  </div>
 
   <div className='flex gap-x-2 mx-4' >
     <div>
     <img
 src='/it20.avif'
 alt="search_icon"
 width="160"
 height="30"
           className=' rounded-lg'
 />
     </div>
     <div>
     <img
 src='/dhanaulti.jpg'
 alt="search_icon"
 width="160"
 height="40"
           className=' rounded-lg'
 />
     </div>
     <div>
     <img
 src='/mussorie.jpg'
 alt="search_icon"
 width="120"
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

export default Hcontent