import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, } from 'react-bootstrap';
import './alluser.css';
const Alluser = () => {
    let count = 0;
    const [allUser, setallUser] = useState([])
    const [display, setDisplay] = useState([])

    useEffect(() => {
        fetch(`https://limitless-hollows-74908.herokuapp.com/getAllUsers`).then(res => res.json()).then(data => setallUser(data))

    }, [])


    return (
        <Container data-aos="flip-right" fluid className='pt-3   text-center allorderbg'>
            <h2 className='text-center fw-bold'>User contact information</h2>
            <hr className='d-block w-50 mb-5 mx-auto' />
            <Container>
                <Row>


                </Row>

            </Container>


        </Container>
    );
};

export default Alluser;