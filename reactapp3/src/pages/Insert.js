import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';




export default function Insert() {
    const [userInfo, setUserInfo] = useState([]);

    const navigate = useNavigate();
    
const handleSubmit = (e) =>{
    e.preventDefault();
    // alert("Yes,submitted");
    userInsert();
}
const handleChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((val)=>({...val, [name]:value}));
}

const userInsert = ()=>{
    axios.post("http://localhost/wdpf55_react/reactapp3/api/user_insert.php",
    {data:userInfo}).then(res=>{
        
        // console.log(res.data);
        alert(res.data.msg);
        return navigate("/Users")
    })
}

console.log(userInfo);

  return (
    <div className='container'>
        <h1>User Entry</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={userInfo.name} onChange={handleChange} placeholder='Enter a name' /><br />
            <input type="email" name='email'  value={userInfo.email} onChange={handleChange}  placeholder='Enter your email' /><br />
            <input type="submit" name='submit' />
        </form>
    </div>
  )
}
