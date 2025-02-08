import React from 'react';
import img from './images/men.webp';
import img1 from './images/men2.jpg';
import img2 from './images/women.jpg';
import img3 from './images/women2.jpg';
import { FaCalendarAlt, FaUser, FaCog, FaBell, FaRegClock,FaEnvelope } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';

const User = () => {
  return (
    <>
     < div className='flex justify-center ml-10  absolute mt-[50px]'>
      {/* Sidebar */}
      <div className='h-[620px] w-[280px] bg-gradient-to-t from-orange-500 to-pink-600 rounded-tl-[10px] rounded-bl-[10px]'>
        <img src={img} className='w-[65px] h-[67px] rounded-full mt-8 ml-5' alt="Admin" />
        <div className='-mt-14 ml-24 space-y-0'>
          <h4 className='text-white font-semibold'>Admin</h4>
          <h3 className='text-white font-semibold'>Carry Trotti</h3>
          <div className='mt-[100px] -ml-[70px] text-xl'>
            <div className='flex space-x-4 text-white 'id='active'>
              <FaUser className='text-orange-600  ' />
              <h5 className='text-lg'>User</h5>
            </div>
            <div className='flex space-x-4 mt-[20px] text-white'>
              <FaBell className='text-white' />
              <h5 className='text-lg'>Notification</h5>
            </div>
            <div className='flex space-x-4 mt-[20px] text-white'>
              <FiMessageCircle className='text-white' />
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
      <div className='w-[1080px] h-[620px] bg-white rounded-tr-[10px] rounded-br-[10px]'>
        <div className='flex justify-between'>
          {/* Search Bar */}
          <div className='w-[270px] h-[35px] bg-gray-200 mt-5 ml-5 rounded'>
            <MdSearch className='text-orange-600 text-2xl mt-2 ml-3' />
          </div>

          {/* Notifications */}
          <div className='flex space-x-4 p-4'>
            <FiMessageCircle className='text-orange-600 mt-4 text-[18px]' />
            <FaBell className='text-orange-600 mt-4 text-[18px]' />
            <img src={img} className='w-12 h-12 rounded-full' alt="Profile" />
          </div>
        </div>

        <h3 className='text-xl pl-5 text-gray-800 underline underline-offset-9 decoration-orange-800 decoration-2'>
          Recent Users
        </h3>

        <div className='flex'>
          <div className='w-[150px] h-[170px] bg-gray-200 ml-8 mt-8 rounded-xl'>
            <img src={img} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Michiel Fred</h4>
          </div>
          <div className='w-[150px] h-[170px] bg-gray-200 ml-8 mt-8 rounded-xl'>
            <img src={img1} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Michiel Fred</h4>
          </div>
          <div className='w-[150px] h-[170px] bg-gray-200 ml-8 mt-8 rounded-xl'>
            <img src={img2} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Martha James</h4>
          </div>
          <div className='w-[150px] h-[170px] bg-gray-200 ml-8 mt-8 rounded-xl'>
            <img src={img3} className='w-[130px] h-[110px] ml-[8px] rounded-xl mt-2' alt="User" />
            <h4 className='font-semibold pl-3 pt-2'>Monicha Joe</h4>
          </div>
          <div className='w-[300px] h-auto ml-8 mt-[-35px]'>
            <h3 className='text-xl pl-5 text-gray-800 underline underline-offset-9 decoration-orange-600 decoration-2'>
              Notification
            </h3>
            <div className='flex justify-between mt-8'>
              <div className='flex'>
                <FaCalendarAlt className='text-orange-500 mt-1' />
                <h6 className='pl-2'>Monday 20 Feb</h6>
              </div>
              <div className='flex'>
                <FaRegClock className='text-orange-500 mt-1' />
                <h6 className='pl-2'>11:20</h6>
              </div>
            </div>

            <div className='flex w-[280px] h-[50px] bg-gray-200 ml-1 mt-8 rounded-xl'>
              <img src={img1} className='w-10 h-10 rounded-full ml-2 mt-2' alt="User" />
              <h4 className='pl-2 pt-3'>Michel Fres</h4>
              <FaBell className='text-orange-500 mt-4 ml-28 text-xl' />
            </div>

            <div className='flex w-[280px] h-[50px] bg-gray-200 ml-1 mt-4 rounded-xl'>
              <img src={img3} className='w-10 h-10 rounded-full ml-2 mt-1' alt="User" />
              <h4 className='pl-2 pt-3'>Michel Fres</h4>
              <FaBell className='text-orange-500 mt-4 ml-28 text-xl' />
            </div>
          </div>
        </div>

        <div className='flex justify-between w-[1040px] h-[35px] bg-gray-200 mt-3 ml-4 rounded'>
          <h4 className='pt-1 pl-2 font-semibold'>Name</h4>
          <h4 className='pt-1 font-semibold'>Phone</h4>
          <h4 className='pt-1 font-semibold'>Email</h4>
          <h4 className='pt-1 pr-3 font-semibold'>Address</h4>
       
        </div>

        <div className='flex mt-5'>
          <img src={img} className='w-10 h-10 rounded-full ml-[50px]' alt="User" />
          <p className='pl-[250px] text-sm'>4676049</p>
          <h4 className='pl-[200px] text-sm'>123@gamil.com</h4>
          <h4 className='pl-[100px] text-sm'>SC,Robart,MD 34556-876</h4>
          <FaEnvelope className='text-orange-500 ml-7'/>
          <FiMessageCircle className='text-orange-500 ml-4'/>

        </div>

        <hr className='text-gray-400 mt-2' />

        <div className='flex mt-5'>
          <img src={img1} className='w-10 h-10 rounded-full ml-[50px]' alt="User" />
          <p className='pl-[250px] text-sm'>9428475</p>
          <h4 className='pl-[200px] text-sm'>123@gamil.com</h4>
          <h4 className='pl-[100px] text-sm'>SC,Robart,MD 34556-876</h4>
          <FaEnvelope className='text-orange-500 ml-7'/>
          <FiMessageCircle className='text-orange-500 ml-4'/>
        </div>

        <hr className='text-gray-400 mt-2' />

        <div className='flex mt-5'>
          <img src={img2} className='w-10 h-10 rounded-full ml-[50px]' alt="User" />
          <p className='pl-[250px] text-sm'>5839583</p>
          <h4 className='pl-[200px] text-sm'>123@gamil.com</h4>
          <h4 className='pl-[100px] text-sm'>SC,Robart,MD 34556-876</h4>
          <FaEnvelope className='text-orange-500 ml-7'/>
          <FiMessageCircle className='text-orange-500 ml-4'/>
        </div>
        {/* <div className='w-[400px] h-[400px] bg-red-600 relative'></div> */}
      </div>

    </div>
    <br />
    <br />
    
        <div className='w-[1360px] ml-10 h-[624px]   relative' id='hide'></div>
        <div className='w-[800px] h-[590px] mt-5 rounded-2xl  relative ml-[450px]' id='show'>
            <br />
            <div className='w-[760px] h-[180px] ml-[10px] rounded-3xl  bg-rose-200'>
                <br />
            <img src={img2} className='w-[150px] h-[150px] ml-5 object-cover rounded-full border-5 border-red-500' alt="" />
              <h2 className='text-2xl mt-[-135px] ml-48 font-semibold text-gray-500'>Martha james</h2>
              <h3 className='text-gray-500 ml-48 mt-3'>Date of Birth</h3>
              <h3 className='text-gray-500 ml-48 mt-1'>Phone</h3>
              <h3 className='text-gray-500 ml-48 mt-1'>Email</h3>
              <h3 className='text-gray-600 font-semibold  mt-[-80px] ml-[400px]'>06/16/1980</h3>
              <h3 className='text-gray-600  font-semibold mt-1 ml-[400px] '>555-221-1011</h3>
              <h3 className='text-gray-600 ml-[400px] font-semibold mt-1'>123@gmail.com</h3>
            </div>
            <div className='flex justify-evenly mt-18'>
                <h3 className='mt-[-15px]' >Name</h3>
                <hr className='w-[150px] text-gray-400 ' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
            <div className='flex justify-evenly mt-8'>
                <h3 className='mt-[-15px]' > First Name</h3>
                <hr className='w-[150px] text-gray-400 ' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
            <div className='flex justify-evenly mt-8'>
                <h3 className='mt-[-15px]' > Last Name</h3>
                <hr className='w-[150px] text-gray-400 ' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
            <div className='flex justify-evenly mt-8'>
                <h3 className='mt-[-15px]' >Phone Number</h3>
                <hr className='w-[150px] text-gray-400 mr-7' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
            <div className='flex justify-evenly mt-8'>
                <h3 className='mt-[-15px]' >Email Address</h3>
                <hr className='w-[150px] text-gray-400 ' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
            <div className='flex justify-evenly mt-8'>
                <h3 className='mt-[-15px]' >City</h3>
                <hr className='w-[150px] text-gray-400  ml-20' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
            <div className='flex justify-evenly mt-8'>
                <h3 className='mt-[-15px]' >Street Name</h3>
                <hr className='w-[150px] text-gray-400 ml-16 ' />
                <hr  className='w-[150px] text-gray-400' />
                <hr  className='w-[150px] text-gray-400' />
            </div>
        </div>
    </>
  
  );
};

export default User;
