'use client'
import React,{useState} from 'react'
import ContactTitle from './ContactTitle';
import  {db} from '../app/firebaseConfig.js'
import {motion  } from 'framer-motion'
import SubmitBtn from "./Submitbtn";
import toast from 'react-toastify'


const Contact = () => {


//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const[phoneNumber,setPhoneNumber]=useState('')
//   const [message, setMessage] = useState("");

// const handleSubmit = async(e)=>{
// e.preventdefault();
// const added = await addDataToFirestore(name,phoneNumber,email,message);
// if(added){
//   setName('')
//   setPhoneNumber('');
//   setEmail('')
//   setMessage('')

//   alert('Data added to firestore DB!!')
// }
// };

//   async function addDataToFirestore(name,phoneNumber,email,message){
//     try{
//       const docRef = await addDoc(collection(db,'messages'),{
//         name:name,
//         phoneNumber:phoneNumber,
//         email:email,
//         message:message,
//       });
//       console.log('Document written with ID:',docRef.id);
//       return true;
//     } catch(error){    console.error('Error adding document', error)
//       return false;
// }
    
//   }

      
   


  // return (
  //   <div>
  // <div
  //     className="w-full  pt-10 pb-0" data-aos="fade-in" >
  //     <div className="">
  //       <ContactTitle myTitle="CONTACT" des="Contact With Me" />
  //     </div>
  //     <div className="w-full ">
  //       <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          
  //         <div className="max-w-md  w-full mx-auto p-6 bg-transparent">
            
            
  //           <form  className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" >
  //             <div className="md:grid grid-cols-2 lgl:flex-row gap-10">
  //               <div className="w-full lgl:w-1/2 flex flex-col gap-4">
  //                 <p className="text-sm text-blue-400 uppercase tracking-wide">
  //                   Your name
  //                 </p>
  //                 <input
  //                   // onChange={(e)=>setName{e.target.value}}
  //                   id='name'
                    
  //                   placeholder='Your Name'
  //                   className=
  //                     'w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
  //                   type="text" required
  //                 />
  //               </div>
  //               <div className="w-full lgl:w-1/2 flex flex-col gap-4">
  //                 <p className="text-sm text-blue-400 uppercase tracking-wide">
  //                   Phone Number
  //                 </p>
  //                 <input
  //                   // onChange={(e) => setPhoneNumber{e.target.value}}
  //                   id='phoneNumber '
                  
  //                   placeholder='Phone Number'
  //                   className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                    
  //                   type="text"
  //                 />
  //               </div>
  //             </div>
  //             <div className="flex flex-col gap-4">
  //               <p className="text-sm text-blue-400 uppercase tracking-wide">
  //                 Email
  //               </p>
  //               <input
  //                 // onChange={handleSubmit}
  //                 id='email'
                  
  //                 placeholder='Email'
  //                 className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
  //                 type="email"
  //               />
  //             </div>
  //             <div className="flex flex-col gap-4">
  //               <p className="text-sm text-blue-400 uppercase tracking-wide">
  //                 Message
  //               </p>
  //               <textarea
              
  //                 id='message'
               
  //                 placeholder='Your Message'
  //                 className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
  //                 cols="30"
  //                 rows="8"
  //               ></textarea>
  //             </div>
  //             <div className="w-full">
  //               <button type="submit"
  //                 className="w-full h-12 rounded-lg text-base text-gray-600 tracking-wider uppercase hover:text-white duration-300 hover:border-designColor"
  //               >
  //                 Send Message
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  // </div>
  // // )

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