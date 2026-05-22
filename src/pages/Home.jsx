function Home() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">
          RECOVERY • PERFORMANCE • WELLNESS
        </p>

        <div className="hero-logo">
          <img
            src="/arce-logo.jpg"
            alt="A.R.C.E Massage Logo"
          />
        </div>

        <p className="hero-description">
          Personalized bodywork focused on recovery, pain relief,
          mobility, and performance optimization.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            BOOK A SESSION
          </button>

          <button className="secondary-btn">
            VIEW SERVICES
          </button>
        </div>

        <div className="hero-highlights">
          <div>SPORTS RECOVERY</div>
          <div>PAIN RELIEF</div>
          <div>MOBILITY WORK</div>
        </div>
      </div>
    </section>
  );
}

export default Home;