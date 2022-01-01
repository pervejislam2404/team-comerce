import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>

      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />}/>
        </Routes>        
      </Router>
      
    </div>
  );
}

export default App;
