import React, { useEffect, useState } from 'react'
import createcontext from './CreateStore';

const Context = (props) => {
  const [passalldata, setpassalldata] = useState('');
const [superadminid, setsuperadminid] = useState('');
    const SuperAdminData=async()=>{
const res=await fetch('http://localhost:8080/api/adminprofile')
const data=await res.json()
console.log('fagsdjkfhbsdfbjdsabfsdbc',data.data[0]._id)
setsuperadminid(data.data)
    }
useEffect(()=>{
    SuperAdminData()
},[])
  return (
    <createcontext.Provider value={{SuperAdminData,superadminid ,setpassalldata,passalldata}}>
        {props.children}
    </createcontext.Provider>
  )
}

export default Context