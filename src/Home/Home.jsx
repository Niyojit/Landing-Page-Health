import React from 'react'
import "./home.css"
import Header from '../components/header/Header'
import Profile from '../components/header/Profile/Profile'
import Grocery from '../components/header/grocery/Grocery'
import Footer from '../components/header/footer/Footer'

export default function Home() {
  return (
    <div className="Home">
      <Header/>
      <Profile/>
      <Grocery/>
      <Footer/>
    </div>
  )
}
