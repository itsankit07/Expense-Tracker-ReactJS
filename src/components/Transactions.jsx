import React from 'react'

const Transactions = ({title,amount,deletetrans,index,date}) => {
  return (
    <div className='w-full border-2 border-black h-20 flex rounded-lg justify-between items-center p-2 my-4'>
        <h1 className='font-semibold w-4/12 overflow-hidden'> {title.toUpperCase()} </h1>
        <h1 className='w-4/12'> {amount} </h1>
        <h1 className='w-3/12'>{date}</h1>
        <div className=''>
        <button onClick={()=>deletetrans(index)} >⛔</button>
        {/* <button>📝</button> */}
        </div>
    </div>
  )
}

export default Transactions