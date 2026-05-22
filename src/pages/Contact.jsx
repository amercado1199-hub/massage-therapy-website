function Contact() {
  return (
    <main className="page contact-page">
      <div className="section-intro centered">
        <p>CONTACT</p>
        <h3>Book a Session</h3>
      </div>

      <div className="booking-card booking-card-wide">
        <h4>Ready to schedule?</h4>
        <p>
          Contact Carlos directly to book a massage therapy session focused on
          recovery, mobility, and pain relief.
        </p>

        <div className="booking-actions">
          <a href="tel:19174056664">
            <button className="primary-btn">CALL TO BOOK</button>
          </a>

          <a href="mailto:carlos77arce@gmail.com">
            <button className="secondary-btn">SEND EMAIL</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;