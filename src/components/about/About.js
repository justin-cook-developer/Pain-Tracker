import React from 'react';
import { Link } from 'react-router-dom';

const About = props => {
  const buttonStyles = {
    marginTop: '1%',
  };
  const heroStyles = {
    marginTop: '-10%',
  }

  return (
    <section className="hero is-fullheight" style={heroStyles}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Tired of chronic pain?</h1>
          <h2 className="subtitle">
            Track your pain to eliminate its causes!
          </h2>
          <p>
            <Link
              style={buttonStyles}
              className="button is-success"
              to="/records"
            >
              Get started!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
