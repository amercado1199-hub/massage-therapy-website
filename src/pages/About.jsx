function About() {
  return (
    <main className="page about-page">
      <div className="section-intro centered">
        <p>ABOUT</p>
        <h3>Meet Carlos</h3>
      </div>

      {/* PHOTO */}
      <div className="about-photo">
        <img src="/carlos.jpg" alt="Carlos Arce Massage Therapist" />
      </div>

      <div className="flow-text">
        <p>
          Carlos Arce (pronounced AR-see or AR-seh) is a licensed massage
          therapist with over 19 years of experience helping clients move
          better, recover faster, and live with less pain.
        </p>

        <p>
          Throughout his career, he has worked alongside chiropractors and
          physical therapists, treating a diverse range of clients including
          professional and amateur athletes, martial artists, tennis players,
          runners, dancers, actors, singers, and individuals recovering from
          both acute and chronic injuries.
        </p>

        <p>
          A graduate of the Swedish Institute College of Health Sciences and a
          member of the American Massage Therapy Association, Carlos has
          developed a results-driven approach grounded in clinical knowledge and
          hands-on experience.
        </p>

        <p>
          From 2014 to 2018, he was part of the massage therapy team at the US
          Open, working with some of the worlds top elite athletes. His
          specialties include sports massage, medical massage, prenatal massage,
          and treatment for temporomandibular disorders (TMD/TMJ).
        </p>

        <p>
          Carlos's passion for movement extends beyond his practice. Having
          trained in karate, boxing, Muay Thai, and Brazilian Jiu-Jitsu, he
          understands firsthand the physical demands placed on the body and the
          importance of effective recovery and injury prevention.
        </p>

        <p>
          His mission is to combine evidence-based techniques with compassionate
          care to help clients overcome pain, restore function, and build
          lasting resilience.
        </p>

        <p>
          In addition to his private practice, Carlos volunteers alongside the
          medical team for New York Road Runners, supporting athletes at races
          and events throughout New York City.
        </p>

        <p>
          Outside the treatment room, Carlos is a professional actor, an avid
          film and television enthusiast, a lover of live theater, a passionate
          home cook, a street photographer, and an enthusiastic explorer of
          local food culture.
        </p>
      </div>
    </main>
  );
}

export default About;