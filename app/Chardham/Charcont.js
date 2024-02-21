"use client"

import React, {useState} from 'react'
import Contact from '../Nainital/Contact';

const Charcont = () => {
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
							src="/chardham2.jpg"
							alt="search_icon"
							width="290"
							height="130"
                            className=' w-screen h-[70vh] '
						/>
       </div>

  <div>

    <h1 className='text-center py-4 text-3xl font-semibold sm:text-xl'>
    Chardham Yatra From Haridwar
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
              38,300
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
    9N / 10D
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
    Haridwar
  </p>
</div>

</div>


 

          </div>

          <div className='flex  sm:flex sm:flex-wrap lg:flex lg:justify-around justify-center gap-3 text-white mt-4'>
            <div>
                     <button className={`${
								state.Oine ? `actives` : ``
							} bg-red-500   py-2 px-6 rounded-lg`}
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
                 Chardham Yatra from Haridwar Highlights
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
                 When Hindus undertake a pilgrimage great importance is attached to the places according to the merit they confer on the pilgrims.
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
                
                 In this respect the char dhams of Uttarakhand hold high ranking.
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
                 A pilgrimage to char dham frees you from sins and the cycle of births and deaths besides giving you the satisfaction of having fulfilled a religious duty.
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
                 Join us on the chardham yatra starting from Haridwar and gain merit in this life.
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
                Uttarakhand, also known as Devbhoomi or the Land of Gods, is home to numerous temples and welcomes devotees all year round. Among the countless religious sites and circuits that devotees visit in Uttarakhand, one of the most prominent is the Char Dham Yatra. This Yatra or pilgrimage is a tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath – nestled high up in the Himalayas. In Hindi, 'char' means four and 'dham' refers to religious destinations.
                  </p>
                </div>
                <div className='my-8'>
                <p>
                The high-altitude shrines remain shut for around six months every year, opening in summers (April or May) and closing with the onset of winter (October or November). It is believed that one should complete the Char Dham Yatra in a clockwise direction. Hence, the pilgrimage starts from Yamunotri, proceeds towards Gangotri, onto Kedarnath, and finally ends at Badrinath. The journey can be completed by road or by air (helicopter services are available). Some devotees even do a Do Dham Yatra or a pilgrimage to two shrines - Kedarnath and Badrinath.
                  </p>
                </div>
                <div className='my-8'>
                <p>
                The Yamunotri temple, lodged in a narrow gorge close to the source of River Yamuna (the second-most sacred Indian river after River Ganga) in Uttarkashi district, is dedicated to Goddess Yamuna. The district of Uttarkashi is also home to Gangotri dedicated to Goddess Ganga, the most sacred of all Indian rivers. Located in the Rudraprayag district lies Kedarnath, dedicated to Lord Shiva. Badrinath, home to the sacred Badrinarayan Temple, is dedicated to Lord Vishnu. The Char Dham Yatra is as divine as it is arduous but fulfills the soul!
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
                                 <p className='text-sm'>
                                 Haridwar – Barkot – Syanachatti – Yamunotri – Uttarkashi – Harsil – Gangotri – Srinagar – Kedarnath 
                                 <br/>
                                 – Guptkashi – Badrinath – Pipalkoti
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
                                 10 Days & 9 Nights
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
                                 Haridwar
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
                                 Haridwar
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
                  Personal assistance by our representative on arrival.
                  </li>
                  <li  className='list-disc'>
                  Neat, Clean, Hygienic Accommodation on Double Sharing basis (As per Family wise).
                  </li>

                  <li className='list-disc'>
                  All transfers/tours services by Air-Conditioned vehicle &may be change as Per Group Size& road condition.
                  </li>
                  <li className='list-disc'>
                  The air-conditioning will be operational only Delhi – Rishikesh & Rishikesh- Delhi.
                  </li>
                  <li className='list-disc'>
                  All Veg. Meals, Daily Breakfast, Lunch, Dinner, Morning& Evening Tea/Coffee (in our hotels only).
                  </li>

                  <li className='list-disc'>
                  Caring Tour Manager throughout the tour
                  </li>

                  <li className='list-disc'>

                  Local Guide at Rishikesh for local sightseeing
                  </li>

                  <li className='list-disc'>
                  01 Liter Mineral water per Day.
                  </li>

                  <li  className='list-disc'>
                  Sightseeing as per above Itinerary.
                  </li>

                  <li className='list-disc'>
                  All inclusive (Fuel, Driver Allowance, Parking Toll Tax, State Tax.)

                  </li>

                  <li className='list-disc'>
                  All currently applicable hotel tax and Transportation tax
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
              Chardham Yatra Itinerary
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
                    Haridwar – Barkot
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
                    <p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
                    You are welcomed in Haridwar by our tour guide who then escorts you to the waiting coach that will take you to Barkot and then onwards to Syanachatti. The 235 km drive spread over 8 hours takes you to Dehradun & Mussoorie where we have brief halts for refreshments and to admire the beautiful view. We stop awhile at Kempty Falls before proceeding to Syanachatti at Barkot where we check into the designated hotel.
                    </p>

                
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
  
  Syanachatti – Yamunotri – Syanachatti
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
Yamunotri
</p>
</div>
</div>
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Wake up early, breakfast and then board the coach for the 17 km drive to Jankichatti, the last point where you can drive up to. From here it is a hard 7 km trek over rough mountainous terrain to Yamunotri. You can of course opt for a pony or a palanquin. There are hundreds of pilgrims on the road and time passes pleasantly enough as you near the destination. The Yamunotri temple can be seen but you first stop at Suraj Kund. Cook some rice in the hot water springs here to offer to the deity later on. Then we proceed to Divya Shila to pay obeisance and then finally arrive at the Yamunotri Temple. Pilgrims line up for the darshan of the black idol of Yamuna devi. On the return trip pilgrims usually bathe in the Yamuna River with priests in attendance to conduct obligatory rituals. Return to Jankichatti, board the vehicle and proceed to Syanachatti/Barkot for the night halt.
                    </p>


  
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
  
  Syanachatti – Uttarkashi – Harsil
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
Gangotri
</p>
</div>
</div>
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Rise at the break of dawn, enjoy a cup of steaming hot tea and hot breakfast before getting into the coach that will take you on the 190 km drive towards Gangotri. The view of the Himalayas with the snow-capped mountains reflecting the morning sunlight is simply astounding. The road takes us to Uttarakashi where pilgrims have a brief stop for a darshan at the Vishwanath Temple and a short walk to the Sukhi top to admire the scenery. Finally, proceed to Harsil and check into your room for the night.
                    </p>

  
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
  
  Harsil – Gangotri – Harsil
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
  Gangotri
</p>
</div>
</div>
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Breakfast over, you board the coach that will take you on a one hour drive to Gangotri. You arrive at the gates of the temple complex, alight and walk up to the temple made of white granite, located on the banks of the Bhagirathi River. Gangotri is home to Ganga Devi whose idol is kept inside the temple. It is said Ganga descended to earth here in order to help King Bhagiratha bring peace to the souls of his departed ancestors. Lord Shiva received her in his matted locks and Ganga flowed down in five streams down to the earth. The current temple is said to have been built by Amar Singh Thapa a Gurkha general in the 18th century on the place where a small temple stood for centuries. Adi Sankaracharya is said to have visited this site in the 11th/12th century. Pilgrims have a darshan and usually bathe in the ice-cold waters of the Bhagirathi but it is not obligatory. Return to Harsil for the night’s stay.
                    </p>

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
  
  Harsil – Srinagar
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
Srinagar
</p>
</div>
</div>
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Third on the list is Kedarnath, another tough pilgrimage. The coach takes you on an early morning drive along scenic mountain roads to Srinagar, a drive of 185 km that takes all of 5 hours. On the way we stop at Tehri Dam, a beautiful picnic spot, to stretch our legs. Arrive in Srinagar, check into your hotel and set out to explore local markets.
                    </p>

  
</details>
</div>

</div>

{/* Day6 */}

<div className='flex gap-x-6 py-4'>

<div>
  <button className='bg-[#fff]'>
    Day 6
  </button>
</div>

<div>
<details>
  <summary className='hover:cursor-pointer'>
  Srinagar – Kedarnath
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
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Latter Board the coach for the 105 km drive towards Kedarnath. We stop at Rudraprayag where the Alaknanda River meets the Mandakini. Everyone enjoys walking in this small holy temple town. Lattere you proceed to Gaurikund, this is the last point on the motorable road. From here to Kedarnath is a tough trek of 14 km over craggy, sloping terrain. You can walk, hire a pony or a palanquin. At Gaurikund we check into a hotel prior to visiting the Kedarnath temple, one of the 12 Jyotirlingas of India. Gaurikund itself has a hot water spring with medicinal properties. We trek from Gaurikund to Kedarnath and arrive at the temple on the banks of the Mandakini River for the evening aarti and darshan. We spend the night at Kedarnath. Better bring woolens because it will be chilly at this height of 3584 metres.
                    </p>

  
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
  Kedarnath – Rampur/Guptkashi
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
Guptkashi
</p>
</div>
</div>
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Rise before dawn and proceed to the temple for the morning aarti and then we breakfast and proceed on a leisurely walk back to Gaurikund and then to Guptkashi. It is said that Goddess Parvati performed penance in order to become the consort of Lord Shiva. Guptkashi is also connected with the Pandavas and is known for its temple of Ardhanarishvara. Bhima of the Pandava brothers recognized Shiva in the form of Nandi and tried to hold him by the horns but Shiva vanished, a reason why the place is named Guptkashi (hidden kashi).
                    </p>

  
</details>
</div>

</div>

{/* Day8 */}

<div className='flex gap-x-6 py-4'>

<div>
  <button className='bg-[#fff]'>
    Day 8
  </button>
</div>

<div>
<details>
  <summary className='hover:cursor-pointer'>
  Rampur – Badrinath
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
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Rise early, breakfast and get into the coach for the drive to Badrinath, about 205 km away. We arrive at Joshimath in Chamoli District, the starting point to the trek to Badrinath, the last of the four chardhams. Badrinath is also one of the four major Chardhams. The temple here is dedicated to Lord Vishnu who, it is said, meditated here for ages and Laxmi, his consort, provided him shade and shelter by turning herself into a badri (plum) tree. Joshimath, in a way, is a starting point to various treks, the most notable of which is the trek to the Valley of Flowers. You can also take the ropeway to Auli, one of the longest of its kind in Asia. However, we proceed on a trek to Badrinath where we visit the temple and enjoy Darshan, a soul-fulfilling act. Retire for the night at a hotel in Badrinath.
                    </p>

  
</details>
</div>

</div>

{/* Day9 */}

<div className='flex gap-x-6 py-4'>

<div>
  <button className='bg-[#fff]'>
    Day 9
  </button>
</div>

<div>
<details>
  <summary className='hover:cursor-pointer'>
  Badrinath – Pipalkoti
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
Pipalkoti
</p>
</div>
</div>
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
Breakfast and set out to explore places in the vicinity such as Badrinath Tapt Kund, Brahma Kapal, Charanpaduka, Narad Kund, Mata Murty Temple, Mana Village, Vasundhara, Bhim Pul and Vyas Gufa as well as a visit to the mouth of the Saraswati River. Tapt Kund is where devotees take a dip before visiting the temple. Brahma Kapal is where Hindus usually perform rites for the souls of their deceased ancestors. Vyas Gufa is where Ved Vyas is said to have penned the Mahabharata. After that, in the afternoon, we proceed on an 80 km drive to Pipalkoti where you check into your room for the night.
                    </p>

  
</details>
</div>

</div>

{/* Day10 */}
<div className='flex gap-x-6 py-4'>

<div>
  <button className='bg-[#fff]'>
    Day 10
  </button>
</div>

<div>
<details>
  <summary className='hover:cursor-pointer'>
  Pipalkoti – Haridwar
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
<p className='w-[40vw] sm:w-[80vw] lg:w-[80vw] px-4 py-2'>
The pilgrimage to the Chota Chardham over, it is time to return to Haridwar on a 254 km drive. On the way we stop at Devprayag where the Alaknanda and Bhagirathi confluence to form the Ganga. The tour guide bids you a fond farewell on arrival at Haridwar and drops you at the airport or the railway station.
                    </p>

  
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

export default Charcont