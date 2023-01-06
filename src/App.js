import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { Toaster } from 'react-hot-toast';
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Navbar>
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
