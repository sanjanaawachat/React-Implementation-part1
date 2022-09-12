import React from 'react'
import { useEffect } from 'react';
 import { useState } from 'react';

const Hook2=()=>{
    const [count,setCount]=useState(0);
    const [num,setnum]=useState(0);
    const [nums,setnums]=useState(0);
    useEffect(()=>{
        alert("I am Clicked");
    },[num]);
   useEffect(() => {
     console.log("Hello useeffect");
 });
 useEffect(()=>{
 setTimeout(() => {
    setCount((count)=>count+1);
 }, 1000);
},[]);

console.log("hello");
   
return(
    <>
    <p className='text1'>Implementation of UseEffect</p>
    <h1>{count}</h1>
    <button onClick={()=>{setnum(num+1)}} className='btn1'>click me{num}</button>
    <button onClick={()=>{setnums(nums+1)}} className='btn2'>click me{nums}</button>
    </>
)
}
export default Hook2;