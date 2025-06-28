import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {Outlet} from 'react-router-dom';
import './MainLayout.css'

function MainLayout() {
  return (
    <div className='main-layout'>
        <Header/>
         <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout