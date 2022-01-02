import React, { useState } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './dash.css'
const Dashboard = () => {
    // for now
    const [admin, setadmin] = useState(true)

    return (
        <Container fluid className=' prim-bg d-flex' id="wrapper">
            <Row id="sidebar-wrapper">
                <Container className='text-center bg-white  sw'>
                    <div className="sidebar-heading text-dark text-center py-4 primary-text fs-4 fw-bold text-uppercase">
                        <i className="fas fa-user-secret"></i>{admin ? "admin" : "userName"}
                    </div>
                    <ListGroup variant="flush" className='me-3'>
                        {/* user routes*/}
                        {!admin && <div>
                            <NavLink to={`/dashboard`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i class="fas fa-home"></i> Home</ListGroup.Item></NavLink>
                        </div>}
                        {/* admin routes*/}
                        {admin && <div>

                            <NavLink to={`/dashboard/admin`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i className="fas fa-user-lock"></i> Add Admin</ListGroup.Item></NavLink>
                            <NavLink to={`/dashboard/allUser`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i className="fas fa-biking"></i> All users </ListGroup.Item></NavLink>
                            <NavLink to={`/dashboard/allOrder`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0'><i className="fas fa-baby"></i> Order List</ListGroup.Item></NavLink>
                        </div>}
                        <ListGroup.Item onClick='{logOut}' className='point '><i class="fas fa-sign-out-alt"></i> LogOut</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Row>
        </Container>
    );
};

export default Dashboard;