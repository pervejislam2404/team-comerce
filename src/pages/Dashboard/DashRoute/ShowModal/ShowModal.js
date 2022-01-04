import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ShowModal = ({ show, handleClose, product, onSubmit }) => {
    const { register, handleSubmit } = useForm();
    return (

        <div>
            {/* modal after submit form */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>stock update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='order mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center mt-5  fw-bold'> Buy Today!!!</h2>

                        <input required placeholder='id' defaultValue={product._id} className='reservation w-100' {...register("id")} />
                        <input required placeholder='stock' defaultValue={product.stock} className='reservation w-100'{...register("stock")} />

                        <input className='reservation w-100 bg-warning text-bg' type="submit" />
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ShowModal;