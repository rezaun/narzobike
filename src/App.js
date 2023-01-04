import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
