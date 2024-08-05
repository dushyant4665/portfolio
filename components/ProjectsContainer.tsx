import Image from 'next/Image'


const ProjectsContainer = ({img,text,link}:props) => {
  return (
    <div data-aos="fade-in" className=''>
       <a href={link}>
     <div className='w-80 h-96 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group '  >
      <Image className='object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[5s]'
        width={350} height={350} src={img} 
       alt="AmazonClone"/>
      <p className='absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center text-sm font-semibold hover:duration-[3s] pl-1 pr-1'>
        {text}</p>
      </div>
     </a>
    </div>
  )
}

export default ProjectsContainer
