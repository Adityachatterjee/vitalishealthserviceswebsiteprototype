import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">
              <div className="logo-icon" style={{ fontSize: '2rem', color: 'var(--accent-light)' }}>
                <i className="fas fa-heartbeat"></i>
              </div>
              <div className="logo-text">
                <span className="logo-main">VITALIS</span>
                <span className="logo-sub">HOME HEALTHCARE SERVICES</span>
              </div>
            </div>
            <p style={{ marginTop: '1rem', color: 'var(--light-gray)' }}>
              Providing quality healthcare at your doorstep in Lucknow since 2023.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctor">Doctor</a></li>
              <li><a href="#equipment">Medical Equipment</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Rathindra Nagar, Telibagh, Lucknow - 226002
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+918009979128" style={{ color: 'var(--light-gray)', textDecoration: 'none' }}>
                +91 8009979128
              </a>
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+917860287024" style={{ color: 'var(--light-gray)', textDecoration: 'none' }}>
                +91 7860287024 (Physio)
              </a>
            </p>
            <p>
              <i className="fas fa-clock"></i>
              24/7 Emergency Services
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} VITALIS Home Healthcare Services. All rights reserved. |
            <span itemProp="founder"> Director: Pooja Yadav</span>
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Medical services provided by certified professionals | Emergency ambulance available 24/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
