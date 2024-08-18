import React from 'react'
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
const Delete = ({id,allorderdata}) => {
  const handledelete=async()=>{
    console.log('id',id)
    console.log('allorderdata',allorderdata)
    const res=await fetch(`http://localhost:8080/order/delete/${id}`,{
      method:'delete',
    })
    const response=await res.json()
    console.log('response',response)
    allorderdata()
  }
  return (
    <div className='w-40 h-20  bg-white shadow-md border rounded cursor-pointer flex flex-col justify-center  '>
    <div className='flex w-full h-10 hover:bg-slate-200 gap-2 items-center text-black'>
      <div className='text-xl pl-3'><CiEdit/></div>
      <p>Edit</p>
    </div>
    <div onClick={handledelete} className='flex gap-2 hover:bg-slate-200 h-10 items-center'>
      <div className='text-xl pl-3'><RiDeleteBin6Line/></div>
      <p className=''>Delete</p>
    </div>
  </div>
  )
}

export default Delete