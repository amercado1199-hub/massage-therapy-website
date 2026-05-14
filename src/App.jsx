import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="simple-logo">M</div>
            <div className="logo-divider"></div>
                <div className="brand-words">
            <h1>MOVEMENT</h1>
            <p className="massage">MASSAGE</p>
            <p>SPORTS THERAPY</p>
          </div>
        </div>

        <div className="nav-links">
          <a className="active" href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#reviews">REVIEWS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span></span>
            PROFESSIONAL MASSAGE THERAPY
          </div>

          <h2>
            RECOVERY.
            <br />
            RELAXATION.
            <br />
            <span>RESULTS.</span>
          </h2>

          <p>
            Personalized massage therapy designed to help
            <br />
            you recover, recharge, and feel your best.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">BOOK YOUR SESSION →</button>
            <button className="secondary-btn">VIEW SERVICES →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;