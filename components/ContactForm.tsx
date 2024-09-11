// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import SubmitBtn from './SubmitBtn';

// const sendContactData = async (formData: FormData) => {
//   try {
//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(Object.fromEntries(formData.entries())),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to send message');
//     }

//     const data = await response.json();
//     return { data };
//   } catch (error) {
//     if (error instanceof Error) {
//       return { error: error.message };
//     }
//     return { error: 'An unknown error occurred' };
//   }
// };

// const ContactForm = () => {
//   const [pending, setPending] = useState(false);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setPending(true);

//     const formData = new FormData(event.currentTarget);
//     const { error } = await sendContactData(formData);

//     setPending(false); // Stop loading

//     if (error) {
//       toast.error(error);
//       return;
//     }

//     toast.success('Thank you! Your message has been successfully delivered to Dushyant');
//   };

//   return (
//     <div>
//       <div className='mt-32 flex justify-center items-center text-center'>
//         <motion.section
//           id="contact"
//           className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-gray-700 -mt-6 dark:text-white/80 sm:whitespace-nowrap text-center sm:text-left lg:text-[]">
//             Contact directly at{' '}
//             <a className="underline text-[13px] sm:text-[15px]" href="mailto:dushyantkhandelwal4665@gmail.com">
//               dushyantkhandelwal4665@gmail.com
//             </a>{' '}
//             or through this form.
//           </p>

//           <form
//             className="mt-10 flex flex-col dark:text-black"
//             onSubmit={handleSubmit}
//           >
//             <input
//               className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//               name="senderEmail"
//               type="email"
//               required
//               maxLength={500}
//               placeholder="Your email"
//             />
//          <textarea
//   className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none 
//             w-full sm:h-40 md:h-52 lg:h-64 xl:h-72"
//   name="message"
//   placeholder="Your message"
//   required
//   maxLength={5000}
// />

//             <SubmitBtn pending={pending} />
//           </form>
//         </motion.section>
//       </div>
//     </div>
//   );
// };



import React, { useState } from 'react';
import { motion } from 'framer-motion';
   import { toast } from 'react-toastify';
import SubmitBtn from './SubmitBtn';

// Function to send contact data to the server
const   sendContactData = async (formData:   FormData) => {
  try {
    // Send a POST request to the /api/contact endpoint
    const response = await fetch ('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    // Parse the response data
    const data = await response.json();
    return { data};
  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
          return { error: error.message };
    }
    return { error: 'An unknown error occurred' };
  }
};

// ContactForm component
const ContactForm = () => {
  const [pending, setPending] = useState(false);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true); // Start loading

    // Get the form data
    const formData = new FormData(event.currentTarget);
    const { error } = await sendContactData(formData);

    setPending(false); // Stop loading

    // Handle errors or success
    if (error) {
      toast.error(error);
      return;
    }

    toast.success('Thank you! Your message has been successfully delivered to Dushyant');
  };

  return (
    <div>
      <div className="mt-32 flex justify-center items-center text-center">
        <motion.section
          id="contact"
          className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Contact information */}
          <p className="text-gray-700 -mt-6 dark:text-white/80 sm:whitespace-nowrap text-center sm:text-left lg:text-[]">
            Contact directly at{' '}
            <a className="underline text-[13px] sm:text-[15px]" href="mailto:dushyantkhandelwal4665@gmail.com">
              dushyantkhandelwal4665@gmail.com
            </a>{' '}
            or through this form.
          </p>

          {/* Contact form */}
          <form
            className="mt-10 flex flex-col dark:text-black"
            onSubmit={handleSubmit}
          >
            {/* Email input */}
            <input
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />

            {/* Message textarea */}
            <textarea
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none 
                w-full sm:h-40 md:h-52 lg:h-64 xl:h-72"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />

            {/* Submit button */}
            <SubmitBtn pending={pending} />
          </form>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactForm;

// export default ContactForm;
