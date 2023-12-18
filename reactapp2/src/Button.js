import React from 'react'

const shoot = () => {
    alert("Great Shot");
}
const shoot1 = (a) => {
alert(a);
}

export default function ButtonOutside() {
  return (
    <>
    <button onClick={shoot} >Button Outside</button>
    <button onClick={()=>{shoot1("Shubo needs a wife because now its winter session")}} >Button Outside eith peramiter</button>
    
    </>
  )
}
