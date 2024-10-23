import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import DesignService from "./components/DesignService";
import DevelopmentService from "./components/DevelopmentService";
import './App.css'; // Add some custom styling

function App() {
  return (
    <Router>
      <div className="navbar">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/*" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
