function Services() {
  return (
    <main className="page content-section">
      <div className="section-intro centered">
        <p>SERVICES</p>
        <h3>Specialized Treatments</h3>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <span className="service-number">01</span>
          <h4>Sports Massage</h4>

          <p>
            Sports massage helps treat muscle tightness, soreness, and
            imbalances caused by physical activity, repetitive movement, or
            athletic training.
          </p>

          <p>
            It can improve flexibility, circulation, and range of motion while
            reducing pain and stiffness in muscles and connective tissues.
          </p>

          <p>
            Sports massage is also used to support injury prevention, enhance
            recovery, and optimize overall physical performance.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">02</span>
          <h4>Medical Massage</h4>

          <p>
            Medical massage is a targeted treatment that helps address specific
            conditions such as chronic pain, muscle dysfunction, postural
            imbalances, and soft tissue injuries.
          </p>

          <p>
            It can reduce pain, improve mobility, and support recovery by
            focusing on affected muscles, tendons, ligaments, and connective
            tissues.
          </p>

          <p>
            Medical massage is often incorporated into a healthcare treatment
            plan to help manage symptoms and improve overall function and
            quality of life.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">03</span>
          <h4>Pre-Natal Massage</h4>

          <p>
            Prenatal massage helps relieve common pregnancy-related discomforts
            such as lower back pain, hip pain, neck and shoulder tension, and
            muscle cramps.
          </p>

          <p>
            It can reduce swelling in the hands, feet, and legs by supporting
            healthy circulation and lymphatic flow.
          </p>

          <p>
            Prenatal massage also promotes relaxation, reduces stress, and may
            help improve sleep quality during pregnancy.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">04</span>
          <h4>TMJ</h4>

          <p>
            TMJ massage helps relieve pain and tension in the jaw muscles,
            face, neck, and shoulders associated with temporomandibular joint
            dysfunction.
          </p>

          <p>
            It can reduce symptoms such as jaw tightness, clicking, headaches,
            and discomfort while chewing or speaking.
          </p>

          <p>
            TMJ massage also promotes improved jaw mobility and relaxation of
            the muscles that support healthy jaw function.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">05</span>
          <h4>Cupping</h4>

          <p>
            Cupping therapy helps reduce muscle tension, improve circulation,
            and promote relaxation by creating gentle suction on the skin and
            underlying tissues.
          </p>

          <p>
            It is commonly used to address muscle soreness, chronic pain,
            stiffness, restricted movement, and recovery from physical activity.
          </p>
        </div>
      </div>

      <section className="rates-section">
        <div className="section-intro centered">
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

          <div className="price-card">
            <span>ADD-ON</span>
            <h4>$10</h4>
            <p>Cupping Therapy</p>
          </div>
        </div>

<div className="service-cta">
  <h4>Not sure which treatment is right for you?</h4>

  <p>
    Every session is personalized based on your goals, pain patterns,
    movement limitations, and recovery needs.
  </p>

  <a href="/contact">
    <button className="primary-btn">
      CONTACT TO BOOK
    </button>
  </a>
</div>
        <p className="policy-text centered">
          24-hour cancellation policy • $50 deposit required for booking
        </p>
    <section className="payment-section">
      <h2>Payment Options</h2>

      <div className="payment-grid">
        <div className="payment-card">
          <h3>Venmo</h3>

          <img
            src="/venmo-qr.png"
            alt="Venmo QR Code"
            className="venmo-qr"
          />

          <p>@CarlosArce</p>
        </div>

        <div className="payment-card">
          <h3>Zelle</h3>

          <p className="zelle-info">
            carlos77arce@gmail.com
          </p>
        </div>
      </div>
    </section>
  </section>
</main>
  );
}

export default Services;