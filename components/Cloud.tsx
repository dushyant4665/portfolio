import React from 'react'
import CloudContainer from './CloudContainer'
import Title from './Title' 
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";


const Cloud = () => {
  return (
    <div>
        <div className="wrapper space-y-10" data-aos='fade-right'>
      <Title text={"Cloud Skill"} icon=''/>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[45px] place-items-center ml-8 mr-8'>
        <div className=" text-yellow-700 hover:text-opacity-70 duration-300 " data-aos='fade-right'>
          <CloudContainer
            title='AWS'
            icon={<FaAws />}/>
        </div>
        <div className="text-sky-700 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <CloudContainer
            title='Azure'
            icon={<VscAzure />}/>
        </div>
        <div className="text-yellow-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <CloudContainer
            title='Firebase'
            icon={<IoLogoFirebase />} />
        </div>
       

      </div>

    </div>


    </div>
  )
}
export default Cloud