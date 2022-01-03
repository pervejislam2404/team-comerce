import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { addToDb } from "../../../utilities/fakedb";
import "./SingleProductDetail.css";

const SingleProductDetail = () => {
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
    fetch(
      `https://limitless-hollows-74908.herokuapp.com/getProductByCategory/${product.category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [product.category]);
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
  const handleAddToDb = (id) => {
    addToDb(id);
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <img
              className="w-100"
              height="400px"
              src={img || product.url}
              alt=""
            />
            <div className="py-5">
              {product?.images?.length && (
                <Carousel
                  ssr
                  itemClass="image-item"
                  responsive={responsive}
                  arrows={true}
                  // infinite={true}
                >
                  {product?.images?.map((img) => {
                    return (
                      <div key={img}>
                        <img
                          style={{ cursor: "pointer !important" }}
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
          <div className="col-md-7">
            <h4>{product.name}</h4>
            <Rating
              readonly
              initialRating={product.star}
              emptySymbol="bi bi-star ratingEmpty"
              fullSymbol="bi bi-star-fill ratingFull"
            />
            <p>{product.description}</p>
            <div className="d-flex justify-content-between">
              <b>
                Price $ <b>{product.price}</b>
              </b>
              <p>In stock {product.stock}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>color</p>
              <Button
                variant="primary"
                onClick={() => handleAddToDb(product._id)}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
        {/* review */}
        <div className="border p-4">
          <h4>Review</h4>
          {product?.comments?.map((comment) => (
            <div className="d-flex">
              {/* <div>
                <img
                  width="100px"
                  height="100px"
                  className="me-4 border"
                  src={product.img}
                  alt=" "
                />
              </div> */}
              <div>
                <p>User Name</p>
                <p>
                  <Rating
                    readonly
                    initialRating={comment.rating}
                    emptySymbol="bi bi-star ratingEmpty"
                    fullSymbol="bi bi-star-fill ratingFull"
                  />
                </p>
                <p>{comment.description}</p>
              </div>
            </div>
          ))}
          <hr />
        </div>
        {/* related products */}
        <div className="py-3">
          <h4 className="p-3"> Related products</h4>
          {products?.length && (
            <Carousel
              ssr
              itemClass="image-item"
              responsive={responsive}
              arrows={true}
              infinite={true}
            >
              {products?.map((pd) => (
                <Link
                  to={`/singleProductDetail/${pd._id}`}
                  className="text-decoration-none text-secondary"
                >
                  <div
                    className="border d-flex justify-content-around align-items-center py-3 mx-1"
                    key={pd._id}
                  >
                    <div className="">
                      <img
                        style={{ width: "80px", cursor: "pointer" }}
                        src={pd.url}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h4>{pd.name}</h4>
                      <p>
                        <Rating
                          readonly
                          initialRating={pd.star}
                          emptySymbol="bi bi-star ratingEmpty"
                          fullSymbol="bi bi-star-fill ratingFull"
                        />
                      </p>
                      <p>Price $ {product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
