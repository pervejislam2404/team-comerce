import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Furniture = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://limitless-hollows-74908.herokuapp.com/getProductByCategory/furniture"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
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
            <Card style={{ width: "18rem" }} className='cb2 c'>
              <div className="image-box">
                <Card.Img className='im1'
                  style={{
                    height: "18rem",
                    border: "1px solid lightGray",
                  }}
                  variant="top"
                  src={product.url}
                />
              </div>
              <div className="shadow-sm p-2 ">
                <div className="d-flex justify-content-between ">
                  <div className="">
                    <h4 className="text-secondary">{product.name}</h4>
                    <small className="p-0 m-0 text-secondary ">
                      <Rating
                        readonly
                        initialRating={product.star}
                        emptySymbol="bi bi-star"
                        fullSymbol="bi bi-star-fill"
                      />
                    </small>
                    <p className="p-0 m-0 text-secondary">$ {product.price}</p>
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
  );
};

export default Furniture;
