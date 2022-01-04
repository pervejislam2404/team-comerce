import React from "react";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import UserReview from "../UserReview/UserReview";
import HappyClient from "../HappyClient/HappyClient";
import Categories from "../Categories/Categories";
import GenderProduct from "../GenderSearch/GenderProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProducts />
      <GenderProduct />
      <Categories />
      <UserReview />
      <HappyClient />
    </div>
  );
};

export default Home;
