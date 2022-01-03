import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="container py-5">
      <div>
        <h4 className="pb-5">Filter Products</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 border">
            <h4 className="pt-2">Category</h4>
            <hr />
            <Link to="/products">
              <p>All Categories</p>
            </Link>
            <Link to="/products/fashion">
              <p>Fashion</p>
            </Link>
            <Link to="/products/watches">
              <p>Watches</p>
            </Link>
            <Link to="/products/bags">
              <p>Bags</p>
            </Link>
            <Link to="/products/shoes">
              <p>Shoes</p>
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
