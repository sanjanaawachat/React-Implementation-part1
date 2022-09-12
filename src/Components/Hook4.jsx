import React,{useReducer} from 'react'
//multiple states will be added 
const initialState=0;
//pure functions
//the function is does not  produce any side effects
//the function always return the same output ,if the same argument
const reducer=(state,action)=>{//current state and action method
    console.log(state,action);//it takes  two parameters accept state and action
    if(action.type==="incre"){
        return state+1;//reducer function it need to something
    }
    if(action.type==="Decre"){
        return state-1;
    }
    
}
const Hook4=()=>{//reducer(pure) function
 const [state,dispatch] = useReducer(reducer,initialState);  //it take two arguments and is a one type of pure function and it acceps a state and action
 //dispatch---------->to trigger the action method
return(
<>
     <p className='text1'>Implementation of useReducer</p>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"incre"})} className='btn1'>inc</button>
    <button onClick={()=>dispatch({type:"Decre"})} className='btn2'>Dec</button>
    </>
)
   

} 

export default Hook4;