import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Eyeglasses from './Eyeglasses'
import Sunglasses from './Sunglasses'
import Cart from './Cart'
import Contact from './Contact'

export default function Index() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/eyeglasses' element={<Eyeglasses/>}/>
        <Route path='/sunglasses' element={<Sunglasses/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}
