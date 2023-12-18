import React from 'react'
import Book from './Book'

export const BookList = () => {
    const list = [
        {isbn:100, title:"PHP Bible", author:"Hasin Hayder"},
        {isbn:101, title:"PHP Directory", author:"John Shefered"},
        {isbn:102, title:"PHP Programming", author:"John Russel"},
    ]
//   return (
//     <div className='container'>
//         <h1>Book List</h1>
//         <ul>
//             {list.map((item,i) => <li key={i}>ISBN: {item.isbn}, Title: {item.title}, Author: {item.author} Index: {i} </li>)}
//         </ul>
//     </div>
//   )

    return(
        <div className="container">
            <ul>
                {list.map((item,i)=><Book isbn={item.isbn} title={item.title} author={item.author} key={i}/>)}
            </ul>
        </div>
    )
}
