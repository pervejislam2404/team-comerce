import React from "react";
import Banner from "../Banner/Banner";
import HappyClient from "../HappyClient/HappyClient";
import HomeProducts from "../HomeProducts/HomeProducts";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProducts />
      <UserReview />
      <HappyClient />
    </div>
  );
};

export default Home;
