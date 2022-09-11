import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://pacific-beyond-27489.herokuapp.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio