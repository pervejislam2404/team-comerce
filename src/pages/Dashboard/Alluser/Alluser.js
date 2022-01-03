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

    useEffect(() => {
        setDisplay(allUser);
    }, [allUser]);


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

            <Table responsive striped bordered hover variant="dark">

                {/* table header */}
                <thead>
                    <tr className='text-center'>
                        <th className='fs-3 text-white'>Sl</th>
                        <th className='fs-3 text-white'>name</th>
                        <th className='fs-3 text-white'>email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* looping data */}

                    {display.map(rider =>
                        <tr key={rider._id} className='text-center'>
                            <td className='fs-4 text-white '>{++count}</td>
                            <td className='fs-4 text-white '>{rider.displayName}</td>
                            <td className='fs-4 text-white '>{rider.email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default Alluser;