

const HostingContainer = ({title,icon}:props) => {
    return (
    //   <a href={link} target="_blank" data-aos='fade-right'>
    //   <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300">
    //     {title}
    //   </p>
    // </a>
    <div>
    <div className='items-center gap-8'>
      <span className='w-12 h-12 rounded-full  flex items-center justify-center text-5xl'> {icon}</span>
      <a href="">
      <p className='text-lg font-semibold text-gray-400'>{title}</p>
      </a>
    </div>
</div> 
    )
    // (
    //   <a href={link} target="_blank" data-aos='fade-right'>
    //   <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300">
    //     {title}
    //   </p>
    // </a>
    // )
  }
  export default HostingContainer