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

    return (
        <div>

        </div>
    );
};

export default AddReview;