import Image from 'next/image';
import profile from '../images/profile.png'
import AOS from 'aos'
import 'aos/dist/aos.css' 


const Top = () => {
  return (<>
    <div className="wrapper flex flex-col md:flex-row items-center gap-14 " data-aos="fade-in" >
      {/* Image */}
      <div className='w-44 h-44 rounded-full bg-black'>
      <Image className='w-44 h-44 rounded-full border-[1px] border-sky-700 p-2 object-cover'
       src={profile}
       alt="DP" />
      </div>
      {/* description */}
      <div className='w-3/4 flex flex-col gap-1 '>
        <h5 className='text-4xl font-bold text-white md:text-left text-center' >Dushyant <span className='text-4xl'>Khandelwal</span></h5>
        <h3 className='text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide text-center md:text-left '>A Full Stack Developer</h3>
        <p className='text-base tracking-wide text-center md:text-left'>Computer Science Student
         </p>
      </div>
    </div>
    </>
  )
}
export default Top
