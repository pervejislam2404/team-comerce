import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './shared.css'
import DetailChart from '../../DetailChart/DetailChart';
const SharedDash = () => {
    return (
        <Container data-aos="zoom-in-down" className="shared mt-1">
            <h2 className='my-5 text-center'>Welcome To Dashbaord</h2>

            <DetailChart/>

            <Row className="g-3 ">
                <Col xs={12} md={6} >
                    <div className="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">553</h3>
                            <p className="fs-5">products</p>
                        </div>
                        <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>

                <Col xs={12} md={6} >
                    <div class="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">4920</h3>
                            <p className="fs-5">Sales</p>
                        </div>
                        <i
                            className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>

                <Col xs={12} md={6} >
                    <div className="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">3899</h3>
                            <p className="fs-5">Delivery</p>
                        </div>
                        <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>

                <Col xs={12} md={6}  >
                    <div className="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">25%</h3>
                            <p className="fs-5">Increase</p>
                        </div>
                        <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SharedDash;