//usememo hook

//increase the performance 

import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const Hook5 = () => {
    const [myNum, setmyNum] = useState(0);
    const [show, setShow] = useState(false);

    const getvalue = () => {
        return setmyNum(myNum + 1);
    };
    const countNumber = (num) => {
        for (let i = 0; i < 1000000000; i++) {}//expensive function so,that somuch time is wasted
        return num;

    }
    const checkData =    useMemo(()=>{
      return  countNumber(myNum);
    },[myNum])
   
    return (
        <>
            <p className='text1'>Implementation of UseMemo </p>
            <button onClick={getvalue} style={{ backgroundColor: "red" }} className='btn1'>Counter</button>
            <p className='text2'>My new number :{checkData}</p>
            <button onClick={() => setShow(!show)} className='btn2'>{show ? "you clicked me" : "Click me plz"}</button>
        </>
    )
}
export default Hook5;