/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import { useContext } from 'react'
import { FireContext } from './Firecontext/FirebaseContext'
import Model from './Model'


const ShowUser = () => {

  const {ReadData,getDOc,updatedata,setUpdatedata,updateDocument}=useContext(FireContext)

  const [userDetails,setDetails]=useState([])
  const [update,setupdate]=useState(false)
  const [Modelopen,setModel]=useState(false)


 useEffect(() => {
    ReadData().then((details)=>{setDetails(details.docs)})
  }, [update,Modelopen])


  const handelChange=(e)=>{
      const {name,value}=e.target
      setUpdatedata((x)=>{
        return {
          ...x,[name]:value
        }
      })
  }
  
  return (

    <div className=' min-h-[77.2vh] FireShowuser'>
{
  update && updatedata &&
    <div className='bg-red-300'>

    <span className='text-[26px] text-handelChangered-500 font-bold'>Edit Details</span>

    <div className='flex justify-center items-center flex-col md:flex-row w-[100%]'>
    
      <input type="text"  className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name="Name" placeholder="Your name..." value={updatedata.Name} onChange={handelChange}/>
      <input type="email" className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name="Email" placeholder="Your email..."  value={updatedata.Email} onChange={handelChange}/>
      <input type="text"  className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name="Sublect" placeholder="Your Subject..."  value={updatedata.Sublect} onChange={handelChange}/>
      <input type="text"  className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name="Field" placeholder="Your Field..."  value={updatedata.Field} onChange={handelChange}/>
      <button className='bg-green-500 hover:animate-bounce cursor-pointer text-center w-[100%] md:w-[50%] h-[39px] rounded' onClickCapture={()=>updateDocument(updatedata)} onClick={()=>setupdate(false)} >Submit</button>
      <button className='bg-red-400  hover:animate-bounce  cursor-pointer  text-center w-[100%] md:w-[50%] h-[39px] rounded'  onClick={()=>setupdate(false)}>Cancel</button>

    </div>
  </div>
  }

<table>
  <caption>Details Summary</caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Field</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody> 
   { userDetails && userDetails.map((x ,index)=>{

    return (
    <tr key={index}>
      <td data-label="ID" >{index+1}</td>
      <td data-label="Name">{x.data().Name}</td>
      <td data-label="Email">{x.data().Email}</td>
      <td data-label="Subject">{x.data().Sublect}</td>
      <td data-label="Field">{x.data().Field}</td>
      <td className='bg-green-500 hover:animate-bounce cursor-pointer text-center' onClickCapture={()=>getDOc(x.id)} onClick={()=>setupdate(true)}>Edit</td>
      <button className='bg-red-400  hover:animate-bounce  cursor-pointer  text-center w-[100%] h-[45px]' type='submit' onClick={()=>setModel(true)} >Delete</button>
      { Modelopen && <Model x={x.id} setModel={setModel} />}
    </tr>

    
    
    )
   })
    
    }
  </tbody>
</table>

</div>
     
  )
}

export default ShowUser
