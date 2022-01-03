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

    const handlesearch = event => {
        // getting text value
        let text = event.target.value;
        let result = allUser.filter(user => user.displayName.toLowerCase().includes(text.toLowerCase()))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }

    return (
        <Container data-aos="flip-right" fluid className='pt-3   text-center allorderbg'>
            <h2 className='text-center fw-bold'>User contact information</h2>
            <hr className='d-block w-50 mb-5 mx-auto' />
            <Container>
                <Row>

                    <Col>
                        <div className="searchDiv h-25 py-2 mb-5 ">
                            <h2 className='fs-4 fw-bold text-light mt-3'>SearchByName</h2>
                            <input className='search w-50' onChange={handlesearch} placeholder='Search by name' type="text" name="search" id="search" />
                        </div>
                    </Col>
                </Row>

            </Container>


        </Container>
    );
};

export default Alluser;