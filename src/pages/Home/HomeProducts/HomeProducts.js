import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

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
          <div class="col-12 col-md-3 pb-5" key={product._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "20rem", border: "1px solid lightGray" }}
                variant="top"
                src="https://image.freepik.com/free-psd/white-t-shirt-model-front-view-mockup_125540-861.jpg"
              />
              <div className="d-flex justify-content-between p-2 shadow-sm">
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
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
