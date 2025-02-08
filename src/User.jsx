import React from 'react';
import img from './images/men.webp';
import img1 from './images/men2.jpg';
import img2 from './images/women.jpg';
import img3 from './images/women2.jpg';
import { FaCalendarAlt, FaUser, FaCog, FaBell, FaRegClock,FaEnvelope } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';
import { NavLink } from "react-router-dom";

const User = () => {
  return (
   < div className='flex lg:flex-row  flex-col lg:flex justify-center mt-[40px]'>
      {/* Sidebar */}
        <div className='lg:h-[660px] lg:w-[280px]  h-[450px] w-[360px]  ml-7 bg-gradient-to-t from-orange-500 to-pink-600 lg:rounded-tl-[10px] lg:rounded-bl-[10px] rounded-2xl'>
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
      <div className='lg:w-[1080px] lg:h-[620px] bg-white lg:rounded-tr-[10px]    w-[360px] rounded-[5px] ml-7 mt-7 lg:rounded-br-[10px]'>
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

        <h3 className='text-xl pl-5 text-gray-800 underline underline-offset-9 decoration-orange-800 decoration-2'>
          Recent Users
        </h3>

        <div className='lg:flex flex-nowrap'>
          <div className='w-[150px] h-[170px] bg-gray-200  ml-16 lg:ml-8 mt-8 rounded-xl'>
            <img src={img} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Michiel Fred</h4>
          </div>
          <div className='w-[150px] h-[170px] bg-gray-200  ml-16 lg:ml-8 mt-8 rounded-xl'>
            <img src={img1} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Michiel Fred</h4>
          </div>
          <div className='w-[150px] h-[170px] bg-gray-200  ml-16 lg:ml-8 mt-8 rounded-xl'>
            <img src={img2} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Martha James</h4>
          </div>
          <div className='w-[150px] h-[170px] bg-gray-200   ml-16 lg:ml-8 mt-8 rounded-xl'>
            <img src={img3} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Monicha Joe</h4>
          </div>
          <div className='w-[300px] h-auto ml-8 lg:mt-[-35px] mt-11'>
            <h3 className='text-xl lg:pl-5  text-gray-800 underline underline-offset-9 decoration-orange-600 decoration-2'>
              Notification
            </h3>
            <div className='flex lg:justify-between lg:mt-8 mt-10'>
              <div className='flex'>
                <FaCalendarAlt className='text-orange-500 mt-1' />
                <h6 className='pl-2'>Monday 20 Feb</h6>
              </div>
              <div className='flex lg:ml-0  ml-18'>
                <FaRegClock className='text-orange-500 mt-1' />
                <h6 className='pl-2'>11:20</h6>
              </div>
            </div>

            <div className='flex w-[280px] h-[50px] bg-gray-200 lg:ml-1 lg:mr-0 mt-8 rounded-xl'>
              <img src={img1} className='w-10 h-10 rounded-full ml-2 mt-2' alt="User" />
              <h4 className='pl-2 pt-3'>Michel Fres</h4>
              <FaBell className='text-orange-500 mt-4 ml-28 text-xl' />
            </div>

            <div className='flex w-[280px] h-[50px] bg-gray-200 lg:ml-1 lg:mr-0  mt-4 rounded-xl'>
              <img src={img3} className='w-10 h-10 rounded-full ml-2 mt-1' alt="User" />
              <h4 className='pl-2 pt-3'>Michel Fres</h4>
              <FaBell className='text-orange-500 mt-4 ml-28 text-xl' />
            </div>
          </div>
        </div>

        <div className='flex lg:justify-between items-center  lg:w-[1040px] w-[350px]  mt-10  ml-3 h-10 lg:h-[35px] bg-gray-200 lg:mt-3 lg:ml-4 rounded'>
          <h4 className='pt-1 lg:pl-2 pl-3 font-semibold'>Name</h4>
          <h4 className='pt-1  pl-7 lg:pl-0 font-semibold'>Phone</h4>
          <h4 className='pt-1  pl-7  lg:pl-0 font-semibold'>Email</h4>
          <h4 className='pt-1  pl-7 lg:pl-0   pr-3 font-semibold'>Address</h4>
       
        </div>

        <div className='flex mt-5'>
          <img src={img} className='w-10 h-10 rounded-full lg:ml-[50px] ml-7' alt="User" />
          <p className='lg:pl-[250px] pl-4 mt-3  text-[12px] lg:text-sm'>4676049</p>
          <h4 className='lg:pl-[200px]  text-[12px]  pl-7  pt-3 lg:text-sm'>123@gamil.com</h4>
          <h4 className='lg:pl-[100px]  text-[12px]  ml-2 pt-3 lg:text-sm'>SC,Robart,MD 34556-876</h4>
          <FaEnvelope className='text-orange-500 ml-7'/>
          <FiMessageCircle className='text-orange-500 ml-4'/>

        </div>

        <hr className='text-gray-400 mt-2' />

        <div className='flex mt-5'>
          <img src={img1} className='w-10 h-10 rounded-full lg:ml-[50px] ml-7' alt="User" />
          <p className='lg:pl-[250px] pl-4 mt-3  text-[12px] lg:text-sm'>4676049</p>
          <h4 className='lg:pl-[200px]  text-[12px]  pl-7  pt-3 lg:text-sm'>123@gamil.com</h4>
          <h4 className='lg:pl-[100px]  text-[12px]  ml-2 pt-3 lg:text-sm'>SC,Robart,MD 34556-876</h4>
          <FaEnvelope className='text-orange-500 ml-7'/>
          <FiMessageCircle className='text-orange-500 ml-4'/>

        </div>

        <hr className='text-gray-400 mt-2' />

        <div className='flex mt-5'>
          <img src={img2} className='w-10 h-10 rounded-full lg:ml-[50px] ml-7' alt="User" />
          <p className='lg:pl-[250px] pl-4 mt-3  text-[12px] lg:text-sm'>4676049</p>
          <h4 className='lg:pl-[200px]  text-[12px]  pl-7  pt-3 lg:text-sm'>123@gamil.com</h4>
          <h4 className='lg:pl-[100px]  text-[12px]  ml-2 pt-3 lg:text-sm'>SC,Robart,MD 34556-876</h4>
          <FaEnvelope className='text-orange-500 ml-7'/>
          <FiMessageCircle className='text-orange-500 ml-4'/>

        </div>
      </div>
    </div>
  );
};

export default User;
