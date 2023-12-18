import {useState, createContext, useContext} from 'react'
const UserContext = createContext();


export default function UseContex() {
    const [user, setUser] = useState(["Potato", "Atta", "Mayda", "Shuchi"]);

  return (
    <div className='Container'>
        <h1>UseContex Preactice</h1>
        <UserContext.Provider value={user}>
            {/* <h2>{`${user.name + ',' + '\n' + user.email}! Component 1`}</h2> */}
            <h2>{`${user} Component 1`}</h2>
            <Component2 />
        </UserContext.Provider>
    </div>
  )
}

function Component2(){
    return(
        <>
            <h2>component 2 </h2>
            <Component3 />
        </>
    )
}

function Component3(){
    const user = useContext(UserContext);
    return(
        <>
            {/* <h5>{user.email + ',' + '\n' + user.email}, component 3</h5> */}
            <h5>{user[3]}, Component 3</h5>
        </>
    )

}
