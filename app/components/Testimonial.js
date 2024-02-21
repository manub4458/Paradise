import Image from 'next/image'
import React from 'react'

const Testimonial = ({review,name, place}) => {
  return (
  <>
  <div className='my-10'>

  

  <div className='flex justify-center gap-x-6 '>
        <div className='card1 w-[20vw]'> 
           <div className='flex justify-between '>
            <div>
             <div>
             <p>
                Good Experience
              </p>
             </div>
 <div className='flex'>
 <div>
             <Image
							src='/rating.gif'
							alt="search_icon"
							width="20"
							height="30"
                          
						
                        />
             </div>
             <div>
             <Image
							src='/rating.gif'
							alt="search_icon"
							width="20"
							height="30"
                          
						
                        />
             </div>
             <div>
             <Image
							src='/rating.gif'
							alt="search_icon"
							width="20"
							height="30"
                          
						
                        />
             </div>
             <div>
             <Image
							src='/rating.gif'
							alt="search_icon"
							width="20"
							height="30"
                          
						
                        />
             </div>
             <div>
             <Image
							src='/rating.gif'
							alt="search_icon"
							width="20"
							height="30"
                          
						
                        />
             </div>

 </div>
            </div>
             
            <div>
            <Image
							src='/test.png'
							alt="search_icon"
							width="60"
							height="90"
                          
						
                        />
            </div>


           </div>
        <div>
          <p className='sm:text-wrap'>
            
{review}
          </p>
        </div>

        <div>
          <p>
           {name}
          </p>
        </div>

        <div>
          <p>
          {place}
          </p>
        </div>
        
        </div>



       

  </div>


  </div>
  
  </>
  )
}

export default Testimonial