import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../firebase/useFirebase';
import './dash.css'
const Dashboard = () => {
    const admin = useSelector((state) => state.statesCounter.admin);
    const user = useSelector((state) => state.statesCounter.user);

    const handleSignOut = () => {
        googleSingOut();
    };
    const { googleSingOut } = useFirebase();

    // for now
    // const [admin, setadmin] = useState(true)
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
                <Container className='text-center bg-white'>
                    <div className="sidebar-heading text-info text-center py-4 primary-text fs-4 fw-bold text-uppercase">
                        <i className="fas fa-user-secret text-secondary"></i> {admin ? "admin" : `${user.displayName}`}
                    </div>
                    <ListGroup variant="flush" className=' text-start nav-item'>
                        {/* user routes*/}
                        {!admin && <div>
                            <NavLink className={({ isActive }) => isActive ? "active" : ""} to={`/dashboard`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0 text-info'><i className="fas fa-home text-info"></i> Home</ListGroup.Item></NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/cart`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0 text-info'><i className="fas fa-cart-plus text-info"></i> Cart</ListGroup.Item></NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/myOrder`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0 text-info'><i className="fas fa-folder-plus text-info"></i> My Orders</ListGroup.Item></NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/review`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0 text-info'><i class="fas fa-comment-alt"></i> Add review</ListGroup.Item></NavLink>
                        </div>}
                        {/* admin routes*/}
                        {admin && <div>

                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/admin`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0 text-info'><i className="fas fa-user-lock text-info"></i> Add Admin</ListGroup.Item></NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/allUser`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0 text-info'><i className="fas fa-user-check text-info"></i> All User </ListGroup.Item></NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/manageAllOrders`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0 text-info'><i class="fas fa-shopping-bag"></i> Manage All Orders</ListGroup.Item></NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : ''} to={`/dashboard/stockUpdate`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0 text-info'><i className="fas fa-cart-arrow-down text-info"></i> Product Update</ListGroup.Item></NavLink>
                        </div>}
                        <ListGroup.Item active onClick={handleSignOut} className='point '><i className="fas fa-sign-out-alt"></i> LogOut</ListGroup.Item>
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