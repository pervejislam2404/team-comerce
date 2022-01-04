import axios from 'axios';
import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector((state) => state.statesCounter.user);

    // sending review data to db
    const onSubmit = data => {
        reset('');
        console.log(data)
        axios.post('https://limitless-hollows-74908.herokuapp.com/saveUserReview', data).then(res => res.data ? handleShow() : '')

    }
    console.log(user.photoURL);
    return (
        // review data form
        <Container data-aos="zoom-in-up">
            <h2 className='text-center'>Give Us a Review</h2>
            <hr className='w-25 mx-auto' />
            <form className='mt-3 mx-auto pt-2 w-50' onSubmit={handleSubmit(onSubmit)}>
                <input required placeholder='name' defaultValue={user.displayName} className='reservation w-100' {...register("name")} />
                <input required placeholder='image' defaultValue={user.photoURL} className='reservation w-100'{...register("img")} />
                <textarea rows='4' required placeholder='description' className='reservation w-100'{...register("descript")} />
                <input type='number' min='1' max='5' required placeholder='rating' className='reservation w-100'{...register("star")} />
                <button className='adminAdd btncolr w-25 mx-auto mt-4 fs-3 '>Add </button>

            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Added</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cheers!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AddReview;