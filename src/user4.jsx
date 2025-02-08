import React from 'react';
import img from './images/men.webp';
import img1 from './images/men2.jpg';
import img2 from './images/women.jpg';
import img3 from './images/women2.jpg';
import { FaCalendarAlt, FaUser, FaCog, FaBell, FaRegClock,FaEnvelope } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { FaPhone, FaCommentDots, FaEllipsisV } from "react-icons/fa";
import { MdSearch } from 'react-icons/md';
import ki from './images/downloado.png'
import map from './images/map6.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import use from './images/di.jpg'

const User = () => {
  return (
  < div className='flex lg:flex-row  flex-col lg:flex justify-center mt-[40px]'>
       {/* Sidebar */}
       <div className='lg:h-[660px] lg:w-[280px]  w-[380px]    h-[450px] ml-3 bg-gradient-to-t from-orange-500 to-pink-600 lg:rounded-tl-[10px] lg:rounded-bl-[10px] rounded-2xl'>
         <img src={img} className='w-[65px] h-[67px] rounded-full mt-8 ml-5' alt="Admin" />
         <div className='-mt-14 ml-24 space-y-0'>
           <h4 className='text-white font-semibold'>Admin</h4>
           <h3 className='text-white font-semibold'>Carry Trotti</h3>
           <div className='lg:mt-[100px]  mt-[60px] -ml-[70px] text-xl'>
             <div className='flex space-x-4 text-white '>
               <FaUser className=' text-white' />
               <h5 className='text-lg'>User</h5>
             </div>
             <div className='flex space-x-4 mt-[20px] text-white'>
               <FaBell className='text-white' />
               <h5 className='text-lg'>Notification</h5>
             </div>
             <div className='flex space-x-4 mt-[20px] text-white' >
               <FiMessageCircle className='text-white ' />
               <h5 className='text-lg'>Message</h5>
             </div>
             <div className='flex space-x-4 mt-[20px] text-white'>
               <FaCog className='text-white' />
               <h5 className='text-lg'>Settings</h5>
             </div>
           </div>
         </div>
       </div>
 
       {/* Main Content */}
       <div className='lg:w-[1100px]  lg:flex-row flex-col lg:h-[660px] bg-white w-[380px] ml-3  mt-5  rounded-2xl lg:rounded-tr-[10px] lg:rounded-br-[10px]'>
         <div className='flex justify-between items-center'>
           {/* Search Bar */}
           <div className='w-[270px] h-[35px] bg-gray-200 lg:mt-5  mt-5 lg:ml-5 ml-2 rounded'>
             <MdSearch className='text-orange-600 text-2xl mt-2 ml-3' />
           </div>
 
           {/* Notifications */}
           <div className='flex space-x-4 p-4 mt-4 lg:mt-0'>
                   <FiMessageCircle className='text-orange-600   text-[30px] lg:text-[18px] mt-3' />
                   <FaBell className='text-orange-600  text-[30px] lg:text-[18px] mt-3 ' />
                   <img src={img} className='w-12 h-12 rounded-full' alt="Profile" />
                 </div>
               </div>
       
 
         <h3 className='text-xl pl-5 text-gray-800 underline  lg:pt-0 pt-5 underline-offset-9 decoration-orange-600 decoration-2'>
           Meassages
         </h3>
 
     <div className='lg:w-[360px] lg:h-[100px] bg-gray-200 lg:rounded-xl w-[300px] rounded-[5px] h-[100px] ml-7 lg:ml-3 mt-5'>
         <img src={img1}  className='w-[50px] h-[50px] object-cover rounded-full ml-3'  alt="" />
         <h2 className='text-gray-600 font-semibold mt-[-40px] ml-18 text-xl '>Carry Toeff</h2>
         <h6 id='no' className='ml-18 text-gray-500'>Last seen 10 min ago</h6>
         <h4 className='ml-18 mt-1 text-gray-800'>Lorem ipsum dolor sit ammet</h4>
     </div>
     <div className='lg:w-[360px] lg:h-[100px] bg-gray-200 lg:rounded-xl  w-[300px] mt-5 ml-7 h-[100px] rounded-[5px] lg:ml-3 lg:mt-5 bg-gradient-to-t from-rose-200 to-rose-200' id='grt'>
         <img src={img2}  className='w-[50px] h-[50px] object-cover rounded-full ml-3 border-4 border-red-500' id='kiya' alt="" />
         <h2 className='text-gray-600 font-semibold mt-[-40px] ml-18 text-xl '>Monika Joe</h2>
         <h6 id='no' className='ml-18 text-gray-500'>online</h6>
         <h4 className='ml-18 mt-1 text-gray-800'>Lorem ipsum dolor sit ammet</h4>
     </div>
     <div className='lg:w-[360px] lg:h-[100px] bg-gray-200 lg:rounded-xl w-[300px] rounded-[5px] h-[100px] ml-7 mt-5  lg:ml-3 lg:mt-5'>
         <img src={img3}  className='w-[50px] h-[50px] object-cover rounded-full ml-3' id='kiya' alt="" />
         <h2 className='text-gray-600 font-semibold mt-[-40px] ml-18 text-xl '>Carry Toeff</h2>
         <h6 id='no' className='ml-18 text-gray-500'> online</h6>
         <h4 className='ml-18 mt-1 text-gray-800'>Lorem ipsum dolor sit ammet</h4>
     </div>
     <div className='lg:w-[360px] lg:h-[100px] bg-gray-200 lg:rounded-xl w-[300px] rounded-[5px] h-[100px] ml-7 lg:ml-3 mt-5'>
         <img src={img1}  className='w-[50px] h-[50px] object-cover rounded-full ml-3' id='kiya' alt="" />
         <h2 className='text-gray-600 font-semibold mt-[-40px] ml-18 text-xl '>Carry Toeff</h2>
         <h6 id='no' className='ml-18 text-gray-500'> online</h6>
         <h4 className='ml-18 mt-1 text-gray-800'>Lorem ipsum dolor sit ammet</h4>
     </div>
    
     <div className='lg:w-[370px] lg:h-[590px]  lg:border-5   border-gray-200 rounded-4xl    lg:mt-[-550px] lg:ml-[390px] '>
         <br />
         <div className='lg:w-[340px] lg:h-[230px] lg:rounded-3xl lg:ml-3 lg:mt-2 w-[300px] ml-7 rounded-[7px] mt-7  bg-gray-200'>
             <br />
          <img src={img2} className='w-[120px] h-[120px] object-cover rounded-full border-4 border-red-500 lg:ml-28 ml-20' alt="" />
         <h3 className='text-xl lg:text-center lg:pl-0 pl-[100px]'>Monika Joe</h3>        
         <h6 id='no' className='text-center text-gray-500'> online</h6>
       <div className='flex  text-orange-500 text-xl lg:ml-30 ml-28  pb-4 lg:mt-3 mt-3 mb-5'>
       <FaPhone className="transform scale-x-[-1] border-2 border-white rounded-full"/>
          <FaCommentDots className='ml-3  border-2 border-white rounded-full'/>
          <FaEllipsisV className='ml-3  border-2 border-white rounded-full'/>
       </div>
    
         </div>
         <div className='w-[250px] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl lg:ml-24 ml-24  mt-3  h-[70px] bg-gray-300'>
         <h3 className='pl-2 pt-2 text-gray-600'>Lorem ipsum dolor sit ammet</h3>
         <h3 className='pl-2 text-gray-600'>ncvplate libero et vilet interdum</h3>
         </div>
         <div className='w-[250px]   h-[70px] bg-gray-300  rounded-tr-2xl rounded-tl-2xl rounded-br-2xl mt-3 ml-2'>
          <img src={ki}  alt="" />
         </div>
         <div className='w-[230px] h-[130px] lg:ml-24  ml-32 mt-3 bg-gray-300 '>
           <img src={map} className='w-[220px] h-[110px] pt-2 object-cover ml-1' alt="" />
           <h6 id='mm'>Lorem ipsum is a dummy text</h6>
         </div>



{/* 
         
               <div className='w-[300px] h-[550px] lg:mt-[-540px]  ml-2 mt-7 lg:ml-[780px]'>
                 <img src={use} className='h-[540px] rounded-3xl' alt="" />
               </div> */}














               <div className='lg:w-[310px]  ml-7 h-[280px] bg-white w-[300px] lg:mt-[-550px] mt-11  lg:ml-[770px] border-5 border-gray-200 rounded-4xl'>
      <img src={img2} className='w-[80px] ml-5 mt-5 h-[80px] object-cover rounded-full border-4 border-red-500' alt="" />
      <h3 className='text-xl pl-5 text-gray-800 underline mt-[-50px] ml-24 underline-offset-9 decoration-orange-600 decoration-2'>
          Monika Joe
        </h3>
        <div className='flex justify-evenly mt-11'>
        < FaPhone  className="transform scale-x-[-1] mt-1  text-orange-500"/>
         <p className='text-gray-600'>009-766-656</p>o
        </div>
        <div className='flex justify-evenly mt-5'>
        < FaEnvelope  className="transform scale-x-[-1] mt-1  text-orange-500"/>
         <p className='text-gray-600'>123@gmail.com</p>
        </div>
        <div className='flex justify-evenly mt-5'>
        < FaMapMarkerAlt  className="transform scale-x-[-1] mt-1  text-orange-500"/>
         <p className='text-gray-600'>ABS-block-karachi</p>
        </div>
        </div>
        <div className='lg:w-[300px] w-[300px] h-[250px] ml-7 bg-white lg:h-[250px] lg:mt-14 mt-11 '>
         <img src={use}  className='w-full h-full object-cover rounded-3xl'alt="" />
        </div>
    </div>
               
       </div>

       </div>
  

  );
};

export default User;
