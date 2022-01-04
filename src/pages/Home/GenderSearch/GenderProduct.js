import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProducts/HomeProduct';

const GenderProduct = () => {
    const [products, setProducts] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch("https://limitless-hollows-74908.herokuapp.com/getAllProducts")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
        setDisplay(products);
        console.log(products);
    }, [products]);
    const menClick = async () => {
        console.log('click3');

        let result = await products.filter(product => product.gender === 'men')
        setDisplay(result);
    }
    const womenClick = async () => {
        console.log('click2');

        let result = await products.filter(product => product.gender === 'women')
        setDisplay(result);
    }
    const allClick = async () => {
        console.log('click1');
        let result = await products.filter(product => product.gender === 'all')
        setDisplay(result);
    }


    return (
        <div className="container py-5">
            <div className="d-flex justify-content-center pt-5">
                <div className="">
                    <h2 className='fw-bold'>Browse Collections</h2>
                    <hr className='w-100 mx-auto' />
                </div>
            </div>
            <div className="d-flex justify-content-center pb-5 pt-3">
                <h5 onClick={allClick} className="px-3 pointer">FOR ALL</h5>
                <h5 onClick={menClick} className="px-3 pointer">FOR MEN</h5>
                <h5 onClick={womenClick} className="px-3 pointer">FOR WOMEN</h5>
            </div>

            <div class="row">
                {display?.map((product) => (
                    <HomeProduct product={product} />
                ))}
            </div>
        </div>
    );
};


export default GenderProduct;