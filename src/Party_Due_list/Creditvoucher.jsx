import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { LuPrinter } from 'react-icons/lu';

import { FaFilePdf } from 'react-icons/fa6';
import { FaFileCsv } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Creditvoucher = () => {
  

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // print tablenmfnjidsgdf
 
  const handlePdf=async()=>{

    const doc = new jsPDF()
    doc.autoTable({ html: '.tableone' })
    doc.save('table.pdf')
  }


  return (
    <div className='w-100 px-4 bg-white' style={{height:"100vh"}}>
            <div className=' pt-4 mt-10 h-10 flex justify-between '> 
<h1 className='fw-bold'>Credit Voucher</h1>


<div className=' w-80 flex justify-between h-9' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
<Link to={'/creditvoucherlist'}  className='w-36  pl-3 pt-2 font-semibold  h-9 text-white rounded-t-md bg-purple-700' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Credit list</Link>
<Link to='/createcredit' className='w-64 h-9 text-md text-black  pt-2 pl-3' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}> Create Credit </Link>

</div>



      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
    
      {/* form */}
      <div className='form w-100  h-16  flex justify-between items-center '>
     
<input type='text' className='w-48 h-8 font-bold rounded px-2 border' placeholder='Search...' />
<div className='w-40 flex  justify-center gap-3 items-center'>
<LuPrinter onClick={handlePrint}  className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf}  className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>
</div> 
      </div>

       {/* table */}
       <table className="tableone w-full " style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-200 h-10 border' >
      <th scope="col">SL.</th>
      <th scope="col">Bill No.</th>
      <th scope="col">Voucher No.</th>
      <th scope="col">Transaction By</th>
      <th scope="col">Party</th>
      <th scope="col">Payment Type</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Amount</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className='h-10 border'>
      <th scope="row">1</th>
      <td>0000003</td>
      <td>25 Jul, 2024</td>
      <td>NR</td>
      <td>Buyer</td>
      <td>100%COTTON TWILL AOP</td>
      <td>NR</td>
      <td>NR</td>

    </tr>

   
  
  </tbody>
</table>
    </div>
  )
}

export default Creditvoucher