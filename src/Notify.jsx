import React from 'react';
import img from './images/men.webp';
import { FaUser, FaBell, FaCog, FaRegClock } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Notify = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center  p-4 max-w-[1200px]  mt-5 mx-auto overflow-hidden'>
      {/* Sidebar */}
      <div className='md:block  md:h-[620px] h-[450px]  lg:h-[660px] w-full md:w-[280px] bg-gradient-to-t from-orange-500 to-pink-600 rounded-lg p-5 mb-5 md:mb-0'>
        <div className='flex items-center space-x-3'>
          <img src={img} className='w-16 h-16 rounded-full' alt="Admin" />
          <div>
            <h4 className='text-white font-semibold'>Admin</h4>
            <h3 className='text-white font-semibold'>Carry Trotti</h3>
          </div>
        </div>
        <div className='mt-10 space-y-5'>
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

      {/* Main Content */}
      <div className='w-full md:w-[900px] h-auto  lg:h-[660px] md:h-[620px] bg-white rounded-lg shadow-md p-5 overflow-y-auto overflow-x-hidden'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Search Bar */}
          <div className='relative w-full md:w-[270px] bg-gray-200 p-2 rounded flex items-center mb-3 md:mb-0'>
            <MdSearch className='text-orange-600 text-2xl' />
          </div>

          {/* Notifications */}
          <div className='flex space-x-4 p-4'>
            <FiMessageCircle className='text-orange-600 text-[18px] mt-3' />
            <FaBell className='text-orange-600 text-[18px] mt-3 ' />
            <img src={img} className='w-12 h-12 rounded-full' alt="Profile" />
          </div>
        </div>

        <h3 className='text-xl  text-gray-800 underline underline-offset-9 decoration-orange-600 decoration-2'>
          Notification
        </h3>

    

        {/* Notification Items */}
        <div className='space-y-4 mt-4'>
          {['New', 'Yesterday', '4 Apr, 2023'].map((date, idx) => (
            <div key={idx}>
              <h3 className='text-lg font-semibold text-orange-600'>{date}</h3>
              {[1, 2].map((item) => (
                <div key={item} className='p-3 bg-gray-100 rounded-md mt-3 flex flex-col md:flex-row md:justify-between md:items-center w-full overflow-hidden'>
                  <p className='text-gray-700 flex-1 break-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className='flex items-center space-x-1 mt-2 md:mt-0'>
                    <FaRegClock className='text-orange-500' />
                    <p className='text-gray-700'>11:20</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notify;
