import React from 'react'
import { useState } from 'react';


export default function MyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(name);
    console.log(email);
  return (
    <div>
        <h1>Enter Form</h1>
        <form action="">
          <label htmlFor="">Name: </label><br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
            <label htmlFor="">Email ID: </label><br />
            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </form>

        {/* {name} */}
    </div>
  )
}
