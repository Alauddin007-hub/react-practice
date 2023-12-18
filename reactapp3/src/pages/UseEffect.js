import React from 'react'
import { useState, useEffect } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(5);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     });
    // },[]);

    useEffect(()=>{
        // setCount((count)=> count + 1)
        setPerson(()=> count*2)
    },[count]);


  return (
        <div className="container">
            <h1>UseEffect Practice</h1>
            Count: {count} <br />
            Person: {person} <br />
            <button onClick={()=>setCount((c)=>c+1)}>Click Here</button>
        </div>

    
  )
}
