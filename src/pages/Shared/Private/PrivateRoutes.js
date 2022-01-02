import React from 'react';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const user = useSelector((state) => state.statesCounter.user)
    console.log(user.email);
    return (
        <div>
            {user?.email}
        </div>
    );
};

export default PrivateRoutes;