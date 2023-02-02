import React from 'react'
import { useState,useEffect } from 'react'
import { ShowUser } from '../Api/Api'


const ShowUserData = () => {
    const [tableData,setTableData]=useState([])

    const getAllUser=async()=>{
            const response=await ShowUser()
            console.log(response.data);
            setTableData(response.data)
    }


    useEffect(() => {
    
        getAllUser()
    }, [])
    
  return (
<div className='main-table-con min-h-[77.2vh] CurdHOme'>

<table id="Main_Table">
<thead> 
    <tr>
        <th className='Table_th_td'>Id</th>
        <th className='Table_th_td'>Name</th>
        <th className='Table_th_td'>Email</th>
        <th className='Table_th_td'>Subject</th>
    </tr>
  </thead> 
<tbody>

{  tableData.length>0  && 
  tableData.map((x ,id)=>{return (
<tr className='Table_tr_Curd' key={id}>
        <td className='Table_th_td'>{id+1}</td>
        <td className='Table_th_td'>{x.name}</td>
        <td className='Table_th_td'>{x.email}</td>
        <td className='Table_th_td'>{x.subject}</td>
    </tr>
  )})
}     

</tbody>
</table>

</div>
  )
}

export default ShowUserData
