import React from 'react'
import '../css/form.css'

const Form = () => {
  return (
    <div className='form'>
      <form action="mailto:lamararnold25@gmail.com" method="post" enctype="text/plain" className='formText'>
        <div className='leftside'>
          <label for='name'>Name:</label><br/>
          <input type="text" name="name" className='nameInput' placeholder='Full Name' required /><br/><br/>
          <label for='email'>E-mail:</label><br/>
          <input type="text" name="mail" className='emailInput' placeholder='Email Address' required />
        </div>
        <div className='rightside'>
          <label for='message'>Message:</label><br/>
          <textarea type="text" name="message" className='messageInput' placeholder='How Can I Help You?' required ></textarea><br/>
        </div>
        <div className='bottom'>
          <input type="submit" value="Send" className='sendBtn'/>
          <input type="reset" value="Reset" className='resetBtn'/>
        </div>
      </form>
    </div>
  )
}

export default Form