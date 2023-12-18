import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import Price from '../pages/Price'
import Blog from '../pages/Blog'
import Group from '../pages/Group'
import Testimonial from '../pages/Testimonial'
import PageNotFound from '../pages/404'
import UseState from '../pages/UseState'
import UseEffect from '../pages/UseEffect'
import UseContex from '../pages/UseContex'
import Users from '../pages/Users'
import Insert from '../pages/Insert'
import Cart from '../pages/Cart'

export default function Main() {
  return (
    <BrowserRouter>
        <Routes >
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/' >
                    <Route path='/price' element={<Price />}></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/group' element={<Group />}></Route>
                    <Route path='/testimonial' element={<Testimonial />}></Route>
                    <Route path='*' element={<PageNotFound/>}></Route>
                    <Route path='/usestate' element={<UseState/>}></Route>
                    <Route path='/useeffect' element={<UseEffect/>}></Route>
                    <Route path='/usecontex' element={<UseContex/>}></Route>
                    
                </Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/users' element={<Users/>}></Route>
                <Route path='/newusers' element={<Insert/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
