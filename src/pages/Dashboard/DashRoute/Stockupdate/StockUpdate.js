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
    const [flag, setFlag] = useState(false);
    // const [stock, setStock] = useState();
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
    });

    const onSubmit = data => {
        reset('');
        setFlag(true)

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
                        </tr>
                    </thead>
                    <tbody>
                        {/* looping data */}

                        {products.map(product =>
                            <tr key={product._id} className='text-center'>
                                <td className='fs-4 text-white '>{++count}</td>
                                <td className='fs-4 text-white '>{product.name}</td>
                                <td className='fs-4 text-white '>{product.stock}</td>
                                <td className='fs-4 text-white '><Button
                                    variant="primary"
                                    onClick={() => handleData(product)}
                                >
                                    Update Stock
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