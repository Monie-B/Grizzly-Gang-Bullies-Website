import React from 'react'
import '../css/home.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <>
        <Header />
        <NavBar />
        <div className='home-title'>
            <h1>Welcome to the Grizzly Gang!</h1>
        </div>
        <aside>
            <p className='aside-text'>
                All About American Bullies
            </p>
        </aside>
        <main>
            <img src='IMG_2503.JPG' alt='logo' className='logo' />
            <img src='IMG_3792.PNG' alt='Mardy and Gizmo' className='M-G1' />
        </main>
    </>
  )
}

export default Home