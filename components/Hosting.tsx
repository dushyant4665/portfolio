import Title from './Title'
import {FaNodeJs} from 'react-icons/fa'
import { SiNetlify } from "react-icons/si";
import { SiReplit } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { IoLogoVercel } from "react-icons/io5";
import HostingContainer from './HostingCotainer';

const Hosting = () => {
  return (

    
    <div className="wrapper space-y-10" data-aos='fade-right'>
      <Title text={"Hosting Platform"}/>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[45px] place-items-center ml-8 mr-8'>
        <div className=" text-teal-500 hover:text-opacity-70 duration-300 " data-aos='fade-right'>
          <HostingContainer
            title='Netlify'
            icon={<SiNetlify />} />
        </div>
        <div className="text-white hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='vercel'
            icon={<IoLogoVercel />} />
        </div>
        <div className="text-yellow-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Firebase'
            icon={<IoLogoFirebase />} />
        </div>
       

      </div>

    </div>
    
  )
}
export default Hosting
