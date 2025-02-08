
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import User from './User'
import { MdChat } from "react-icons/md";
import Notify from './Notify';
import Manage from './Manage';
import User2 from './user2';
import User3 from './user3';
import User4 from './user4';
import User5 from './user5';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/notify' element={<Notify/>}/>
        <Route path='/manage' element={<Manage/>}/>
        <Route  path='/user2' element={<User2/>}/>
        <Route path='/user3' element={<User3/>}/>
        <Route path='/user4' element={<User4/>}/>
        <Route path='/user5' element={<User5/>}/>
      </Routes>
  
    </div>
  )
}

export default App