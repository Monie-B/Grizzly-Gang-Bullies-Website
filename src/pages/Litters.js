import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'


const Litters = () => {
  return (
    <>
      <Header />
      <NavBar />
      <p className='l-title'>Our First Litter</p>
      <div className='slider-div'>
        <Slider />
      </div>
      <Footer />
    </>
  )
}

export default Litters