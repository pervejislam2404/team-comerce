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
                src="https://cdn-icons.flaticon.com/png/512/1059/premium/1059791.png?token=exp=1641117886~hmac=63b61c781123e84d82a3e30829621f94"
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
                src="https://as2.ftcdn.net/v2/jpg/02/13/64/55/1000_F_213645596_loormHyI0s6rtzHALtPVT2Zj2YG218ic.jpg"
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
                src="https://cdn-icons.flaticon.com/png/512/2987/premium/2987649.png?token=exp=1641118085~hmac=995d01a03e0a1795e0f8b3ae23f77d83"
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
                src="https://cdn-icons.flaticon.com/png/512/500/premium/500225.png?token=exp=1641118145~hmac=425e34b97df5d01cf13d1f69abeceb75"
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
