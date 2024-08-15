import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
            <Link to={'/'}><i className="fa-solid fa-building-columns" size="2xl" style={{color: "#1d19f5",}} /></Link>
              {' '}
              BANK ACCOUNT APPLICATION
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>


  )
}

export default Header