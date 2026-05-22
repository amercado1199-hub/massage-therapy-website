import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="brand" onClick={closeMenu}>
            <div className="logo-text">
              <h1>A.R.C.E</h1>
              <span>MASSAGE THERAPY</span>
            </div>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={closeMenu}>HOME</Link>
            <Link to="/about" onClick={closeMenu}>ABOUT</Link>
            <Link to="/services" onClick={closeMenu}>SERVICES</Link>
            <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
  <h3>A.R.C.E</h3>

  <p className="footer-tagline">
    Arts • Recovery • Calm • Energy
  </p>

  <div className="footer-socials">
 <a
  href="https://instagram.com/carlosarcejr"
  target="_blank"
  rel="noreferrer"
  className="instagram-icon"
>
  <img src="/instagram-logo.png" alt="Instagram" />
</a>
  </div>

  <span className="copyright">
    © 2026 A.R.C.E Massage. All rights reserved.
  </span>
</footer>
      </div>
    </Router>
  );
}

export default App;