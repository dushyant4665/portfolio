import Title from './Title'
import SkillsContainer from './SkillsContainer'
import {SiJavascript} from 'react-icons/si'


const MySkills = () => {
  return (
    <div className='wrapper space-y-10'>
      <Title text={'Skills'} />
      <div className='grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6 gap-20 place-items-center ml-8 mr-8'>
        <div className='text-yellow-500 rounded cursor-pointer hover:text-opacity-70 duration-300 '>
        <SkillsContainer 
        link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        skilled={'JavaScript'} 
        icon={<SiJavascript/>}/>
        </div>
      <div className='text-yellow-500 rounded cursor-pointer '>
        <SkillsContainer link=''
        skilled={'JavaScript'} 
        icon={<SiJavascript/>}/>
      </div>
      <div className='text-yellow-500 rounded cursor-pointer '>
        <SkillsContainer 
        link='' 
        skilled={'JavaScript'} 
        icon={<SiJavascript/>}/>
      </div>
      <div className='text-yellow-500 rounded cursor-pointer '>
        <SkillsContainer 
        link='' 
        skilled={'JavaScript'}
        icon={<SiJavascript/>}/>
      </div>
      <div className='text-yellow-500 rounded cursor-pointer'>
        <SkillsContainer 
        link='' 
        skilled={'JavaScript'} 
        icon={<SiJavascript/>}/>
      </div>
      <div className='text-yellow-500 rounded cursor-pointer '>
        <SkillsContainer 
        link='' 
        skilled={'JavaScript'} 
        icon={<SiJavascript/>}/>
      </div>
      </div>
    </div>
  )
}

export default MySkills
