import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/Shared/Login/Login";
import Register from "./pages/Shared/Register/Register";
import SingleProductDetail from "./pages/AllProducts/SingleProductDetail/SingleProductDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoutes from "./pages/Shared/Private/PrivateRoutes";
import Nopage from "./pages/Shared/Nopage/Nopage";
import AdminAdd from "./pages/Dashboard/DashRoute/AddAdmin/AdminAdd";
import SharedDash from "./pages/Shared/sharedDash/SharedDash";
import UserCart from "./pages/Dashboard/DashRoute/UserCart/UserCart";
import ContactInformation from "./pages/Payment/ContactInformation/ContactInformation";
import Payment from "./pages/Payment/Payment/Payment";
import UserOrders from "./pages/Dashboard/DashRoute/UserOrders/UserOrders";
import ManageAllOrders from "./pages/Dashboard/DashRoute/ManageAllOrders/ManageAllOrders";
import Products from "./pages/AllProducts/Products/Products";
import AllCategories from "./pages/AllProducts/AllCategories/AllCategories";
import Fashion from "./pages/AllProducts/AllCategories/Fashion";
import Bags from "./pages/AllProducts/AllCategories/Bags";
import Shoes from "./pages/AllProducts/AllCategories/Shoes";
import Watches from "./pages/AllProducts/AllCategories/Watches";
import Technology from "./pages/AllProducts/AllCategories/Technology";
import Furniture from "./pages/AllProducts/AllCategories/Furniture";
import DetailChart from './pages/DetailChart/DetailChart';
import Alluser from "./pages/Dashboard/Alluser/Alluser";
import StockUpdate from "./pages/Dashboard/DashRoute/Stockupdate/StockUpdate";
import AddReview from "./pages/Dashboard/DashRoute/AddReview/AddReview";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-5">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/chart" element={<DetailChart />} />

          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/allProducts" element={<AllProducts />} /> */}
          <Route
            path="/singleProductDetail/:id"
            element={<SingleProductDetail />}
          />
          <Route
            path="/contactInformation/:id"
            element={<ContactInformation />}
          />
          <Route path="/payment/:id" element={<Payment />} />

          <Route path="/products" element={<Products />}>
            <Route path="/products" element={<AllCategories />} />
            <Route path="/products/fashion" element={<Fashion />} />
            <Route path="/products/bags" element={<Bags />} />
            <Route path="/products/shoes" element={<Shoes />} />
            <Route path="/products/watches" element={<Watches />} />
            <Route path="/products/technology" element={<Technology />} />
            <Route path="/products/furniture" element={<Furniture />} />
          </Route>

          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PrivateRoutes>
                  <SharedDash />
                </PrivateRoutes>
              }
            />
            <Route
              path="/dashboard/admin"
              element={
                <PrivateRoutes>
                  <AdminAdd />
                </PrivateRoutes>
              }
            />
            <Route
              path="/dashboard/allUser"
              element={
                <PrivateRoutes>
                  <Alluser />
                </PrivateRoutes>
              }
            />
            <Route
              path="/dashboard/manageAllOrders"
              element={
                <ManageAllOrders>
                </ManageAllOrders>
              }
            />
            <Route
              path="/dashboard/review"
              element={
                <AddReview />
              }
            />

            <Route
              path="/dashboard/stockUpdate"
              element={
                <StockUpdate />
              }
            />
            <Route path="/dashboard/cart" element={<UserCart />} />



            <Route
              path="/dashboard/myOrder"
              element={
                <PrivateRoutes>
                  <UserOrders />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
