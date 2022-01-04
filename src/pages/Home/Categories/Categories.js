import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  const Navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [path, setPath] = useState("");
  console.log(path);
  const handleImgUpdates = (url, path) => {
    setUrl(url);
    setPath(path);
  };

  return (
    <Container className="py-5">
      <div className=" d-flex flex-column justify-content-center align-items-center pb-5">
        <h2>Choose Category</h2>
        <p>Browse The Collection of Top Categories</p>
      </div>
      <Row>
        <Col xs={12} md={3} className="">
          <div
            className="d-flex my-2 py-2 catbg"
            onClick={() =>
              handleImgUpdates(
                "https://image.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg",
                "/products/fashion"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-4"
                width="70px"
                src="https://i.ibb.co/0ZyJbHQ/3275391.png"
                alt=""
              />
            </div>
            <div>
              <h4>Fashion</h4>
              <p>420 products</p>
            </div>
          </div>
          <div
            className="d-flex my-2 py-2 catbg"
            onClick={() =>
              handleImgUpdates(
                "https://image.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg",
                "/products/watches"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-4"
                width="70px"
                src="https://i.ibb.co/2dtS35G/3109881.png"
                alt=""
              />
            </div>
            <div>
              <h4>Watches</h4>
              <p>420 products</p>
            </div>
          </div>
          <div
            className="d-flex my-2 py-2 catbg"
            onClick={() =>
              handleImgUpdates(
                "https://image.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_74190-4885.jpg",
                "/products/bags"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-4"
                width="70px"
                src="https://i.ibb.co/0QNdsXg/2822419.png"
                alt=""
              />
            </div>
            <div>
              <h4>Bags</h4>
              <p>420 products</p>
            </div>
          </div>
          <div
            className="d-flex my-2 py-2 catbg"
            onClick={() =>
              handleImgUpdates(
                "https://image.freepik.com/free-vector/sport-training-running-tennis-shoes-advertising-realistic-composition-with-pair-trendy-comfortable-everyday-wear-sneakers-illustration_1284-31193.jpg",
                "/products/shoes"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-4"
                width="70px"
                src="https://i.ibb.co/S6W0jWk/2872620.png"
                alt="2872620"
              />
            </div>
            <div>
              <h4>Shoes</h4>
              <p>420 products</p>
            </div>
          </div>
          <div
            className="d-flex my-2 py-2 catbg"
            onClick={() =>
              handleImgUpdates(
                "https://image.freepik.com/free-psd/cyber-monday-sale-composition-mock-up_23-2148659811.jpg",
                "/products/technology"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-4"
                width="70px"
                src="https://i.ibb.co/MkxKwPn/186225.png"
                alt=""
              />
            </div>
            <div>
              <h4>Technology</h4>
              <p>420 products</p>
            </div>
          </div>
          <div
            className="d-flex my-2 py-2 catbg"
            onClick={() =>
              handleImgUpdates(
                "https://image.freepik.com/free-photo/white-wall-living-room-have-sofa-decoration-3d-rendering_41470-3282.jpg",
                "/products/furniture"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-4"
                width="70px"
                src="https://i.ibb.co/VxLn293/2603741.png"
                alt=""
              />
            </div>
            <div>
              <h4>Furniture</h4>
              <p>420 products</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={9} className="img">
          <div height="550" className="" id="img">
            <img
              height="600px "
              width="100%"
              src={
                url ||
                "https://image.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <Button
              className="button"
              variant="primary"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                padding: "8px 15px",
              }}
              onClick={() => Navigate(path || "/products/fashion")}
            >
              View All
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
