import React from 'react';
import { GiHamburger } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarLayout(auth) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><GiHamburger fontSize={27}/>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
        
            <NavDropdown title="ORDER NOW" id="basic-nav-dropdown">
              {/* <NavDropdown.Item></NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {auth.user ? (
                        <NavDropdown.Item href={route('customer.dashboard')}>Dashboard</NavDropdown.Item>
                    ) : (
                        <>
                          <NavDropdown.Item href={route('customer.register')}>Register</NavDropdown.Item>
                          <NavDropdown.Item href={route('customer.login')}>Login</NavDropdown.Item>
                        </>
                    )}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;