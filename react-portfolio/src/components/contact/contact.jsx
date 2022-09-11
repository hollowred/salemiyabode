import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>salemiyabode@gmail.com</h5>
            <a href="mailto:salemiyabode@gmail.com">Send a message</a>
          </article>  

        </div> 
        {/* END OF CONTACT OPTIONS   */}
        <form action=""></form>
      </div>  


    </section>
  )
}

export default Contact