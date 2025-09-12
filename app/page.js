"use client";

/**
 * SKYLINE RESIDENCIES — FULL LANDING PAGE (robust images)
 * - Uses stable Pexels URLs for all photos (works immediately)
 * - Has a built-in SVG data-URI fallback if any image fails
 * - Smooth scrolling + link styling + professional layout
 *
 * Later, if you add local files to /public/images (2bhk.jpg, 3bhk.jpg, penthouse.jpg, g1..g6.jpg),
 * just replace the URLs in `properties` and `gallery` with "/images/xxx.jpg" and it will still work.
 */

// Build a data-URI fallback SVG that always displays if an image fails.
const getFallbackDataUri = (text = "Image Unavailable") => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
    <rect width='100%' height='100%' fill='#1b2233'/>
    <text x='50%' y='50%' fill='#9aa4b2' font-family='Arial, Helvetica, sans-serif'
      font-size='42' text-anchor='middle' dominant-baseline='middle'>
      ${text}
    </text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Robust <img> wrapper with guaranteed fallback.
const Img = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = getFallbackDataUri(alt || "Image Unavailable");
    }}
  />
);

export default function Home() {
  // ---- data ----
  const amenities = [
    { t: "Clubhouse", s: "15,000 sq.ft lifestyle hub" },
    { t: "Infinity Pool", s: "Temperature controlled" },
    { t: "Fitness Studio", s: "Cardio + weights" },
    { t: "Kids’ Play", s: "Indoor & outdoor" },
    { t: "Skydeck", s: "Cityline sunsets" },
    { t: "EV Charging", s: "Basement stations" },
  ];

  // Use stable Pexels links (royalty free). Replace with /images/2bhk.jpg etc. later if you want.
  const properties = [
    {
      id: "2bhk",
      title: "2 BHK – Garden View",
      price: "₹50 Lakhs",
      area: "980 sq.ft",
      beds: 2,
      baths: 2,
      highlights: ["Garden balcony", "Modular kitchen", "Covered parking"],
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    },
    {
      id: "3bhk",
      title: "3 BHK – Premium",
      price: "₹75 Lakhs",
      area: "1450 sq.ft",
      beds: 3,
      baths: 3,
      highlights: ["Corner unit", "Walk-in closet", "Club access"],
      image:
        "https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    },
    {
      id: "ph",
      title: "Penthouse – Skydeck",
      price: "₹1.5 Cr",
      area: "2200 sq.ft",
      beds: 4,
      baths: 4,
      highlights: ["Private terrace", "Skyline view", "Smart home"],
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    },
  ];

  const gallery = [
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
    "https://images.pexels.com/photos/1169156/pexels-photo-1169156.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
  ];

  return (
    <>
      {/* Navbar */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#">
            🏙 Skyline Residencies
          </a>
          <nav className="links">
            <a href="#amenities">Amenities</a>
            <a href="#plans">Plans</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a className="btn btn-primary" href="#contact">
              Enquire
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div>
            <span className="badge">Now Launching — Phase II</span>
            <h1>
              Welcome to <span className="accent">Skyline Residencies</span>
            </h1>
            <p className="muted">
              Premium 2 & 3 BHK apartments with world-class amenities and
              seamless city connectivity.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Book a Site Visit
              </a>
              <a className="btn btn-outline" href="#plans">
                Download Brochure
              </a>
            </div>
            <div className="meta muted">
              <span>RERA Approved</span> • <span>Possession Q4 2026</span> •{" "}
              <span>0% Brokerage</span>
            </div>
          </div>
          <div className="hero-card card">
            <Img
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
              alt="Show apartment kitchen"
            />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section">
        <div className="container">
          <h2>Amenities</h2>
          <p className="muted">Crafted for wellness and community life.</p>
          <div className="grid-3">
            {amenities.map((x) => (
              <div key={x.t} className="card card-pad">
                <div className="badge">{x.t}</div>
                <div className="muted">{x.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans & Pricing */}
      <section id="plans" className="section">
        <div className="container">
          <h2>Featured Plans & Pricing</h2>
          <p className="muted">Transparent, value-first options.</p>
          <div className="grid-3">
            {properties.map((p) => (
              <article key={p.id} className="card overflow">
                <div className="media">
                  <Img src={p.image} alt={p.title} />
                </div>
                <div className="card-pad">
                  <h3>{p.title}</h3>
                  <div className="muted small">
                    {p.beds} Bed • {p.baths} Bath • {p.area}
                  </div>
                  <div className="row">
                    <span className="badge">{p.price}</span>
                    <a className="btn btn-outline" href="#contact">
                      Enquire
                    </a>
                  </div>
                  <ul className="muted list">
                    {p.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section">
        <div className="container">
          <h2>Gallery</h2>
          <div className="grid-3">
            {gallery.map((src, i) => (
              <div key={i} className="card overflow">
                <Img src={src} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="section">
        <div className="container">
          <h2>Location & Connectivity</h2>
          <p className="muted">
            Prime address with quick access to schools, tech parks, and transit.
          </p>
          <div className="card overflow">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=Bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Book a Site Visit</h2>
        <p className="muted">
            We’ll call you back within working hours. Or mail us at{" "}
            <a href="mailto:info@skylineresidencies.com">
              info@skylineresidencies.com
            </a>
            .
          </p>
          <form
            className="card card-pad form"
            action="mailto:info@skylineresidencies.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid-2">
              <div>
                <label>Name</label>
                <input placeholder="Your name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
              <div>
                <label>Phone</label>
                <input placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div>
                <label>Message</label>
                <input placeholder="Any specific query?" />
              </div>
            </div>
            <div className="row">
              <button className="btn btn-primary">Send Enquiry</button>
              <a className="btn btn-outline" href="tel:+919876543210">
                Call: +91 98765 43210
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <div className="container row between">
          <div className="muted small">
            © {new Date().getFullYear()} Skyline Residencies
          </div>
          <div className="muted small">Built with Next.js</div>
        </div>
      </footer>

      {/* CSS */}
      <style jsx>{`
        :global(body) {
          color: #fff;
          background: radial-gradient(80rem 80rem at 10% -20%, #142037, transparent 60%),
            radial-gradient(60rem 60rem at 120% 0%, #0f1b33, transparent 50%),
            #0b0f19;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        /* remove default blue/underline links */
        :global(a),
        :global(a:visited) {
          color: inherit;
          text-decoration: none;
        }
        :global(a:hover) {
          text-decoration: none;
        }

        :global(html) {
          scroll-behavior: smooth; /* smooth anchor scrolling */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .section {
          padding: 80px 0;
        }
        .card {
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
        }
        .card-pad {
          padding: 18px;
        }
        .media {
          overflow: hidden;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
          color: #fff;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .btn-primary {
          background: #51e5a8;
          color: #0b0f19;
        }
        .btn-outline {
          border-color: rgba(255, 255, 255, 0.22);
        }
        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          color: #9aa4b2;
          font-size: 0.9rem;
        }
        .muted {
          color: #9aa4b2;
        }
        .muted.small {
          font-size: 0.95rem;
        }
        .list {
          margin-top: 10px;
          line-height: 1.7;
        }
        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .row.between {
          justify-content: space-between;
        }
        .overflow {
          overflow: hidden;
        }

        /* Navbar */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(6px);
          background: rgba(0, 0, 0, 0.3);
        }
        .nav-inner {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          color: #51e5a8;
          font-weight: 700;
        }
        .links {
          display: flex;
          align-items: center;
          gap: 24px;
          font-size: 0.95rem;
        }
        .links a {
          color: #fff;
        }
        .links a:hover {
          color: #51e5a8;
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          padding-top: 80px;
          display: flex;
          align-items: center;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 28px;
        }
        .accent {
          color: #51e5a8;
        }
        .hero h1 {
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.05;
          margin: 12px 0;
          font-weight: 800;
        }
        .cta-row {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .meta {
          margin-top: 12px;
          font-size: 0.95rem;
        }
        .hero-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
        }

        /* Grids */
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          width: 100%;
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Forms */
        .form label {
          display: block;
          font-size: 0.95rem;
          color: #9aa4b2;
          margin-bottom: 6px;
        }
        .form input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: #0d1220;
          color: #fff;
          padding: 12px 14px;
        }

        /* Footer */
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 24px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .links {
            gap: 14px;
          }
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .grid-3 {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
