import React from 'react'
import { useContext } from 'react'
import { FireContext } from './Firecontext/FirebaseContext'

const Model = ({x,setModel}) => {

    const {deleteData}=useContext(FireContext)
 
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div className="bg-white px-16 py-14 rounded-md text-center">
      <h1 className="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
      <button className="bg-red-500 px-4 py-2 rounded-md text-md text-white"  onClick={()=>setModel(false)}>Cancel</button>
      <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold" onClickCapture={()=>deleteData(x)}  onClick={()=>setModel(false)}>Ok</button>
    </div>
  </div>

  )
}

export default Model