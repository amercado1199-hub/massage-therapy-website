function Booking() {
  return (
    <main className="booking-page">
      <section className="booking-hero">
        <p>BOOK A SESSION</p>
        <h2>Schedule Your Massage</h2>
        <span>
          Choose an available time below and complete your booking.
        </span>
      </section>

      <div className="booking-button-container">
        <a
          href="https://calendar.app.google/ErAQVy1Zj5kS74VeA"
          target="_blank"
          rel="noopener noreferrer"
          className="book-now-btn"
        >
          BOOK YOUR APPOINTMENT
        </a>
      </div>
    </main>
  );
}

export default Booking;