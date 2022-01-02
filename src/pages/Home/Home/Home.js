import React from "react";
import HomeProducts from '../HomeProducts/HomeProducts';
import UserReview from '../UserReview/UserReview';
import HappyClient from '../HappyClient/HappyClient';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeProducts />
      <UserReview />
      <HappyClient />
    </div>
  );
};

export default Home;
