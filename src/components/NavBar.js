import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <>
      <div className='nav'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/MeetMardy"><button>Meet Mardy</button></Link>
        <Link to="/MeetGizmo"><button>Meet Gizmo</button></Link>
        <Link to="/Bloodline"><button>Bloodline</button></Link>
        <Link to="/Litters"><button>Litters</button></Link>
        <Link to="/Gallery"><button>Gallery</button></Link>
        <Link to="/Contact"><button>Home</button></Link>
      </div>
    </>
  )
}

export default NavBar