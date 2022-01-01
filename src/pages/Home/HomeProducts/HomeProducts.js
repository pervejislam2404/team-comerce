import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
          <div
            class="col-12 col-md-3 pb-5 d-flex justify-content-center"
            key={product._id}
          >
            <Link
              className="text-decoration-none text-secondary"
              to={`/singleProductDetail/${product._id}`}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "20rem", border: "1px solid lightGray" }}
                  variant="top"
                  src={product.img}
                />
                <div className="shadow-sm p-2 ">
                  <div className="d-flex justify-content-between ">
                    <div className="">
                      <h4 className="text-secondary">{product.name}</h4>
                      <small className="p-0 m-0 text-secondary ">
                        <Rating
                          readonly
                          initialRating={product.ratting}
                          emptySymbol="bi bi-star"
                          fullSymbol="bi bi-star-fill"
                        />
                      </small>
                      <p className="p-0 m-0 text-secondary">
                        $ {product.price}
                      </p>
                    </div>
                    <div className="">
                      <p>
                        <i class="bi bi-bag-check-fill text-secondary"></i>
                      </p>
                      <p>
                        <i class="bi bi-eye-fill text-secondary"></i>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="">Color</div>
                    <div className="">S M X XL</div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
