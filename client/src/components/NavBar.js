import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/' style={{textDecoration:'none'}}>   <Navbar.Brand >S.COMPANY</Navbar.Brand> </Link>
                    <Nav className="me-auto">
                         <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link >Features</Nav.Link>
                        <Nav.Link >Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
