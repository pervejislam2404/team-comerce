import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Rating from "react-rating";

const UserReview = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/getAllReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="review-bg">
      <div className="container py-5">
        <div className="d-flex flex-column align-items-center pb-5">
          <h2 className="">Client Review</h2>
          <p>What say client about us</p>
        </div>
        <Carousel
          ssr
          itemClass="image-item"
          responsive={responsive}
          arrows={true}
          infinite={true}
          className="bg-white"
        >
          {reviews.map((review) => (
            <div className=" d-flex flex-column justify-content-center align-items-center m-5">
              <img
                className="rounded-circle"
                width="100"
                src={review.img}
                alt=""
              />
              <h4>{review.name}</h4>
              <p>
                <Rating
                  readonly
                  initialRating={review.star}
                  emptySymbol="bi bi-star ratingEmpty"
                  fullSymbol="bi bi-star-fill ratingFull"
                />
              </p>
              <p>{review.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default UserReview;
