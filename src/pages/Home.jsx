function Home() {
  return (
    <main>
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content minimalist-hero">
          <div className="hero-logo">
            <img
              src="/arce-logo.jpg"
              alt="A.R.C.E Massage Logo"
              style={{ maxWidth: "400px", width: "100%", height: "auto" }}
            />
          </div>

          <div className="hero-buttons">
            <a href="/contact">
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;