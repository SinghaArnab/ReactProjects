import React from 'react'

const Filterbody = ({M}) => {
  return (
    <>
    <tr className='Table_tr' key={M.id}>
        <td className='Table_th_td'>{M.id}</td>
        <td className='Table_th_td'>{M.name}</td>
        <td className='Table_th_td'>{M.email}</td>
        <td className='Table_th_td'>{M.phone}</td>
        <td className='Table_th_td'>{M.address}</td>
    </tr>
   </>
  )
}

export default Filterbody