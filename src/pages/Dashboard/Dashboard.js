import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

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
                </Container>
            </Row>
        </Container>
    );
};

export default Dashboard;