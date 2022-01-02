import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoutes = ({ children, ...rest }) => {
    const user = useSelector((state) => state.statesCounter.user)
    const isloading = useSelector((state) => state.statesCounter.isLoading)
    // const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isloading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoutes;