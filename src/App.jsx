import "./App.css";

function App() {
return (
<div className="app">
<nav className="navbar">
<h1>Movement Massage Sports Therapy</h1>

<div className="nav-links">
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#reviews">Reviews</a>
<a href="#contact">Contact</a>
</div>
</nav>

<section className="hero">
<div className="hero-overlay">
<div className="hero-content">
<p className="hero-subtitle">Professional Massage Therapy</p>

<h1>
Recovery.
<br />
Relaxation.
<br />
Results.
</h1>

<p className="hero-text">
Personalized massage therapy designed to help you recover,
recharge, and feel your best.
</p>

<div className="hero-buttons">
<a href="#contact" className="primary-btn">
Book Now
</a>

<a href="#services" className="secondary-btn">
View Services
</a>
</div>
</div>
</div>
</section>

<section id="about" className="about-section">
<div className="section-container">
<div className="about-text">
<p className="section-label">About</p>
<h2>Dedicated To Your Wellness</h2>

<p>
Elite Recovery Massage provides professional therapeutic massage
services focused on recovery, relaxation, mobility, and overall
wellness. Every session is personalized to meet your body’s
specific needs.
</p>

<p>
Whether you need stress relief, muscle recovery, or deep tissue
therapy, our goal is to help you feel refreshed and restored.
</p>
</div>
</div>
</section>

<section id="services" className="services-section">
<p className="section-label center">Services</p>
<h2 className="section-title">Massage Services</h2>

<div className="services-grid">
<div className="service-card">
<h3>Deep Tissue Massage</h3>
<p>
Targets muscle tension and chronic pain through firm pressure and
focused therapy.
</p>
</div>

<div className="service-card">
<h3>Sports Recovery</h3>
<p>
Designed for athletes and active lifestyles to improve recovery
and mobility.
</p>
</div>

<div className="service-card">
<h3>Swedish Massage</h3>
<p>
Relaxing full-body massage focused on stress relief and improved
circulation.
</p>
</div>

<div className="service-card">
<h3>Stretch Therapy</h3>
<p>
Assisted stretching sessions that improve flexibility and reduce
stiffness.
</p>
</div>
</div>
</section>

<section id="reviews" className="reviews-section">
<p className="section-label center">Testimonials</p>
<h2 className="section-title">What Clients Say</h2>

<div className="reviews-grid">
<div className="review-card">
<p>
“Professional, relaxing, and one of the best massage experiences
I’ve had.”
</p>
<span>- Client Review</span>
</div>

<div className="review-card">
<p>
“Helped relieve back pain and tension immediately. Highly
recommend.”
</p>
<span>- Client Review</span>
</div>

<div className="review-card">
<p>
“Very clean environment and excellent service from start to
finish.”
</p>
<span>- Client Review</span>
</div>
</div>
</section>

<section id="contact" className="contact-section">
<div className="contact-card">
<p className="section-label center">Contact</p>
<h2 className="section-title">Book Your Session</h2>

<p className="contact-text">
Contact us today to schedule your massage therapy session.
</p>

<a href="mailto:your-email@example.com" className="primary-btn">
Email Us
</a>
</div>
</section>

<footer>
<p>© 2026 Elite Recovery Massage. All rights reserved.</p>
</footer>
</div>
);
}

export default App;



