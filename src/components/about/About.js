import React from 'react';
import { Link } from 'react-router-dom';

const About = props => {
  const buttonStyles = {
    marginTop: 7,
  }

  return (
    <section className='hero'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>Welcome to less pain!</h1>
          <h2 className='subtitle'>
            <Link style={buttonStyles} className='button is-success' to='/records'>Get started!</Link>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default About
