import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import '../css/females.css'

const Females = () => {
  return (
    <>
      <Header />
      <NavBar />
      <h1>Our Program Females</h1>
      <div className='bella'>
        <img src='IMG_3214.jpeg' alt='female American Bully dog' className='bellaPic'/>
        <p className='bellaPg'>
          Name: Bella
        </p>
      </div>
      <div className='evie'>
        <img src='IMG_3954.JPG'alt='female American Bully pup' className='eviePic' />
        <p className='eviePg'>
          Name: Evie
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Females