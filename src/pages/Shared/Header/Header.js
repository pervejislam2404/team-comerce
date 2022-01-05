import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFirebase from "../../../firebase/useFirebase";
import { getStoredCart } from "../../../utilities/fakedb";

const Header = () => {
  const user = useSelector((state) => state.statesCounter.user);
  const { googleSingOut } = useFirebase();
  const saveCart = getStoredCart();
  const [qut, setQut] = useState();
  const handleSignOut = () => {
    googleSingOut();
  };

  useEffect(() => {
    let quantity = 0;
    for (const key in saveCart) {
      quantity += parseInt(saveCart[key]);
    }
    setQut(quantity);
  }, [saveCart, qut]);
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">
                <Link className="text-decoration-none text-light" to="/">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  className="text-decoration-none text-light"
                  to="/dashboard/cart"
                >
                  Cart <Badge bg="info">{qut}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-light"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-light"
                  to="/products"
                >
                  products
                </Link>
              </Nav.Link>

              {!user?.email && (
                <Nav.Link href="#">
                  <Link
                    className="text-decoration-none text-light"
                    to="/register"
                  >
                    Register
                  </Link>
                </Nav.Link>
              )}
              {user?.email && (
                <img
                  height="40"
                  width="40"
                  className="rounded-pill mx-3"
                  src={
                    user?.photoURL ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sWItJHAxNH9OOPWQ9urcp2EaSKTu-Cw4UA&usqp=CAU"
                  }
                  alt=""
                />
              )}
              {user?.email ? (
                <Nav.Link
                  onClick={handleSignOut}
                  className="bg-danger text-light rounded ms-2"
                  href="#"
                >
                  Log Out
                </Nav.Link>
              ) : (
                ""
              )}
              {!user && (
                <Link
                  className="bg-danger text-light rounded ms-2 px-4 pt-1"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
