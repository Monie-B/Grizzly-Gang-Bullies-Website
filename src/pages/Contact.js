import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import '../css/contact.css'

const Contact = () => {
  return (
    <>
      <Header />
      <NavBar />
      <p className='contact-title'>Let's Get in Contact</p>
      <div className='contact-div'>
        <div className='imgDiv'>
          <img src='IMG_E4400.JPG' alt='abkc competition' />
        </div>
        <div className='formDiv'>
          <h1>Got Questions? You've Come to the Right Place</h1>
          <Form />
          <h2>We'll Respond to You As Soon As Possible!</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact