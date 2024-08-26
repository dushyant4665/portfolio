'use client'
import React,{useState} from 'react'
import ContactTitle from './ContactTitle';
import  {db} from '../app/firebaseConfig.js'
import {motion  } from 'framer-motion'
import SubmitBtn from "./SubmitBtn";
import {toast} from 'react-toastify'


const Contact = () => {
return (
  <div>
    
<div className='mt-32 flex justify-center items-center text-center'>
  
<motion.section
  id="contact"
  // ref={ref}
  className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
  initial={{
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
  }}
  transition={{
    duration: 1,
  }}
  viewport={{
    once: true,
  }}
>


<p className=" text-gray-700 -mt-6 dark:text-white/80 sm:whitespace-nowrap text-center sm:text-left lg:text-[]">
  Contact directly at{" "}
  <a className="underline text-[13px] sm:text-[15px]" href="mailto:dushyantkhandelwal4665@gmail.com">
    dushyantkhandelwal4665@gmail.com
  </a>{" "}
  or through this form.
</p>


  <form
    className="mt-10 flex flex-col dark:text-black"
    action={async (formData) => {
      const { data, error } = await sendEmail(formData);

      if (error){
        toast.error(error);
        return;
      }

      toast.success("Email sent successfully!");
    }}
  >
    <input
      className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
      name="senderEmail"
      type="email"
      required
      maxLength={500}
      placeholder="Your email"
    />
    <textarea
      className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
      name="message"
      placeholder="Your message"
      required
      maxLength={5000}
    />
    <SubmitBtn />
  </form>
</motion.section>
</div>
</div>
 ) }
export default Contact