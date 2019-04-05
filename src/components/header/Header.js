import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ isActive, handleClick }) => {
  const headerStyles = {
    paddingLeft: 5,
    paddingRight: 5,
  }

  return (
    <header style={headerStyles}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </NavLink>

          <a role="button" onClick={handleClick} className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <NavLink to='/' className="navbar-item" activeClassName='is-active'>
              Home
            </NavLink>

            <NavLink to='/records' className="navbar-item" activeClassName='is-active'>
              Records
            </NavLink>

            <a className='navbar-item'>Single Record</a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='navbar-item button is-primary' href="#" alt="Sign-up button">Sign Up</a>
                <a className='navbar-item button is-info' href="#" alt="Login button">Login</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
