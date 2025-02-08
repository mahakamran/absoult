import React , { useState }  from 'react'
import img from "./images/download.png";
import { FaEye, FaEyeSlash, FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
      const [showPassword, setShowPassword] = useState(false);
    
      const togglePassword = () => {
        setShowPassword(!showPassword);
      };
    
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:mt-20 mt-12 px-4">
         {/* Left Section */}
         <div className="w-[100%] lg:w-[450px] max-w-[450px] h-[450px] lg:h-[600px] bg-gradient-to-t from-orange-500 to-red-500 rounded-tl-2xl rounded-bl-2xl mb-6 lg:mb-0">
           <img
             src={img}
             alt=""
             className="w-full h-[200px] lg:w-[1200px] lg:h-[400px] object-cover mt-5 lg:mt-16"
           />
           <h1 className="text-white text-4xl  font-semibold text-center lg:-mt-20">
             Absoult ssos
           </h1>
         </div>
   
         {/* Right Section */}
         <div className="w-[100%] lg:w-[83%]  max-w-[800px] h-[500px] lg:h-[600px] bg-gradient-to-br from-pink-600 to-orange-500 rounded-tr-2xl rounded-br-2xl">
           {/* Email Input */}
           <h3 className="text-white font-semibold lg:pl-[220px] pt-[50px] lg:pt-[100px] text-center lg:text-left">
             Email
           </h3>
           <input
             type="text"
             className="w-[90%] lg:w-[47%] px-16 ml-5  py-5 bg-white rounded-4xl mx-auto lg:ml-[200px] mt-3 placeholder-gray-400 placeholder-pr-56 focus:outline-none"
             placeholder="please enter your email"
           />
   
           {/* Password Input */}
           <h3 className="text-white font-semibold lg:pl-[220px] pt-[30px] text-center lg:text-left">
             Password
           </h3>
           <div className="relative w-[90%] lg:w-[47%] mx-auto lg:ml-[200px] mt-3">
             <input
               type={showPassword ? "text" : "password"}
               className="w-full px-16 py-5 bg-white rounded-4xl placeholder-gray-400 focus:outline-none"
               placeholder="please enter your password"
             />
             <span
               className="absolute top-1/2 right-4 lg:right-10 transform -translate-y-1/2 text-gray-400 cursor-pointer"
               onClick={togglePassword}
             >
               {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
             </span>
           </div>
   
           {/* Forget Password */}
           <h3 className="text-white text-center lg:text-left lg:pl-[380px] pt-[15px]">
             Forget password?
           </h3>
   
           {/* Login Button */}
           <div className="flex justify-center lg:justify-start">
  <NavLink to="/user" className="w-[130px] h-[42px] bg-white rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.2)] mt-[15px] lg:ml-[210px] flex items-center justify-center">
    <h2 className="text-[19px] text-transparent font-bold bg-clip-text bg-gradient-to-t from-pink-400 to-orange-600 text-center pt-[2 px]">
      Login
    </h2>
  </NavLink>
</div>
   
           {/* Social Media Login */}
           <div className="flex justify-center lg:justify-start space-x-4 mt-8 lg:ml-[210px]">
             <div className="w-12 h-12 bg-white flex items-center justify-center rounded-[10px] shadow-md">
               <FaApple size={24} className="text-gray-800" />
             </div>
             <div className="w-12 h-12 bg-white flex items-center justify-center rounded-[10px] shadow-md">
               <FaFacebook size={24} className="text-blue-600" />
             </div>
             <div className="w-12 h-12 bg-white flex items-center justify-center rounded-[10px] shadow-md">
               <FaGoogle size={24} className="text-red-500" />
             </div>
           </div>
   
           {/* Register Section */}
           <h2 className="text-white text-center lg:text-left font-semibold pt-[15px] lg:pl-[200px]">
             Don't have an account?{" "}
             <span className="text-white font-bold underline cursor-pointer">
               Register
             </span>
           </h2>
         </div>
       </div>
  )
}

export default Home