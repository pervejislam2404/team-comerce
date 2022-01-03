import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from '../../../firebase/useFirebase';

const Header = () => {
    const user = useSelector(state=>state.statesCounter.user);
    const {googleSingOut}= useFirebase();
    const navigate = useNavigate();

    const handleSignOut= ()=>{
        googleSingOut()
    }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Link className="text-decoration-none text-secondary" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>

            
              <Nav.Link>
                <Link
                  className="text-decoration-none text-light"
                  to="/allProducts"
                >
                  products
                </Link>
              </Nav.Link>
              <Nav.Link href="#"><Link className="text-decoration-none text-light" to="/login">Login</Link></Nav.Link>
              <Nav.Link href="#"><Link className="text-decoration-none text-light" to="/register">Register</Link></Nav.Link>
             {user?.email&& <img height="40" width="40" className="rounded-pill" src={user?.photoURL} alt="" /> }
             {user?.email&& <Nav.Link className="text-light">{user.email}</Nav.Link> }


             {user?.email ? <Nav.Link onClick={handleSignOut} className="bg-danger text-light rounded ms-2" href="#">Log Out</Nav.Link>:
              ''}
              {!user && <Link className="bg-danger text-light rounded ms-2 px-4 pt-1" to="/login">Login</Link>} 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
