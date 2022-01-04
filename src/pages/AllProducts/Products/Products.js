import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="container py-5">
      <div>
        <h2 className="pb-5">Filter Your Products</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 border">
            <h4 className="pt-2">Category</h4>
            <hr />
            <Link to="/products">
              <div className="catbg p-3 my-3 text-black">
                <h5>All Categories</h5>
              </div>
            </Link>
            <Link to="/products/fashion">
              <div className="catbg p-3 my-3 text-black">
                <h5>Fashion</h5>
              </div>
            </Link>
            <Link to="/products/watches">
              <div className="catbg p-3 my-3 text-black">
                <h5>Watches</h5>
              </div>
            </Link>
            <Link to="/products/bags">
              <div className="catbg p-3 my-3 text-black text-align-left">
                <h5>Bags</h5>
              </div>
            </Link>
            <Link to="/products/shoes">
              <div className="catbg p-3 my-3 text-black">
                <h5>Shoes</h5>
              </div>
            </Link>
            <Link to="/products/furniture">
              <div className="catbg p-3 my-3 text-black">
                <h5>Furniture</h5>
              </div>
            </Link>
            <Link to="/products/technology">
              <div className="catbg p-3 my-3  text-black text-align-left">
                <h5>Technology</h5>
              </div>
            </Link>
          </div>
          <div class="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
