import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://limitless-hollows-74908.herokuapp.com/getProductByCategory/top"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-center py-5">
        <div className="">
          <h2>Our Top Collection</h2>
          <p>Browse the collection of top products</p>
        </div>
      </div>

      <div className="row">
        {products.length ? (
          ""
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="info" />
          </div>
        )}
        {products?.map((product) => (
          <HomeProduct product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
