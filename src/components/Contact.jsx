import React, { useState } from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1965a902-b185-4a71-b105-834212ac28df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-sky-400'>Get in Touch</h2>
              <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex space-x-4'>
                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={facebook} alt="Facebook" className='h-6 w-6'/>
                </a>
                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={instagram} alt="Instagram" className='h-6 w-6'/>
                </a>
                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={linkedin} alt="LinkedIn" className='h-6 w-6'/>
                </a>
              </div>
              <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
            </div>
            <form onSubmit={onSubmit} className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-sky-200 shadow-lg shadow-sky-400 p-10'> 
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' name='name' required placeholder='Full Name' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" id='email' name='email' required placeholder='Email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' name='message' required placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <button type='submit' className='bg-sky-400 text-white px-3 py-2 rounded-lg'>Send Message</button>
              <span className='block mt-2 text-gray-800'>{result}</span>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
