import React from 'react'
import ButtonOutside from './Button'

function ButtonInside(props){
    return(
        <>
            <button>Button Inside with {props.info.name} {props.info.compile}</button>
        </>
    )
}



export default function pqr() {
    // const name = "Libery";
    const btninfo = {name:"React",compile:"component"};
  return (
    <div>
       <h1>React Heading</h1> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse sequi non, dolorem ipsum provident natus, voluptates voluptatum numquam impedit delectus ipsa! Aspernatur asperiores magni at qui magnam modi ipsum?</p>

       <ButtonInside info={btninfo}/>
       <ButtonOutside/>
    </div>
  )
}
