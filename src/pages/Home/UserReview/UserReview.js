import React from "react";
import Carousel from "react-multi-carousel";
import Rating from "react-rating";

const UserReview = () => {
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
      items: 3,
      paritialVisibilityGutter: 30,
    },
  };
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
          <div className=" d-flex flex-column justify-content-center align-items-center m-5">
            <img
              className="rounded-circle"
              width="100"
              src="https://scontent.fdac90-1.fna.fbcdn.net/v/t1.6435-1/p160x160/186558243_891331958095401_5868203000874984080_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF8PXvSKAx0VGh-_BwB2V3urtHAJBPD7lWu0cAkE8PuVWJLS539B6qzqje0NJ_uMGztqiMrVuYVfQRxx3VTIlV8&_nc_ohc=f7EhiOYMftgAX9al2dX&_nc_ht=scontent.fdac90-1.fna&oh=00_AT_NT2xB7quRVY7YOnnSloYhGuBKnow6jkd3L9EKcp_DYg&oe=61F832C6"
              alt=""
            />
            <h4>User name</h4>
            <p>
              <Rating
                readonly
                initialRating="4"
                emptySymbol="bi bi-star"
                fullSymbol="bi bi-star-fill"
              />
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              in natus aliquam laborum ab deserunt similique ea recusandae
              possimus itaque provident omnis dolorum voluptas nobis excepturi
              culpa pariatur maiores, dolor, non autem blanditiis ducimus at
              nesciunt. Dolorum, praesentium expedita eos minima fuga
              perspiciatis impedit ipsam molestias magnam asperiores sapiente
              ut.
            </p>
          </div>
          <div className=" d-flex flex-column justify-content-center align-items-center m-5">
            <img
              className="rounded-circle"
              width="100"
              src="https://scontent.fdac90-1.fna.fbcdn.net/v/t1.6435-1/p160x160/186558243_891331958095401_5868203000874984080_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF8PXvSKAx0VGh-_BwB2V3urtHAJBPD7lWu0cAkE8PuVWJLS539B6qzqje0NJ_uMGztqiMrVuYVfQRxx3VTIlV8&_nc_ohc=f7EhiOYMftgAX9al2dX&_nc_ht=scontent.fdac90-1.fna&oh=00_AT_NT2xB7quRVY7YOnnSloYhGuBKnow6jkd3L9EKcp_DYg&oe=61F832C6"
              alt=""
            />
            <h4>User name</h4>
            <p>
              <Rating
                readonly
                initialRating="4"
                emptySymbol="bi bi-star"
                fullSymbol="bi bi-star-fill"
              />
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              in natus aliquam laborum ab deserunt similique ea recusandae
              possimus itaque provident omnis dolorum voluptas nobis excepturi
              culpa pariatur maiores, dolor, non autem blanditiis ducimus at
              nesciunt. Dolorum, praesentium expedita eos minima fuga
              perspiciatis impedit ipsam molestias magnam asperiores sapiente
              ut.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default UserReview;
