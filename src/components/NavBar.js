import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <>
      <div className='nav'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/Males"><button>Males</button></Link>
        <Link to="/Females"><button>Females</button></Link>
        <Link to="/Litters"><button>Litters</button></Link>
        <Link to="/Gallery"><button>Gallery</button></Link>
        <Link to="/Contact"><button>Contact</button></Link>
      </div>
    </>
  )
}

export default NavBar