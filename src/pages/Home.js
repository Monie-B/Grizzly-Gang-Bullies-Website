import React from 'react'
import '../css/home.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
        <Header />
        <NavBar />
        <div className='home-title'>
            <h1>Welcome to the Grizzly Gang!</h1>
            {/* <h3>We breed pure bred American Bullies</h3> */}
        </div>
        <main className='home-mainDiv'>
            <div className='home-leftDiv'>
                <div className='logo-div'>
                    <img src='IMG_2503.JPG' alt='logo' className='logo' />
                </div>
            </div>
            <div className='home-rightDiv'>
                <div className='M-G1-div'>
                    <img src='IMG_3799.PNG' alt='Mardy and Gizmo' className='M-G1' />
                </div>
                <p className='home-rightTitle'>
                    Check Out Our Site and Join the Grizzly Gang!
                </p>
            </div>
        </main>
        <div>
            <p className='home-2ndTitle'>We breed pure bred American Bullies</p>
        </div>
        <section>
            <img src='IMG_E3798.JPG' alt='dog and owner posing next to car' className='abkcPic' />
        </section>
        <Footer />
    </>
  )
}

export default Home