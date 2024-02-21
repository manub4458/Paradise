import Image from 'next/image'
import React from 'react'

const Card2 = ({image1,place}) => {
    console.log(image1,place)
  return (
    <>
    
    <div className=' my-4'>

<div className=' '>
<Image
							src={image1}
							alt="search_icon"
							width="290"
							height="130"
                            className='rounded-md relative card1 h-[330px] sm:w-[45vw] sm:h-[40vh] hover:shadow-current hover:cursor-pointer hover:transition-all  '
						/>
                       {/* <p className='absolute top-[1600px] pl-[70px] text-white font-medium text-2xl '>
                            {place}
                        </p> */}
                       
</div>
 </div>
    </>
  )
}

export default Card2