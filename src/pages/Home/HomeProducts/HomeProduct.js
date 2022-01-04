import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./HomeProduct.css";

const HomeProduct = ({ product }) => {
  return (
    <div
      className="col-12 col-md-3 pb-5 d-flex justify-content-center "
      key={product._id}
      id="cardHover"
    >
      <Link
        className="text-decoration-none text-secondary"
        to={`/singleProductDetail/${product._id}`}
      >
        <Card style={{ minHeight: "28rem" }} className="cardHover">
          <Card.Img
            style={{
              height: "20rem",
              border: "1px solid lightGray",
              padding: "10px",
            }}
            variant="top"
            src={product.url}
          />
          <div className=" p-3 ">
            <div className="">
              <h5 className="text-secondary">{product.name}</h5>
              <small className="p-0 m-0 text-secondary ">
                <Rating
                  readonly
                  initialRating={product.star}
                  emptySymbol="bi bi-star ratingEmpty"
                  fullSymbol="bi bi-star-fill ratingFull"
                />
              </small>
              <p className="p-0 m-0 text-secondary">$ {product.price}</p>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default HomeProduct;
