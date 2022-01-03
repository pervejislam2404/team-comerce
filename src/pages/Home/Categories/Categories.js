import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  const [url, setUrl] = useState("");
  const handleImgUpdates = (url) => {
    setUrl(url);
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
                "https://image.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-3"
                width="80px"
                src="https://cdn-icons.flaticon.com/png/512/3275/premium/3275391.png?token=exp=1641211155~hmac=4baa10f51fb08df70e5afb5b05e60194"
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
                "https://image.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-3"
                width="80px"
                src="https://cdn-icons.flaticon.com/png/512/2912/premium/2912536.png?token=exp=1641211114~hmac=1f579997183cff55e8af4fcfa91f57ef"
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
                "https://image.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_74190-4885.jpg"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-3"
                width="80px"
                src="https://cdn-icons.flaticon.com/png/512/2822/premium/2822419.png?token=exp=1641211077~hmac=6ccd5d4e1b11bd11551552f93bf7e3b4"
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
                "https://image.freepik.com/free-vector/sport-training-running-tennis-shoes-advertising-realistic-composition-with-pair-trendy-comfortable-everyday-wear-sneakers-illustration_1284-31193.jpg"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                className="img-fluid mx-3"
                width="80px"
                src="https://cdn-icons.flaticon.com/png/512/500/premium/500225.png?token=exp=1641211016~hmac=9aac7723d31e05b794b3d17da6d1e4f6"
                alt=""
              />
            </div>
            <div>
              <h4>Shoes</h4>
              <p>420 products</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={9} className="img">
          <div height="550" className="" id="img">
            <img
              height="423px "
              width="100%"
              src={
                url ||
                "https://image.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <Link to="/allProducts">
              <Button
                className="button"
                variant="primary"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  padding: "8px 15px",
                }}
              >
                View All
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
