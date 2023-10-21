import React, { useState } from 'react'
import Expense from './Expense';

const Header = () => {

    const[btnName,setBtnName] = useState("Login");
    

  return (
    <div className='w-full h-screen '>
    <div className='bg-pink-100  w-full h-20 flex flex-row justify-between '>
        <div>
     <img className='w-20 p-2'
     src="https://cdn-icons-png.flaticon.com/512/5501/5501375.png" alt="" />
     </div>
     <h1 className='text-3xl flex justify-center items-center '>Expense Tracker</h1>
        <div className='flex justify-center items-center p-5'>
        <button 
        onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}} className='bg-slate-400 p-3 font-semibold'>{btnName}</button>
     </div>
    </div>
    <Expense/>
    </div>
  )
}

export default Header