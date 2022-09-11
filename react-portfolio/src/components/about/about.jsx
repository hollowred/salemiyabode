import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id ="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"> 
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div> 
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>
          </div>
          <p>
            I am a software engineer who is passionate about clean and efficient design. My skill set is built around collaboration whether that be directing a team or boosting an idea to its full potential. As an engineer, I am determined to execute and enhance the customer's experience. I am flexible and centralize new information that will make me a strengthened developer.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div> 
      </div>  
    </section>
  )
}

export default About