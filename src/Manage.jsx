import React from 'react'
import img from './images/men.webp';
import { FaCalendarAlt, FaUser, FaCog, FaBell, FaRegClock,FaEnvelope } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';
import use from './images/women2.jpg'
import { NavLink } from 'react-router-dom';
const Manage = () => {
  return (
   < div className='flex lg:flex-row  flex-col lg:flex justify-center mt-[40px]'>
           {/* Sidebar */}
               <div className='lg:h-[660px] lg:w-[280px]   h-[450px] w-[320px]  ml-2 bg-gradient-to-t from-orange-500 to-pink-600 lg:rounded-tl-[10px] lg:rounded-bl-[10px] rounded-2xl'>
                   <img src={img} className='w-[65px] h-[67px] rounded-full mt-8 ml-5' alt="Admin" />
                   <div className='-mt-14 ml-24 space-y-0'>
                     <h4 className='text-white font-semibold'>Admin</h4>
                     <h3 className='text-white font-semibold'>Carry Trotti</h3>
                     <div className='lg:mt-[100px]  mt-[60px] -ml-[70px] text-xl'>
                     <NavLink to="/user" className="flex space-x-4 text-white">
  <FaUser className="text-white" />
  <h5 className="text-lg">User</h5>
</NavLink>

                  <NavLink to='/notify' className='flex space-x-4 mt-[20px] text-white'>
                    <FaBell className='text-white' />
                    <h5 className='text-lg'>Notification</h5>
                  </NavLink>
                  <NavLink to='/user3' className='flex space-x-4 mt-[20px] text-white' >
                    <FiMessageCircle className='text-white ' />
                    <h5 className='text-lg'>Message</h5>
                  </NavLink>
                  <NavLink  to='/manage 'className='flex space-x-4 mt-[20px] text-white'>
                    <FaCog className='text-white' />
                    <h5 className='text-lg'>Settings</h5>
                  </NavLink>
                     </div>
                   </div>
                 </div>
     
           {/* Main Content */}
           <div className='lg:w-[1080px] lg:h-[620px] bg-white lg:rounded-tr-[10px] lg:rounded-br-[10px] w-[320px] ml-2 rounded-[5px] mt-7'>
                 <div className='flex justify-between'>
                        {/* Search Bar */}
                        <div className='w-[270px] h-[35px] bg-gray-200 mt-5 ml-5 rounded'>
                          <MdSearch className='text-orange-600 text-2xl mt-2 ml-3' />
                        </div>
              
                        {/* Notifications */}
                       <div className='flex space-x-4 p-4'>
                                <FiMessageCircle className='text-orange-600 lg:mt-4 mt-2   text-3xl   lg:text-[18px]' />
                                <FaBell className='text-orange-600 lg:mt-4  mt-2 text-3xl lg:text-[18px]' />
                                <img src={img} className='w-12 h-12 rounded-full' alt="Profile" />
                              </div>
                            </div>
                      <h3 className='text-xl pl-5 text-gray-800 underline underline-offset-9 decoration-orange-600 decoration-2'>
          User Managment
        </h3>
        <div className='lg:w-[800px] lg:h-[470px] bg-rose-200   rounded-xl mt-5  w-[300px] ml-2 lg:ml-11'>
         <div className='flex '>
        <img src={use} className='lg:w-[120px] lg:h-[120px] rounded-full border-4 border-red-500 w-24 h-24 mt-14  lg:mt-11 ml-4' alt="" />
   <h2 className='text-xl font-semibold pt-24  pl-2 lg:pl-3'>Monik Joe</h2>
   <div className='flex lg:gap-1   gap-3 ml-[-190px] mt-[180px] lg:ml-14'>
    <div className='lg:w-[130px] lg:h-[35px] w-20 h-8 rounded-[14px]  lg:rounded-2xl bg-white text-center pt-1'>Edit</div>
    <div className='lg:w-[130px] lg:h-[35px] w-20 h-8 rounded-[14px]  text-red-500 lg:rounded-2xl bg-white text-center pt-1'>Delete</div>
    <div  className='lg:w-[130px] lg:h-[35px] w-20 h-8 rounded-[14px]  lg:ml-0 ml-[-5px] lg:rounded-2xl bg-white text-center pt-1'>Update</div>
   </div>
         </div>
         <div className='lg:flex gap-3 lg:ml-40'>
            <div className='lg:w-[270px]  w-[280px] ml-2  h-10  mt-5 lg:h-[43px] rounded bg-white pl-3 pt-2'>First name</div>
            <div className='lg:w-[270px]  h-10 mt-3 w-[280px] ml-2 lg:h-[43px] rounded bg-white pl-3 pt-2'>Last name</div>

  
            
        </div>
        <div className='lg:flex gap-3 lg:ml-40'>
            <div className='lg:w-[270px]  w-[280px] ml-2  h-10  mt-5 lg:h-[43px] rounded bg-white pl-3 pt-2'>Phone Number</div>
            <div className='lg:w-[270px]  h-10 mt-3 w-[280px] ml-2 lg:h-[43px] rounded bg-white pl-3 pt-2'>Email</div>

  
            
        </div>
        <div className='lg:flex gap-3 lg:ml-40'>
            <div className='lg:w-[270px]  w-[280px] ml-2  h-10  mt-5 lg:h-[43px] rounded bg-white pl-3 pt-2'>Address</div>
            <div className='lg:w-[270px]  h-10 mt-3 w-[280px] ml-2 lg:h-[43px] rounded bg-white pl-3 pt-2'>Contact</div>

  
            
        </div>
        <div className='lg:flex gap-3 lg:ml-40'>
            <div className='lg:w-[270px]  w-[280px] ml-2  h-10  mt-5 lg:h-[43px] rounded bg-white pl-3 pt-2'>Username</div>
            <div className='lg:w-[270px]  h-10 mt-3 w-[280px] ml-2 lg:h-[43px] rounded bg-white pl-3 pt-2'>Password</div>

  
            
        </div>
        <button className='bg-gradient-to-t from-orange-500 to-red-600 lg:w-[100px] w-[280px] h-[35px] lg:ml-40  mt-4  ml-2 lg:mt-7 text-white text-xl rounded'>Save</button>
        </div>
     
              </div>
  
              </div>
  )
}

export default Manage