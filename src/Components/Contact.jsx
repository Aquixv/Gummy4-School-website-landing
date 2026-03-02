import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail.png'
import phone_icon from '../assets/phone.png'
import location_icon from '../assets/location.png'
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_W3FORMS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <>
    <div className='contact'>
      <div className="contact-col">
        <h3>Shoot us a message <img src={msg_icon} alt="message" /></h3>
        <p>Feel free to reach out through our contact form or find our contact information below. 
          Your feedback, questions, and suggestions are important to us as we strive to provide
           exceptional service to our university community.</p>
           <ul>
            <li> <img src={phone_icon} alt="" /></li>
           <li><img src={mail_icon} alt="" /></li>
           <li><img src={location_icon} alt="" /></li>
           </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Email Address</label>
          <input type="email" name='email' placeholder='Enter your email' required/>
          <label>Write your message here</label>
          <textarea name="message" rows ='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  </>
  )
}

export default Contact