export const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':{
            const allTodo=[...state.Data,action.paylode]
            return {
                ...state,Data:allTodo,isModelopen:true,modelText:'Your Data has been Added'
            }
        }

        case 'REMOVE':{
            const filterData=[...state.Data].filter(x=>x.id !==action.paylode)
            return {
                ...state,Data:filterData,isModelopen:true,modelText:'Data has been Removed'
            }
        }

        case 'NOINPUT':{
            return { 
           ...state, isModalOpen:true,modelText: 'Please Enter Somthing ...' 
       };

       }

        case 'CLOSE_MODAL':{
            return { ...state, isModelopen:false };
        }

      
        default:
            return state
    }

}
