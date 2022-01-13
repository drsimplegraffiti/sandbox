import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Term from "./Pages/Term";
import ErrorPage from "./Pages/ErrorPage";
import "../../router-tuts/src/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="#term" element={<Term />} />
        <Route path="*" element={<ErrorPage />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
