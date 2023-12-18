import React from 'react'
import Courses, {NoCourses} from './Courses';


export default function Instructor() {
    const courses = true;
    if(courses){
  return (
    <Courses/>
  )} else{
    return(
        <NoCourses/>
    )
}
}
