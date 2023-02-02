import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { ContextData } from '../Createcontext/Createcontext'

const ProductCart = () => {
    const{items,Removeitem,price,RemoveAll,increment,decrement,subPrice}=useContext(ContextData)
    const navigate=useNavigate()
  return (
    <div>
    { items.length>0?
      <h1 className='text-[25px]'>product cart total items : <span className='text-red-300 font-semibold mr-10'>{items.length}</span>
      <span><button className='w-[200px] padding-[20px] bg-green-400'   onClick={()=>navigate("/Product")}>Go Back</button></span> </h1>:''
    } 
<div className='w-[100%]'>
{ items.length>0?
<div>
<button className='bg-green-500 text-white m-3  h-[35px] w-[300px] hover:bg-[#c6f4b7]' onClick={RemoveAll} ><i className="fa-solid fa-trash-can"></i>Clear</button>
</div>:''
}
<div className='flex justify-between items-center w-[100%]'>


<div className='Product_cartbody w-[70%]'>

{
  items.length>0?
  items.map((x,index)=>{
    return  (
  <div className='Product_cartPage h-[120px]'>
  <div className='flex flex-row w-[100%] h-[120px]' key={index}>
      <div className='Product_img_tab_cart w-[20%] h-[120px]'>
          <img src={x.image} alt="img" />
      </div>
      <div className=' w-[30%] h-[100px] flex flex-col justify-center items-start'>
        <h1 className=' text-black font-semibold text-[25px] mr-10'>{x.name}</h1>
        <h1 className=' text-red-600 font-semibold text-[25px] mr-10'>{x.price}</h1>
      </div>
      <div className=' w-[30%] h-[120px] flex flex-row justify-center items-center'>
                <button className='bg-green-500 text-white m-3  h-[35px] w-[40px] hover:bg-[#c6f4b7]' onClick={()=>increment(x.id)}><i className="fa-solid fa-chevron-right"></i></button>
                <button className='bg-black text-white m-3  h-[35px] w-[30px] hover:bg-[#050505]' >{x.quantity}</button>
                <button className='bg-pink-500 text-white m-3  h-[35px] w-[40px] hover:bg-[#f29bad]' onClick={()=>decrement(x.id)} ><i className="fa-solid fa-angle-left"></i></button>
                </div>
      <div>
      </div>
      <div className='Product_Cart_button w-[20%] h-[120px]  flex justify-center items-center'>
      <button  className='w-[80%] h-[35px] bg-red-400 text-black font-semibold  ' onClick={()=>Removeitem(x.id)}>Delete</button>
      </div>
 
</div>

</div>
    )
  }):
  <div className='flex justify-center items-center'>

  <h1 className='text-[25px]'>No items Added <span className='text-red-300 font-semibold'></span>
  <span><button className='w-[250px] padding-[20px] bg-green-400'   onClick={()=>navigate("/Product")}>Product page</button></span> </h1>

  </div>


}


</div>

{ items.length>0?

<div className='w-[30%] h-[300px] bg-[#eaf1ff] text-Black flex justify-start items-start pl-10 pt-5'>
<div>
<h1 className='text-[30px] font-bold flex justify-start items-start '>Summary</h1>
<h1 className='flex justify-start items-start'>Total Cart items:<span className='text-red-300 font-semibold '>  {items.length}</span></h1>
<h1 className='text-[20px] font-semibold flex justify-start items-start '>Sub Total :{subPrice}</h1>
<h1 className='text-[20px] font-semibold flex justify-start items-start '>Service Charged:</h1>
<h1 className='flex justify-start items-start'>Your Total price :{price}</h1>
<button  className='w-[200px] padding-[20px] bg-purple-400 m-8'  >Check Out</button>
</div>

</div>:''
}
</div>

</div>

    </div>
  )
}

export default ProductCart
