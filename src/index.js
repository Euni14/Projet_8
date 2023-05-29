import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*import App from "./compenents/App";
import reportWebVitals from "./reportWebVitals";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
{
  /*https://efficientuser.com/2022/10/07/reactdom-render-is-no-longer-supported-in-react-18/ */
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
