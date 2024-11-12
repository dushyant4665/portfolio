
// // import SkillsContainer from './SkillsContainer'
// // import {SiJavascript} from 'react-icons/si'
// import { GiSkills } from "react-icons/gi";
// import Title from "./Title";
// import FoundationContainer from './FoundationContainer'


// const Foundation = () => {
 
//     return (
//       <div className="wrapper" data-aos='fade-right'>
//         <Title text="Computer Science Foundations" icon='' />
//         <div className="flex gap-4 flex-wrap">
//           <FoundationContainer
//             title="Data Structures and Algorithm" link=""/>
//             <p> and </p>
// {/*           <NetworkingContainer 
//           title="HTTPS" link="" /> */}
//           <FoundationContainer 
//           title="Object Oriented Programing" link="" />
//           {/* <FoundationContainer 
//           title="TCP/IP" link="" />
//           <FoundationContainer
//           title="DNS"
//           link=""
//           /> */}
//         </div>
//       </div>
//     );
//   };
// export default Foundation






import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import FoundationContainer from './FoundationContainer';

const Foundation = () => {
    return (
     
        // <div className="wrapper bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-right">
      <div className="wrapper" data-aos='fade-right'>
            <Title text="Computer Science Foundations" icon={<GiSkills className="text-2xl text-indigo-500" />} />
            <div className="flex gap-4 flex-wrap">
                <FoundationContainer title="Data Structures & Algorithms" link="" />
                <span className="text-gray-500 font-semibold self-center">and</span>
                <FoundationContainer title="Object-Oriented Programming Concepts" link="" />
            </div>
        </div>
    );
};

export default Foundation;

