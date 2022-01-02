import React, { useState } from 'react';
import axios from 'axios';
import { Container, Modal, Button } from 'react-bootstrap';
import './admin.css'
const AdminAdd = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = e => {
        const value = e.target.value;
        setEmail(value)

    }

    const handleAddAdmin = e => {
        e.preventDefault()
        console.log(email)
        axios.put(`/admin/${email}`).then(res => res.data.modifiedCount ? handleShow() : '')

    }
    return (
        <Container >
            <h2 data-aos="fade-down-right" className='text-center'>Add An Admin</h2>
            <form className='mt-3 pt-2 d-flex justify-content-center py-3' onSubmit={handleAddAdmin}>
                <input required className='adminAdd   my-4 w-25' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                <button className='adminAdd btncolr px-5 mt-4 fs-3 '>Add </button>
            </form>
            {/* modal for showing confirmation */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Added</Modal.Title>
                </Modal.Header>
                <Modal.Body>We have a new admin in the house!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cheers!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AdminAdd;