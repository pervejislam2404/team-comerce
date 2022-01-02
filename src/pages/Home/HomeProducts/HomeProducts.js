import React, { useEffect, useState } from "react";
import AddToCartModal from "../AddToCartModal/AddToCartModal";

import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center pt-5">
        <div className="">
          <h2>Our Top Collection</h2>
          <p>Browse the collection of top products</p>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5 pt-3">
        <h5 className="px-3">FOR ALL</h5>
        <h5 className="px-3">FOR MEN</h5>
        <h5 className="px-3">FOR WOMEN</h5>
      </div>

      <div class="row">
        {products?.map((product) => (
          <HomeProduct product={product} setModalShow={setModalShow} />
        ))}
      </div>
      <AddToCartModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HomeProducts;
