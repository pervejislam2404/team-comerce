import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import AllProducts from "./pages/AllProducts/AllProducts/AllProducts";
import SingleProductDetail from "./pages/AllProducts/SingleProductDetail/SingleProductDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoutes from "./pages/Shared/Private/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/private" element={<PrivateRoutes />} /> */}
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/singleProductDetail/:id" element={<SingleProductDetail />}
          />
          <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes >} >
            <Route path="/dashboard" element={""} />
          </Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
