import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
