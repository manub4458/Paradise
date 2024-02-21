"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Mobnav from '../components/Mobnav';
import Foot from '../components/Foot';

const Page = () => {

  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    message: ""
});

const [submitting, setSubmitting] = useState(false);

const handleInputChange = (e) => {
  const   {name, value} = e.target;

  setFormData({
       ...formData,
      [name]: value,


  });
}

 const handleSubmit = async (e) =>{
  e.preventDefault();
  setSubmitting(true);

  // send email

  const response = await fetch('/api/contact-us',{
    method:'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify(formData),
  });

  const { success, error } = await response.json();

  if (success) {
    alert('Your inquiry has been submitted!');
  } else if (error) {
    console.error(error);
    alert('Error while submitting your inquiry: ', error);
  }

  setSubmitting(false);

 }

  return (
    <>
    <div>
      
    </div>
    <div className='md:hidden'>
   
   <Navbar />
  </div>
<div className=' w-screen hidden md:inline-block'>
 <Mobnav />
</div>


{/* <div className='bg-[#333333] text-white w-[100vw]'>



 <section className=' h-screen w-[100vw]'>

  <h1 className='text-center pt-4 text-3xl mb-8 font-semibold'>
    Contact Us
  </h1>

  <form onSubmit={handleSubmit} className=''>

    <div className=' grid justify-center mb-4'>
      <label htmlFor='firstName'
      className='text-xl  gap-7'
      >
        First Name
      </label>

      <input type='text' id='firstName' name='firstName' placeholder='Enter First Name...' onChange={handleInputChange} />


    </div>

    <div className='form-control grid justify-center mb-4'>
      <label htmlFor='lasttName'>
        LastName
      </label>

      <input type='text' id='lastName' name='lastName' placeholder='Enter Last Name...' onChange={handleInputChange} />


    </div>

    <div className='form-control grid justify-center mb-4 '>
      <label htmlFor='email'>
        Email
      </label>

      <input type='email' id='email' name='email' placeholder='Enter your Email...' onChange={handleInputChange} />


    </div>
    <div className="form-control grid justify-center ">
          <label htmlFor="message">Message</label>
          <textarea id='message' name="message" cols="22" rows="10" placeholder='Enter message...' onChange={handleInputChange}
          className='text-black'
          ></textarea>
        </div>
<div className='flex justify-center mt-6'>


      
        <button className='bg-white text-black p-4 rounded-xl' type='submit'>Submit</button>
        </div>
  </form>


 </section>

 </div> */}

<form onSubmit={handleSubmit} className='overflow-hidden'>

<div className="flex items-center justify-center h-screen sm:h-[140vh]">
				<div className="  contact_form_bg sm:rounded-lg    flex flex-col items-center">

					<h1 className='text-3xl font-semibold sm:text-center sm:text-2xl '>
						Feel Free to Contact
					</h1>
					<h1 className=" sm:hidden mt-[2rem] mb-[2rem] ml-[-32rem]  text-lg lg:ml-[-27rem] md:ml-[-18rem] sm:mt-[3rem] sm:text-base  font-medium poppins">
						Any question? Talk to us today!
					</h1>
					<div className="w-[62rem] sm:mt-8 lg:w-[52rem] md:w-[40rem] sm:w-screen px-[6.5rem] lg:px-[4rem] md:px-[3rem]  flex flex-wrap sm:flex-nowrap sm:flex-col poppins gap-4 sm:gap-8">
						<div>
							<h2 className="mb-[0.25rem] sm:ml-[280px]">First Name:</h2>
							<input
								required
                name='firstName'
								className="bg-[#D7D7D7] sm:ml-[220px] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="First Name"
                onChange={handleInputChange}
                ></input>
						</div>
						<div className="ml-[4rem] lg:ml-[3rem] md:ml-[3rem] sm:ml-0">
							<h2 className="mb-[0.25rem] sm:ml-[240px]">Last Name:</h2>
							<input
								required
								name='lastName'
								className="bg-[#D7D7D7] sm:ml-[175px] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="Last Name"
                onChange={handleInputChange}
                ></input>
						</div>
						<div>
							<h2 className="mb-[0.25rem] mt-[2rem] sm:mt-0 sm:ml-[280px]">Email Address:</h2>
							<input
								required
								name='email'
								className="bg-[#D7D7D7] w-[20rem] sm:ml-[220px] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="Email Address"
                onChange={handleInputChange}
                ></input>
						</div>
						<div className="ml-[4rem] lg:ml-[3rem] md:ml-[3rem] sm:ml-0 ">
							<h2 className="mb-[0.25rem] sm:ml-[240px] mt-[2rem] sm:mt-0">
								Contact Number:
							</h2>

							<input
								required
                name='contact'
                
								
								className="bg-[#D7D7D7] sm:ml-[175px] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="Contact Number"
                onChange={handleInputChange}
                ></input>
						</div>
						<div>
							<h2 className="mb-[0.25rem] mt-[2rem] sm:mt-0 sm:ml-[280px]" >Messages:</h2>
							<textarea
								required
								name='message'
								
								className="bg-[#D7D7D7] sm:ml-[220px] py-[0.5rem] w-[20rem] md:w-[14.25rem] h-[5rem] text-[11px] tracking-[0.875px] px-[1rem] rounded-md placeholder:h-[4rem] placeholder:text-[11px] outline-none"
								rows="3"
								placeholder="Messages"
                onChange={handleInputChange}
                ></textarea>
						</div>
					</div>
					<button
						
						className="mt-[3rem] submit_button text-white bg-[#333333]  h-[3.25rem] md:h-[2.75rem] md:w-[8rem] w-[9.125rem]  sm:h-max sm:w-max sm:p-4 sm:rounded-xl rounded-[41px] poppins font-medium tracking-wider">
						Submit
					</button>
				</div>
			</div>
</form>

 <div className=''>
<Foot />
</div>
 </>
  )
}

export default Page