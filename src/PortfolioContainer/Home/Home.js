import React from 'react'
import './Home.css'
import Profile from './Profile/profile'
import Footer from './Footer/footer'
export default function Home() {
  return (
    <div className='home-container'>
      <Profile/>
      <Footer/>
    </div>
  )
}
