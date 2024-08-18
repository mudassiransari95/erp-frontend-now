import React from 'react'
import { Link } from 'react-router-dom'

const Createcredit = () => {
  return (
    <div className='w-100 px-3 mt-4 ' style={{height:"100%"}}>
         <div className='w-full mt-3 h-10 flex  justify-between items-center'> 
<h1 className='fw-bold'>Create Voucher</h1>
<div className=' w-80 flex justify-between h-9' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
<Link to={'/creditvoucherlist'}  className='w-36  pl-3 pt-2 font-semibold  h-9 text-white rounded-t-md bg-purple-700' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Credit list</Link>
<Link to='/createcredit' className='w-64 h-9 text-md text-black  pt-2 pl-3' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}> Create Voucher </Link>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>

        {/* main div */}
        <div className='m-auto flex w-fit pt-3 gap-5'>

{/* sub-div */}
<div className='w-auto h-96 gap-8' >
<div class="collecion-input flex flex-col gap-10 w-96">
<div className='w-auto    flex flex-row'>
<select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
    <option selected>Select a  Party
    </option>
    <option>Others</option>
    <option >000-B2 (01752220026)</option>
    <option >NR(Buyer:4234242342)</option>
    <option >GB Textiles(Customer:)</option>
    <option >COATA(Supplier:)</option>
    <option >Line-2(Customer:)</option>
    <option >Line-1(Customer:)</option>
    <option >LC Waikiki(Buyer)</option>

</select>
<div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
</div>
<div className='w-auto    flex flex-row'>
<select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
    <option selected>Select 
    </option>
    <option>Credite Voucher No</option>
   
</select>
<div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' >+</div>
</div>
<div className='w-auto h-15   flex flex-row '>
  <input type='number' placeholder='Credit Voucher No' className='w-80 h-10 '  style={{outline:"none",width:"400px"}}/>
  </div>
  <div className='w-auto h-15   flex flex-row ' style={{width:"405px"}}>
  <input type='text' placeholder='Remark' className=' h-12 '  style={{outline:"none",width:"385px"}}/>
  </div>

</div>

</div>
{/* second-col */}
<div className='w-auto  gap-8' >
<div class="collecion-input flex flex-col gap-10 w-96">
<div className='w-auto h-12  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <p className='mt-3 ms-3'>
    Bill Date

    </p>
    {/* <label className='w-60 bg-white ms-5 mt-1 text-gray-400 pt-2' style={{fontSize:"13px"}}>Contact Date</label> */}
  <input type='date' placeholder='Enter Payment Mode' className='w-48 text-center h-8 ms-3' style={{border:"2px solid white"}} />
  </div>

<div className='w-auto    flex flex-row'>
<select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
    <option selected>Select a Payment Method
    </option>
    <option>Cash</option>
    <option >Bank</option>
    <option >Cheque</option>

   
</select>
<div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>
    <Link to='/Createaddbuyer'>+</Link>
</div>
</div>

<div className=' h-17    flex flex-row ' style={{width:"385px"}}>
  <input type='text' placeholder='Debit Amount' className='h-10 ' style={{width:"410px"}}  />
  </div>
  

</div>

</div>

        </div>

  
<div className=' w-96 mt-3 flex  gap-3 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </div>
  )
}

export default Createcredit