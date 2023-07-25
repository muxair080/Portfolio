import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
function NavbarCode() {
  return (
    <Navbar expand="lg" collapseOnSelect variant="dark" style={{ backgroundColor: '#24263B' }}>
      <Container>
        <Navbar.Brand href="#" style={{ color: 'white' }}>muxair080</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className='nav_link' style={{ color: 'white' }} onMouseEnter={e => e.target.style.color = '#FF5823'}
            onMouseLeave={e => e.target.style.color = 'white'} >Home</Nav.Link>
            <Nav.Link href="#About" style={{ color: 'white' }} onMouseEnter={e => e.target.style.color = '#FF5823'}
            onMouseLeave={e => e.target.style.color = 'white'}>AboutMe</Nav.Link>
            <Nav.Link href="#Resume" style={{ color: 'white' }} onMouseEnter={e => e.target.style.color = '#FF5823'}
            onMouseLeave={e => e.target.style.color = 'white'}>Resume</Nav.Link>
            {/* <Nav.Link href="#link" style={{ color: 'white' }} onMouseEnter={e => e.target.style.color = '#FF5823'}
            onMouseLeave={e => e.target.style.color = 'white'}>Testimonial</Nav.Link> */}
            <Nav.Link href="#Contact" style={{ color: 'white' }} onMouseEnter={e => e.target.style.color = '#FF5823'}
            onMouseLeave={e => e.target.style.color = 'white'}
                    >ContactMe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCode;
