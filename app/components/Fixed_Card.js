import React from 'react'
import Image from 'next/image'

const Fixed_Card = ({image,place,days,price,icon}) => {
    
  return (
    <>
    
    <div className='mt-6'>


        <div className='flex gap-x-6 justify-center '>
            <div className='card4 text-center sm:w-[46vw] sm:h-[45vh]' >
            <Image
							src={image}
							alt="search_icon"
							width="320"
							height="130"
                            className='rounded-md relative h-[320px] sm:w-[46vw] sm:h-[30vh]  hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                     
                      <p className='sm:pt-2 sm:text-sm'>
                        {place}
                        </p>
                        <p className='sm:text-sm'>
                          {days}
                        </p>
                        <p className='text-red-600 sm:text-base font-semibold'>
                          &#8377;{price}
                        </p>
                     
            </div>
            
        </div>

    </div>
    
    </>
  )
}

export default Fixed_Card