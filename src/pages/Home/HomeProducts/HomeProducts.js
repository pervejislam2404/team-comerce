import React, { useEffect, useState } from "react";

import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
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

  // useEffect(() => {
  //   fetch(
  //     "https://limitless-hollows-74908.herokuapp.com/getProductByCategory/shoes"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center pt-5">
        <div className="">
          <h2>Our Top Collection</h2>
          <p>Browse the collection of top products</p>
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

export default HomeProducts;
