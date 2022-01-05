import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeProduct from "../HomeProducts/HomeProduct";

const GenderProduct = () => {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/getAllProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let result = products.filter((product) => product.gender === "men");
    setDisplay(result);
  }, [products]);
  const menClick = async () => {
    let result1 = await products.filter((product) => product.gender === "male");
    setDisplay(result1.slice(10, 26));
  };
  const womenClick = async () => {
    let result = await products.filter((product) => product.gender === "femal");
    setDisplay(result);
  };
  const allClick = async () => {
    let result = await products.filter((product) => product.gender === "men");
    setDisplay(result);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center pt-5">
        <div className="">
          <h2 className="fw-bold">Browse Collections</h2>
          <hr className="w-100 mx-auto" />
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5 pt-3">
        <h5 onClick={allClick} className="px-3 pointer">
          FOR ALL
        </h5>
        <h5 onClick={menClick} className="px-3 pointer">
          FOR MEN
        </h5>
        <h5 onClick={womenClick} className="px-3 pointer">
          FOR WOMEN
        </h5>
      </div>

      {display.length ? (
        <div className="row">
          {display?.map((product) => (
            <HomeProduct product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
    </div>
  );
};

export default GenderProduct;
