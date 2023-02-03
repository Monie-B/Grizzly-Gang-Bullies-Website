import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='foot-divOne'>
          <div className='sitenav'>
            <p>Site Navigation<hr/>
            </p>
          </div>
          <div className='ftr-txt1'>
            <p>
              Home<br/>
              Mardy & Gizmo<br/>
              Bloodline<br/>
            </p>
          </div>
          <div className='ftr-txt2'>
            <p>
              Litters<br/>
              Gallery<br/>
              Contact
            </p>
          </div>
        </div>
        <main className='ftr-main'>
          <p>Website Created by Monica Bullock</p>
        </main>
        <div className='ftr-right'>
            <p>Follow Us!<hr/></p>
            <div className='socials'>
              <a href='https://www.instagram.com/grizzlygangbullies/' target='_blank' rel='noreferrer'>
                <img src='instagram.png' alt='instagram logo' className='ig' />
              </a>
              <a href='https://www.tiktok.com/grizzlygbullies/' target='_blank' rel='noreferrer'>
                <img src='tiktok-square.png' alt='tiktok logo' className='tt' />
              </a>
              <a href='https://www.youtube.com/@grizzlymardy/' target='_blank' rel='noreferrer'>
                <img src='youtube.png' alt='youtube logo' className='yt' />
              </a>
            </div>
        </div>
      </footer>
    </>
    )
}

export default Footer