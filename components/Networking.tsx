import Title from './Title'
import NetworkingContainer from './NetworkingContainer'

const Networking = ({link,title}:props) => {
  return (
    <div className="wrapper space-y-10" data-aos='fade-right'>
    <Title text={"Networking and Protocols"}/>
    <div className='flex gap-4 flex-wrap'>
      <div className=" text-blue-500 hover:text-opacity-70 duration-300 " data-aos='fade-right'>
        <NetworkingContainer
          title='HTTP'
       />
      </div>
      <div className="text-white hover:text-opacity-70 duration-300" data-aos='fade-right'>
        <NetworkingContainer
          title='HTTPS'
       />
      </div>
      <div className="text-orange-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
        <NetworkingContainer
          title='FTP'
       />
      </div>
      <div className="text-green-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
        <NetworkingContainer
          title='TCP/IP'
        />
      </div>
      <div className="text-yellow-600 hover:text-opacity-70 duration-300" data-aos='fade-right'>
        <NetworkingContainer
          title='DNS'
   />
      </div>
   
      </div>

    </div>


  )
}
export default Networking
