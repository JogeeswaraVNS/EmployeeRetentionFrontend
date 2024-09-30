import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ProjectNavbar() {
  return (
    <div>

<div>


<Navbar expand="lg" style={{backgroundColor:'#03346E'}}>
      <Container>
        <Navbar.Brand className='text-white' style={{fontFamily:'Lexend, sans-serif'}} href="/">Artificial Intelligence Based Automation Framework for Human Resource Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link className='text-white' href="/upload">Upload</Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link className='text-white' href="/employeecategory">Employee Category</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>

    </div>
  )
}

export default ProjectNavbar