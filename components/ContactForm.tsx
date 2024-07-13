'use client'
import React,{useState} from 'react'
import ContactTitle from './ContactTitle';
import  {db} from '../app/firebaseConfig.js'



const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[phoneNumber,setPhoneNumber]=useState('')
  const [message, setMessage] = useState("");

const handleSubmit = async(e)=>{
e.preventdefault();
const added = await addDataToFirestore(name,phoneNumber,email,message);
if(added){
  setName('')
  setPhoneNumber('');
  setEmail('')
  setMessage('')

  alert('Data added to firestore DB!!')
}
};

  async function addDataToFirestore(name,phoneNumber,email,message){
    try{
      const docRef = await addDoc(collection(db,'messages'),{
        name:name,
        phoneNumber:phoneNumber,
        email:email,
        message:message,
      });
      console.log('Document written with ID:',docRef.id);
      return true;
    } catch(error){    console.error('Error adding document', error)
      return false;
}
    
  }

      
   


  return (
  <div
      className="w-full  pt-10 pb-0">
      <div className="flex justify-center items-center text-center">
        <ContactTitle myTitle="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full ">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          
          <div className="max-w-md  w-full mx-auto p-6 bg-transparent">
            
            
            <form  className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmit}>
              <div className="md:grid grid-cols-2 lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-blue-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    // onChange={(e)=>setName{e.target.value}}
                    id='name'
                    value={name}
                    placeholder='Your Name'
                    className=
                      'w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                    type="text" required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-blue-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    // onChange={(e) => setPhoneNumber{e.target.value}}
                    id='phoneNumber '
                    value={phoneNumber}
                    placeholder='Phone Number'
                    className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                    
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-blue-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  // onChange={handleSubmit}
                  id='email'
                  value={email}
                  placeholder='Email'
                  className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-blue-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={handleSubmit}
                  id='message'
                  value={name}
                  placeholder='Your Message'
                  className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button type="submit"
                  className="w-full h-12 rounded-lg text-base text-gray-600 tracking-wider uppercase hover:text-white duration-300 hover:border-designColor"
                >
                  Send Message
                </button>
              </div>
            </form>

  

            
          </div>
        </div>
      </div>
  </div>
  )}

export default Contact