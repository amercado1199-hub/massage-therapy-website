function Home() {
  return (
    <main>
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content minimalist-hero">
          <div className="hero-logo large-logo">
            <img
              src="/arce-logo.jpg"
              alt="A.R.C.E Massage Logo"
            />
          </div>

          <div className="hero-buttons">
            <a href="/contact">
            </a>

            <a href="/services">
              <button className="secondary-btn">
                VIEW SERVICES
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;