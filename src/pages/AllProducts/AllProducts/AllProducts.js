import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container py-5">
      <div>
        <h4 className="pb-5">Filter Products</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 border">
            <h4 className="pt-2">Category</h4>
            <hr />
            <p>t shirt</p>
            <p>t shirt</p>
            <p>t shirt</p>
            <p>t shirt</p>
            <h4>Size</h4>
            <hr />
            <p>S</p>
            <p>M</p>
            <p>X</p>
            <p>XL</p>
          </div>
          <div class="col-md-9">
            <div className="row">
              {products?.map((product) => (
                <div
                  class="col-12 col-md-4 pb-5 d-flex justify-content-center"
                  key={product._id}
                >
                  <Link
                    className="text-decoration-none text-secondary"
                    to={`/singleProductDetail/${product._id}`}
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        style={{
                          height: "18rem",
                          border: "1px solid lightGray",
                        }}
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
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
