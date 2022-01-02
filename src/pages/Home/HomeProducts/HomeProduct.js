import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./HomeProduct.css";

const HomeProduct = ({ product, setModalShow }) => {
  return (
    <div
      className="col-12 col-md-3 pb-5 d-flex justify-content-center "
      key={product._id}
      id="cardHover"
    >
      {/* <Link
      className="text-decoration-none text-secondary"
      to={`/singleProductDetail/${product._id}`}
    > */}
      <Card style={{ width: "18rem" }} className="cardHover">
        <Card.Img
          style={{ height: "20rem", border: "1px solid lightGray" }}
          variant="top"
          src={product.img}
        />
        <div className="shadow-sm p-2 ">
          <div className="d-flex justify-content-between ">
            <div className="">
              <Link
                className="text-decoration-none text-secondary"
                to={`/singleProductDetail/${product._id}`}
              >
                <h4 className="text-secondary">{product.name}</h4>
              </Link>
              <small className="p-0 m-0 text-secondary ">
                <Rating
                  readonly
                  initialRating={product.ratting}
                  emptySymbol="bi bi-star ratingEmpty"
                  fullSymbol="bi bi-star-fill ratingFull"
                />
              </small>
              <p className="p-0 m-0 text-secondary">$ {product.price}</p>
            </div>
            <div className="">
              <button
                className="border-0"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to cart"
              >
                <i class="bi bi-bag-check-fill text-secondary"></i>
              </button>
              <br />
              <button
                className="border-0"
                data-toggle="tooltip"
                data-placement="top"
                title="Quick view"
                onClick={() => setModalShow(true)}
              >
                <i class="bi bi-eye-fill text-secondary"></i>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="">Color</div>
            <div className="">S M X XL</div>
          </div>
        </div>
      </Card>
      {/* </Link> */}
    </div>
  );
};

export default HomeProduct;
