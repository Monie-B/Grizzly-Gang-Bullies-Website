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
      <div className='contact-div'>
        <div className='imgDiv'>
          <img src='IMG_E4400.JPG' alt='abkc competition' />
        </div>
        <div className='formDiv'>
          <h2>Got Questions? You've Come to the Right Place</h2>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact