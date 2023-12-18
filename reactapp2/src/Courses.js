import React from 'react'

const list = ["PHP", "Javascript", "Oracle"];

export default function Courses() {
    if(list.length>0){
  return (
    <div>
        <h1>There are Courses</h1>
        <ul>
            {list.map(
                (item)=><li>{item}</li>
            )}
        </ul>
    </div>
  )
} else {
    return (
        <NoCourses/>
    )
}
}

export function NoCourses() {
    return (
      <div>No Courses</div>
    )
    
  }
