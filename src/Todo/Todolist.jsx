import {useState,useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './ReducerAction';
import Modal from './Modal';


const initial={
    Data:[],
    isModelopen:false,
    modelText:''
 }

const Todolist = () => {

    const [input,setInput]=useState('');
    const [updatedstate,dispatch]=useReducer(reducer,initial)

    const formSubmit=(e)=>{
        e.preventDefault()

        if(input.length>0){
        const newData={id:uuidv4(),todo:input}
        dispatch({type:'ADD_TODO',paylode:newData});
        setInput('');
        }
        if(input.length===0){
            dispatch({type:'NOINPUT' })
        }
    }

      const todoRemove=(id)=>{
        console.log('hello');
            dispatch({type:'REMOVE',paylode:id})
      }

      const closeModal = () => {
        dispatch({ type:'CLOSE_MODAL' })
      }

  return (
    <div className='Container'>
     
    {updatedstate.isModelopen && (
        <Modal closeModal={closeModal} modelText={updatedstate.modelText} />
      )}

    <div className='TOdo_input mt-6'>

    <form onSubmit={formSubmit}>
        <input className='Todo-input-box' type='text' placeholder='  Write what next to do...' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='w-[100%] h-[30px] bg-green-400 mt-2 hover:bg-red-400' type='submit'>Save</button>
    </form>

    </div>

<div className='mainitem mt-4'>
{updatedstate.Data.map((x,uid)=>{
    const {id,todo}=x
       return(
        
       <div className='itm mt-2 mb-2'><h1 className='text-center'>Task{uid+1}</h1>
             <h1>{todo}</h1>
            <div className='flex gap-2'>
            <button className='btn2 btnD mt-1 ' onClick={()=>todoRemove(id)}>Done</button>
            <button className='btn2 mt-1 ' onClick={()=>todoRemove(id)}>Delete</button>
            </div>
        </div> 
    )}) }
</div>
  </div>
  )
}

export default Todolist