import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
<<<<<<< HEAD
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
=======
import AllProducts from "./pages/AllProducts/AllProducts/AllProducts";
import SingleProductDetail from "./pages/AllProducts/SingleProductDetail/SingleProductDetail";
>>>>>>> bd835b986eda28bec7d5d69d891c2b2aee31e767

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        </Routes>        
=======
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route
            path="/singleProductDetail/:id"
            element={<SingleProductDetail />}
          />
        </Routes>
>>>>>>> bd835b986eda28bec7d5d69d891c2b2aee31e767
      </Router>
    </div>
  );
}

export default App;
