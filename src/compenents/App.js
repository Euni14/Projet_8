/*import logo from "./logo.svg";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Location from "../pages/Location";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<Location />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
