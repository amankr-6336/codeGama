import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MainLayout from './Layout/MainLayout/MainLayout'
import { Route,Routes } from 'react-router-dom'
import ProductListing from './pages/ProductListing/ProductListing'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function App() {
  return (
   <Routes>
    <Route element={<MainLayout/>} >
       <Route path="/" element={<ProductListing/>} />
       <Route path='/product/:id' element={<ProductDetail/>} />
    </Route>
   </Routes>
   
  )
}

export default App