import {useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Fdata from './Fdata'
import Filterbody from './Filterbody'

const Filterdata = () => {

  const navigate=useNavigate();



    const [Query,setQuery]=useState({searchData:""})

      const handelChanged=(e)=>{
        const {name,value}=e.target;
        setQuery((prevdata)=>{
          return {...prevdata,[name]:value}      
        })
    }

    const formSubmit=(e)=>{
      e.preventDefault()
    }

    const filtered = Fdata.filter((data)=> {
      return (
          data.name.toLowerCase() === Query.searchData.toLowerCase().trim()
          )
    })

  return (
    <div>
        
<div>
    <nav className="h-[70px] bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 flex  items-center mx-auto lg:flex-row sm:flex-col">
        <div className="container flex w-auto lg:text-left sm:text-center">
            <NavLink  className="items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WeatherApp</span>
            </NavLink>
        </div>
            <div className='search'>
              <form onSubmit={formSubmit}>
            <div className="input-box">
              <i className="fa-solid fa-magnifying-glass "></i>
            <input type="text" name='searchData'  placeholder="Please any details to filter..."  onChange={handelChanged}/>
            </div>
              </form>
           </div>
      </nav>
</div>


<div className='main-table-con'>

<h1 className='w-[100%] bg-green-400 h-[30px] text-lg'>{Query.searchData}</h1>

<table id="Main_Table">
    <tr>
        <th className='Table_th_td'>Id</th>
        <th className='Table_th_td'>Name</th>
        <th className='Table_th_td'>Email</th>
        <th className='Table_th_td'>Phone</th>
        <th className='Table_th_td'>Appress</th>
    </tr>
    

{  
    filtered.length>0 ?filtered.map((x)=>{return (<Filterbody key={x.id} M={x}/>)}):
    Fdata.map((x)=>{return (<Filterbody key={x.id} M={x}/>)})
    
  
}
</table>

</div>
<button className='w-[100px] h-[30px] bg-green-400'  onClick={()=>navigate("/")} >Go Back</button>
    </div>
  )
}

export default Filterdata


//filtered.length<0?  :<div className='flex justify-center items-center text-red-400'><p >No Data Found</p></div>

//onClick={()=>{console.log(history)}}