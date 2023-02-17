import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import '../css/males.css'

const Males = () => {
  return (
    <>
      <Header />
      <NavBar />
      <h1>Our Program Males</h1>
      <div className='gizmo'>
        <img src='IMG_3401.jpeg' alt='male American Bully dog' className='gizmoPic'/>
        <p className='gizmoPg'>
          Name: Gizmo
        </p>
      </div>
      <div className='tank'>
        <img src='IMG_3956.JPG'alt='male American Bully pup' className='tankPic' />
        <p className='tankPg'>
          Name: Tank
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Males