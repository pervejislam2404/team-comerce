import React from 'react';
import { Container } from 'react-bootstrap';
import pic from './pablita-695.png'
const Nopage = () => {
    return (
        // 404 image
        <Container>
            <img src={pic} alt="" className='img-fluid' height='100%' width='100%' />
        </Container>
    );
};
export default Nopage;