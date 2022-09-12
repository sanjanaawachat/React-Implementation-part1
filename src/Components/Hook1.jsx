//Usestate hooks:
import React from 'react'
import { useState } from 'react';


const Hook1=()=>{
    const [count,setCount]=useState(0);//initial value
    const [name,setName]=useState("sanjana");
    // console.log(state);
  //----->Count//current value
    const Incnum=()=>{
        setCount(count+1);//updated value
        // console.log("clicked" + count++);
    }
    const Decnum=()=>{
        setCount(count-1);//updated value
        // console.log("clicked" + count++);
    }
     const Changename=()=>{
        setName("ritika");
     }
    
return(
<>

    <p className='text1'>Implementation of Usestate</p> 
    <h1>{count}{name}</h1>
     <button onClick={Incnum} className='btn1'>Incbtn</button>
    <button onClick={Decnum} className='btn1'>Decbtn</button>
     <button onClick={Changename} className='btn2'>Changetext</button> 
</>
)
   

} 

export default Hook1;