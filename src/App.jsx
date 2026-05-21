import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <img
            src="/tree-logo.png"
            alt="Movement Sports Therapy Logo"
            className="tree-logo"
          />

          <div className="brand-text">
            <h1>MOVEMENT</h1>
            <p className="massage">MASSAGE</p>
            <span>SPORTS THERAPY</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#pricing">PRICING</a>
          <a href="#booking">BOOKING</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">PROFESSIONAL MASSAGE THERAPY</p>

          <h2>
            RECOVERY.
            <br />
            RELAXATION.
            <br />
            <span>RESULTS.</span>
          </h2>

          <p className="hero-description">
            Sports, medical, prenatal, and therapeutic massage focused on
            recovery, movement correction, pain management, and long-term
            wellness.
          </p>

          <div className="hero-buttons">
            <a href="#booking">
              <button className="primary-btn">BOOK A SESSION</button>
            </a>

            <a href="#services">
              <button className="secondary-btn">VIEW SERVICES</button>
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="content-section">
        <div className="section-intro">
          <p>ABOUT</p>
          <h3>Meet Carlos</h3>
        </div>

        <div className="flow-text">
          <p>
            Carlos has been a massage therapist for the last 19 years, working
            in collaboration with chiropractors and physical therapists while
            treating professional athletes, martial artists, runners, actors,
            dancers, singers, and clients recovering from chronic or recent
            injuries.
          </p>

          <p>
            He graduated from the Swedish Institute of College Health Sciences
            in 2007 and is a member of the American Massage Therapy
            Association. Carlos also worked with elite athletes during the US
            Open from 2014–2018.
          </p>

          <p>
            His specialties include sports massage, medical massage, prenatal
            therapy, TMD treatment, and long-term chronic pain management. His
            approach combines science, bodywork, movement correction, and
            holistic wellness strategies.
          </p>

          <p>
            Outside of massage therapy, Carlos enjoys cooking, photography,
            martial arts, and film.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="content-section dark-section">
        <div className="section-intro">
          <p>SERVICES</p>
          <h3>Specialized Treatments</h3>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h4>Sports Massage</h4>
            <p>
              Recovery-focused sessions designed for athletes and active
              lifestyles.
            </p>
          </div>

          <div className="service-card">
            <h4>Medical Massage</h4>
            <p>
              Therapeutic work focused on pain relief, tension reduction, and
              injury support.
            </p>
          </div>

          <div className="service-card">
            <h4>TMD Therapy</h4>
            <p>
              Specialized jaw and facial muscle treatment for tension and pain.
            </p>
          </div>

          <div className="service-card">
            <h4>Prenatal Massage</h4>
            <p>
              Gentle and supportive bodywork designed for pregnancy wellness.
            </p>
          </div>

          <div className="service-card">
            <h4>Cupping Therapy</h4>
            <p>
              Available as an add-on service for an additional $10 per session.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="content-section">
        <div className="section-intro">
          <p>PRICING</p>
          <h3>Session Rates</h3>
        </div>

        <div className="pricing-layout">
          <div className="price-card">
            <span>60 MINUTES</span>
            <h4>$160</h4>
          </div>

          <div className="price-card">
            <span>90 MINUTES</span>
            <h4>$230</h4>
          </div>
        </div>

        <div className="policy-text">
          <p>24-hour cancellation policy.</p>
          <p>$50 deposit required for booking.</p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="content-section booking-section">
        <div className="section-intro">
          <p>BOOKING</p>
          <h3>Schedule a Session</h3>
        </div>

        <div className="booking-box">
          <p>
            Online booking calendar integration coming soon.
          </p>

          <p className="booking-note">
            Future updates will allow clients to view real-time availability
            and automatically hide booked time slots.
          </p>

          <button className="primary-btn">
            BOOK ONLINE
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="content-section dark-section">
        <div className="section-intro">
          <p>CONTACT</p>
          <h3>Get In Touch</h3>
        </div>

        <div className="contact-layout">
          <div className="contact-block">
            <h4>Email</h4>
            <a href="mailto:carlos77arce@gmail.com">
              carlos77arce@gmail.com
            </a>
          </div>

          <div className="contact-block">
            <h4>Phone</h4>
            <a href="tel:19174056664">
              1-917-405-6664
            </a>
          </div>

          <div className="contact-block">
            <h4>Instagram</h4>
            <a
              href="https://instagram.com/carlosarcejr"
              target="_blank"
              rel="noreferrer"
            >
              @carlosarcejr
            </a>
          </div>

          <div className="contact-block">
            <h4>Venmo</h4>
            <p>@Carlos-ArceJr</p>
          </div>

          <div className="contact-block">
            <h4>Zelle</h4>
            <p>carlos77arce@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;