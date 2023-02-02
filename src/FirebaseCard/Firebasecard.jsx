import React,{useState} from 'react'
import { useContext } from 'react'
import { FireContext } from './Firecontext/FirebaseContext'
import {useNavigate} from 'react-router-dom'


const Firebasecard = () => {

    const {Dataadd}=useContext(FireContext)

    const Navigate=useNavigate()

    const [user,setUser]=useState({})
    
    
      const handelChange=(e)=>{
        const {name,value}=e.target
        setUser(()=>{
           return {
            ...user,[name]:value
           } 
        })   
    }
    
    const formSubmit=(e)=>{
        e.preventDefault()
        Navigate('/Firebasecart/Showuser')
    }

    const adduserdetalis= async()=>{
      await Dataadd(user.name,user.email,user.subject,user.Field)
    }


    
  return (
    
   <div className='main FireCardBack'>
   <div className='sub_a Firecard_a w-[90%] md:w-[30%]'>
   
           <form autoComplete='off' onSubmit={formSubmit}  >

           <div className='text-red-50 text-[30px]'>
            <h1>Fill Your details</h1>
           </div>
               <label className='firebaselabel' >Full Name</label>
               <input type="text"  className='cardInput' name="name" placeholder="Your name..." value={user.name} onChange={handelChange}/>
   
               <label className='firebaselabel' >Email</label>
               <input type="email" className='cardInput'  name="email" placeholder="Your email..."  value={user.email} onChange={handelChange}/>
   
               <label  className='firebaselabel' >Subject</label>
               <input type="text"  className='cardInput' name="subject" placeholder="Your Subject..."  value={user.subject} onChange={handelChange}/>
               <label  className='firebaselabel' >Field</label>
               <input type="text"  className='cardInput' name="Field" placeholder="Your Field..."  value={user.Field} onChange={handelChange}/>
   
               <button type="submit" className='CardBtn' onClick={() => adduserdetalis()}>Submit</button>
             </form>
   
   </div>
   <div className='sub_b hidden md:block'>
   
   <img  className='curdImg' src='../img/FireBack.svg' width='100%' height='100%' alt='backimg' />
   
   </div>
   
   
   </div>
   
  )
}

export default Firebasecard
