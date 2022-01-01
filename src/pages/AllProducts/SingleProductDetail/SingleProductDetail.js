import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const SingleProductDetail = ({ deviceType }) => {
  let { id } = useParams();
  const [img, setImg] = useState("");
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch(
      `https://limitless-hollows-74908.herokuapp.com/singleProductDetail/${id}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      paritialVisibilityGutter: 30,
    },
  };
  return (
    <div className="container py-5">
      <div className="container">
        <div className="row">
          <div className="">
            <h4>Best selling Products</h4>
          </div>
          {products.length && (
            <div className="col-md-3">
              {products?.map((pd) => (
                <div
                  className="d-flex justify-content-around align-items-center shadow-sm my-3"
                  key={pd._id}
                >
                  <div className="">
                    <img style={{ width: "80px" }} src={pd.img} alt="" />
                  </div>
                  <div className="">
                    <h4>{pd.name}</h4>
                    <p>
                      <Rating
                        readonly
                        initialRating={pd.ratting}
                        emptySymbol="bi bi-star"
                        fullSymbol="bi bi-star-fill"
                      />
                    </p>
                    <p>Price $ {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="col-md-4">
            <img
              className="w-100"
              height="400px"
              src={img || product.img}
              alt=""
            />
            <div className="py-5">
              {product?.images?.length && (
                <Carousel
                  ssr
                  itemClass="image-item"
                  responsive={responsive}
                  arrows={true}
                  infinite={true}
                >
                  {product?.images?.map((img) => {
                    return (
                      <div key={img}>
                        <img
                          className="w-75"
                          height="70px"
                          src={img}
                          alt=""
                          onClick={(e) => setImg(e.target.src)}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              )}
            </div>
          </div>
          <div className="col-md-5">
            <h4>{product.name}</h4>
            <Rating
              readonly
              initialRating={product.ratting}
              emptySymbol="bi bi-star"
              fullSymbol="bi bi-star-fill"
            />
            <p>{product.description}</p>
            <div className="d-flex justify-content-between">
              <p>Price $ {product.price}</p>
              <p>In stock {product.price}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>color</p>
              <Button variant="primary">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
