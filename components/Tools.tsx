import Title from './Title'
import {FaNodeJs} from 'react-icons/fa'
import ToolsContainer from './ToolsContainer'
import {SiJavascript} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { SiReplit } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Tools = () => {
  return (
    <div className="wrapper space-y-10" data-aos='fade-right'>
      <Title text={"Developer Tools"} icon=''/>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[45px] place-items-center ml-8 mr-8 '>
        <div className=" text-blue-500 hover:text-opacity-70 duration-300  " data-aos='fade-right'>
          <ToolsContainer
            title='VS Code'
            icon={<VscVscode />} />
        </div>
        <div className="text-white hover:text-opacity-70 duration-300 " data-aos='fade-right'>
          <ToolsContainer
            title='Intellij IDEA'
            icon={<SiIntellijidea />} />
        </div>
        <div className="text-orange-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='Replit'
            icon={<SiReplit />} />
        </div>
        <div className="text-gray-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='GitHub'
            icon={<FaGithub />} />
        </div>
        <div className="text-yellow-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='Firebase'
            icon={<IoLogoFirebase />} />
        </div>
        <div className="text-green-700 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='Mongodb'
            icon={<DiMongodb />} />
        </div>
        <div className="text-orange-500 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='PostMan'
            icon={<SiPostman />} />
        </div>
        <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right' >
          <ToolsContainer
            title='Nodejs'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-blue-500 hover:text-opacity-70 duration-300" data-aos='fade-right'>
          <ToolsContainer
            title='Tailwindcss'
            icon={<RiTailwindCssFill />} />
        </div>

      </div>

    </div>
  )
}

export default Tools