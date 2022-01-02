import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import AllProducts from "./pages/AllProducts/AllProducts/AllProducts";
import SingleProductDetail from "./pages/AllProducts/SingleProductDetail/SingleProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route
            path="/singleProductDetail/:id"
            element={<SingleProductDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
