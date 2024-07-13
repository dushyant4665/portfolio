

const SkillsContainer = ({skilled,icon,link}:props) => {
  return (
    <a href={link}>
           <div>
          <div className='items-center gap-8 '>
          <span className='w-12 h-12 rounded-full place-items-center text-5xl'> {icon}</span>
          <p className='text-lg font-semibold text-gray-400'>{skilled}</p>
          </div>
      </div>
    </a>
  )
}

export default SkillsContainer
