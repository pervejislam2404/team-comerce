import React from "react";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProducts />
      <UserReview />
    </div>
  );
};

export default Home;
