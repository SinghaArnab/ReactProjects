import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const RandomQuots = () => {

    const [Data,setData]=useState("")
    const [Dep,setDep]=useState(1)

    
    const NewNUMber=(()=>{
        const number =Math.random()
        console.log(number)
        setDep (Math.floor(String(number).slice(2,4))) 
    })

    useEffect( () => {
     axios.get('https://type.fit/api/quotes').then((data)=> setData(data.data[Dep]))
    }, [Dep])

    console.log(Dep);

  
    

  return (
     <div className='h-[84.3vh] flex justify-center items-center RandomQuots '>
     {Data ?<div className='h-[50vh] w-[80%]  bg-pink-200 flex justify-center items-center flex-col gap-10 RandomQuotsChild'>
    { Data.author ? <h1 className='text-black font-serif text-[30px] font-semibold'>{ Data.author }</h1> :<h1>Not Found ...</h1>}
    { Data.text ? <h1 className='text-black font-serif text-[30px] font-semibold'>{Data.text}</h1>:<h1>Not Found ...</h1>}
    <button className='bg-red-500 rounded-full h-[40px] w-[40%] hover:scale-110' onClick={()=>NewNUMber()}>Next</button>
    </div>
    : <h1>Loading ...</h1>}
    
    </div> 
  )
}

export default RandomQuots
