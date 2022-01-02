import React from "react";
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import UserReview from '../UserReview/UserReview';
import HappyClient from '../HappyClient/HappyClient';

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
