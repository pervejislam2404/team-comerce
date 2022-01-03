import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";

const HappyClient = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <Container className="py-5">
      <div className="d-flex justify-content-center py-5">
        <h2>Happy Client</h2>
      </div>
      <Carousel
        ssr
        itemClass="image-item"
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        <div className="pe-3">
          <img
            className="img-fluid  "
            src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
            alt=""
          />
        </div>
        <div className="pe-3">
          <img
            className="img-fluid  "
            src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
            alt=""
          />
        </div>
        <div className="pe-3">
          <img
            className="img-fluid  "
            src="https://image.freepik.com/free-photo/young-attractive-handsome-guy-feels-delighted-gladden-amazed_295783-535.jpg"
            alt=""
          />
        </div>
        <div className="pe-3">
          <img
            className="img-fluid  "
            src="https://image.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg"
            alt=""
          />
        </div>
        <div className="pe-3">
          <img
            className="img-fluid  "
            src="https://image.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </Container>
  );
};

export default HappyClient;
