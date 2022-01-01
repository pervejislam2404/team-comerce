import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./pages/Shared/Header/Header";
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';

function App() {
  return (
    <div>

      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        </Routes>        
      </Router>
      
    </div>
  );
}

export default App;
