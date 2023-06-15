/*import logo from "./logo.svg";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import About from "../../pages/About/About";
import Location from "../../pages/Location/Location";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} errorElement={<Error />} />
          <Route
            path="/location/:id"
            element={<Location />}
            errorElement={<Error />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
