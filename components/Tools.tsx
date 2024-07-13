import Title from './Title'
import {FaNodeJs} from 'react-icons/fa'
import ToolsContainer from './ToolsContainer'
import {SiJavascript} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { SiReplit } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BsDatabaseSlash } from "react-icons/bs";
import { SiPostman } from "react-icons/si";

const Tools = () => {
  return (
    <div className="wrapper space-y-10">
      <Title text={"Tools"}/>
      <div className='grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6 gap-20 place-items-center ml-8 mr-8'>
        <div className=" text-blue-500 hover:text-opacity-70 duration-300">
          <ToolsContainer
            title='VS Code'
            icon={<VscVscode />} />
        </div>
        <div className="text-white">
          <ToolsContainer
            title='Intellij IDEA'
            icon={<SiIntellijidea />} />
        </div>
        <div className="text-orange-600">
          <ToolsContainer
            title='Replit'
            icon={<SiReplit />} />
        </div>
        <div className="text-green-600">
          <ToolsContainer
            title='Node.Js'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-yellow-600">
          <ToolsContainer
            title='Firebase'
            icon={<IoLogoFirebase />} />
        </div>
        <div className="text-gray-600">
          <ToolsContainer
            title='NoSQl DataBases'
            icon={<BsDatabaseSlash />} />
        </div>
        <div className="text-orange-500">
          <ToolsContainer
            title='PostMan'
            icon={<SiPostman />} />
        </div>
        <div className="text-green-600">
          <ToolsContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-green-600">
          <ToolsContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>
        <div className="text-green-600">
          <ToolsContainer
            title='Replit'
            icon={<FaNodeJs />} />
        </div>

      </div>

    </div>
  )
}

export default Tools
