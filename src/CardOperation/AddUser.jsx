import React from 'react'
import { useState } from 'react'
import { adduser } from '../Api/Api'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {

  const navigate=useNavigate()

  const [user,setUser]=useState({
    name:"",
    email:"",
    subject:""
  })

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
}

const adduserdetalis = async () => {
  await adduser(user)
  navigate('/curd/Showuser')

}

return (

   <div className='main CurdHOme'>

<div className='sub_a'>

        <form autoComplete='off' onSubmit={formSubmit}  >
            <label >Full Name</label>
            <input type="text"  className='cardInput' name="name" placeholder="Your name.." onChange={handelChange}/>

            <label >Email</label>
            <input type="email" className='cardInput'  name="email" placeholder="Your email.." onChange={handelChange}/>

            <label >Subject</label>
            <input type="text"  className='cardInput' name="subject" placeholder="Your Subject.." onChange={handelChange}/>

            <button type="submit" className='CardBtn' onClick={() => adduserdetalis()}>Submit</button>
          </form>

</div>

<div className='sub_b'>

<img  className='curdImg' src='https://ey5me.csb.app/happy.svg' width='100%' height='100%' alt='backimg' />

</div>


</div>


    
  )
}

export default AddUser