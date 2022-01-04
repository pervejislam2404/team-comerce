import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ShowModal from '../ShowModal/ShowModal';

const StockUpdate = () => {
    const [products, setProducts] = useState([]);

    const { reset } = useForm();
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleData = (product) => {
        console.log(product);
        setItem(product)
        handleShow();
    }
    let count = 0;
    useEffect(() => {
        fetch("https://limitless-hollows-74908.herokuapp.com/getAllProducts")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [products]);

    const handleremove = (id) => {
        axios.delete(`https://limitless-hollows-74908.herokuapp.com/deleteProduct/${id}`).then(res => {
            if (res.data) {
                const collect = products.filter(product => product._id !== id)
                setProducts(collect);
            }
        })
    }

    // stock update
    const onSubmit = data => {
        reset('');

        console.log(data)
        axios.put('https://limitless-hollows-74908.herokuapp.com/updateStock', data).then(res => res.data ? setItem({}) : '')
        handleClose();

    }

    return (
        <Container fluid>
            {products.length ?
                <Table responsive striped bordered hover variant="dark">
                    {/* table header */}
                    <thead>
                        <tr className='text-center'>
                            <th className='fs-3 text-white'>Sl</th>
                            <th className='fs-3 text-white'>Product Name</th>
                            <th className='fs-3 text-white'>stock</th>
                            <th className='fs-3 text-white'>update</th>
                            <th className='fs-3 text-white'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* looping data */}

                        {products.map(product =>
                            <tr key={product._id} className='text-center'>
                                <td className='fs-4 text-white '>{++count}</td>
                                <td className='fs-4 text-white '>{product.name}</td>
                                <td className='fs-4 text-white '>{product.stock}</td>
                                <td className='fs-5 text-white '><Button
                                    variant="primary"
                                    onClick={() => handleData(product)}
                                >
                                    Update Stock
                                </Button></td>
                                <td className='fs-4 text-white '><Button
                                    variant="primary"
                                    onClick={() => handleremove(product._id)}
                                >
                                    Delete
                                </Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table> : ''
            }

            <ShowModal show={show} handleClose={handleClose} product={item} onSubmit={onSubmit} ></ShowModal>
        </Container>
    );
};

export default StockUpdate;