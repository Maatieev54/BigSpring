import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from '../src/Components/Layout/Layout'
import Mainn from './Pages/Mainn'
import Blog from './Pages/Blog'
import Blog2 from './Pages/Blog2'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'






function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Mainn/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Blog2' element={<Blog2/>}/>
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Faq' element={<Faq/>}/>
    
    
    </Route>
  </Routes>
   </>
  )
}

export default App
