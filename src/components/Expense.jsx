import React, { useEffect, useState } from 'react'
import Transactions from './Transactions';
const Expense = () => {




  const stored_data = localStorage.getItem("trans")?JSON.parse(localStorage.getItem("trans")):[];
  const [trans,setTrans] = useState(stored_data);
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const[date,setDate] = useState("");
  

  // Header Values ---

  let income = trans.filter(item => item.amount > 0).reduce((acc, item) => (acc += parseInt(item.amount)), 0);
  let total = trans.reduce((acc, item)=>(acc += parseInt(item.amount)), 0);
  let expense = (trans.filter(item => item.amount < 0).reduce((acc, item)=>(acc += parseInt(item.amount)), 0) * -1);



  const handleSubmit = (e) =>{
        e.preventDefault();
        setTrans([...trans,{title:title,amount:amount,date:date}]);
        setTitle("");
        setAmount("");
        console.log(trans);
  }

  // Delete Transaction

  const deletetrans = (index) => {
       const filteredres = trans.filter((val,i)=>{
              return i!==index;
       })
       setTrans(filteredres)
       income = trans.filter(item => item.amount > 0).reduce((acc, item) => (acc += parseInt(item.amount)), 0);
       total = trans.reduce((acc, item)=>(acc += parseInt(item.amount)), 0);
       expense = (trans.filter(item => item.amount < 0).reduce((acc, item)=>(acc += parseInt(item.amount)), 0) * -1);

  }

  // store to local storage --

  useEffect(()=>{
    localStorage.setItem("trans",JSON.stringify(trans));
  },[trans])

  return (
    <div className='w-6/12 h-full m-auto'>
      <div className='h-28 border-2 border-black my-2'>
        <h1 className=' text-center text-2xl font-bold'>Balance</h1>

        <div className='flex justify-between p-4 text-lg font-bold'>

          <div className='text-green-600'>
          <p>Income</p>
          <p>Rs.{income}</p>
          </div>
          <div className='text-blue-900'>
            <p>Total</p>
            <p>Rs.{total}</p>
          </div>
          <div className='text-red-700'>
            <p>Expense</p>
            <p>Rs.{expense}</p>
          </div>

        </div>
       
      </div>
       <div className='w-full  border-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-200 flex flex-col flex-wrap'>
        <h1 className='text-center text-3xl font-semibold p-2'>Add Transaction</h1>
        <form action="" className='flex flex-col' onSubmit={handleSubmit}>
          
          <div className='flex justify-around'>

          <div className='p-3 '>
            <label className='text-lg' htmlFor="">Title :</label> 
            <input className='p-2 outline-none' type="text" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>

          <div className='p-3'>
            <label className='text-lg' htmlFor="">Enter Money : </label> 
            <input className='p-2 outline-none' type="number" value ={amount} onChange={(e)=>setAmount(e.target.value)} />
          </div>
          
          <div className='p-3'>
             <label className='text-lg' htmlFor="">Date:</label> 
             <input type="datetime" className='p-2 outline-none' placeholder='DD/MM/YYYY' onChange={(e)=>setDate(e.target.value)} />
          </div>
          
          </div>

          <button className='border-2 border-black w-24 m-auto p-2 mt-2 '>Add</button>

        </form>
    </div>
    {
      trans.map((item,index)=>{
      return  <Transactions key = {index} title ={item.title} amount={item.amount} deletetrans = {deletetrans} index = {index} date = {item.date}/>
      })
    }
    </div>
  )
}

export default Expense