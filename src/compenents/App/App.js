import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
