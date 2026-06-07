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

      <div className="calendar-wrapper">
        <iframe
          src="https://calendar.app.google/ErAQVy1Zj5kS74VeA"
          title="A.R.C.E Massage Booking Calendar"
          className="booking-calendar"
        ></iframe>
      </div>
    </main>
  );
}

export default Booking;