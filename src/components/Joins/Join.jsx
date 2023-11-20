import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const Join = () => {
  const [userEmail, setUserEmail] = useState('')
  const formRef= useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b3ii115', 'template_2kazbte', formRef.current, 'Eol4G8iNEXwChpzgQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>Ready To</span>
          <span> Level Up</span>
        </div>
        <div>
          <span >Your Body</span>
          <span className='stroke-text'> With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className='email-container' ref={formRef} onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder='enter you email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}/>
          <button type='submit' className='btn btn-j' onClick={()=>setUserEmail('')}>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
