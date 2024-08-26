

const Title = ({text}:props) => {
  return (
    <div>
       <div className='flex items-center gap-4 text-2xl group  cursor-pointer pb-8'>
      <h4 className='text-3xl font-semibold relative overflow-hidden  cursor-pointer text-white pb-2'>
         {text}
        <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-700 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
      </h4>
      </div>
    </div>
  )
}
export default Title
