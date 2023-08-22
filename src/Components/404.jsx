import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import pic404 from '../img/lowPic/404-2.png'
import './404.css'

export default function PageNotFound() {
 
  return (
    <>
    <NavBar/>
    <div className="notfound">
        <img src={pic404} alt="" />
    </div>
    <Footer/>
    </>
  )
}
