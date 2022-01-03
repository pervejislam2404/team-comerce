import React, { useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './dash.css'
const Dashboard = () => {
    // for now
    const [admin, setadmin] = useState(true)
    // hamburger control
    const togle = () => {
        let el = document.getElementById("wrapper");
        let toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };
    }

    return (
        <Container fluid className=' prim-bg d-flex' id="wrapper">
            <Row id="sidebar-wrapper">
                <Container className='text-center bg-white  sw'>
                    <div className="sidebar-heading text-dark text-center py-4 primary-text fs-4 fw-bold text-uppercase">
                        <i className="fas fa-user-secret"></i>{admin ? "admin" : "username"}
                    </div>
                    <ListGroup variant="flush" className='me-3'>
                        {/* user routes*/}

                        <NavLink to={`/dashboard`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i class="fas fa-home"></i> Home</ListGroup.Item></NavLink>
                        <NavLink to={`/dashboard/cart`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i class="fas fa-home"></i> Cart</ListGroup.Item></NavLink>
                        <NavLink to={`/dashboard/myOrder`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i class="fas fa-home"></i> My Orders</ListGroup.Item></NavLink>

                        {/* admin routes*/}
                        {admin && <div>

                            <NavLink to={`/dashboard/admin`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i className="fas fa-user-lock"></i> Add Admin</ListGroup.Item></NavLink>
                            <NavLink to={`/dashboard/allUser`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i className="fas fa-user-check"></i> All User </ListGroup.Item></NavLink>
                            <NavLink to={`/dashboard/allOrder`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0'><i class="fas fa-cart-arrow-down"></i> Orders</ListGroup.Item></NavLink>
                        </div>}
                        <ListGroup.Item onClick={"logOut"} className='point '><i class="fas fa-sign-out-alt"></i> LogOut</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Row >
            <Row id="page-content-wrapper">
                <div className="hamburger">

                    <span className='ms-auto  fs-3'><i onClick={togle} className="fas fa-align-left green" id="menu-toggle"></i></span>

                </div>
                <Col className='main-content'>
                    <div className="content">

                        <Outlet></Outlet>
                    </div>
                    {/* nested routes */}

                </Col>
            </Row>
        </Container >
    );
};


export default Dashboard;