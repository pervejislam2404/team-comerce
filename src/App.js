import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./pages/Shared/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard" element={""} />


          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
