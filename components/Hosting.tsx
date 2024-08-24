import Title from './Title'
import {FaNodeJs} from 'react-icons/fa'
import ToolsContainer from './ToolsContainer'
import {SiJavascript} from 'react-icons/si'

import HostingContainer from './HostingCotainer';
import { FaGithub } from "react-icons/fa";

const Networks = () => {
  return (
    <div className="wrapper space-y-10" data-aos='fade-right'>
      <Title text={"Hosting Tools"}/>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[45px] place-items-center ml-8 mr-8'>
        {/* <div className=" text-blue-500 hover:text-opacity-70 duration-300 " data-aos='fade-right'>
          <HostingContainer
            title='VS Code'
            icon={<VscVscode />} />
        </div>
        <div className="text-white hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Intellij IDEA'
            icon={<SiIntellijidea />} />
        </div>
        <div className="text-orange-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Replit'
            icon={<SiReplit />} />
        </div> */}
        <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Node.Js'
            icon={<FaNodeJs />} />
        </div>
        {/* <div className="text-yellow-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Firebase'
            icon={<IoLogoFirebase />} />
        </div>
        <div className="text-gray-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='NoSQl DataBases'
            icon={<BsDatabaseSlash />} />
        </div>
        <div className="text-orange-500 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='PostMan'
            icon={<SiPostman />} />
        </div> */}
        <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right' >
          <HostingContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <HostingContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>

      </div>

    </div>
  )
}
export default Networks
