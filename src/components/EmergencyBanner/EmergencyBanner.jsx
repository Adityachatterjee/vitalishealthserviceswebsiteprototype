import './EmergencyBanner.css';
const EmergencyBanner = () => {
  return (
    <div className="emergency-banner" role="alert" aria-label="Emergency services available">
      <div className="container">
        <div className="emergency-content">
          <i className="fas fa-first-aid"></i>
          <div className="emergency-text">
            <h3>24/7 Emergency Healthcare Support</h3>
            <p>Immediate medical assistance available for all healthcare needs</p>
          </div>
          <div className="emergency-contact">
            <a
              href="tel:+918009979128"
              className="emergency-btn"
              aria-label="Call for emergency healthcare"
            >
              <i className="fas fa-phone-alt"></i>
              <span>Emergency: +91 800 997 9128</span>
            </a>
            <a
              href={`https://wa.me/918009979128?text=Emergency%20healthcare%20assistance%20needed`}
              className="emergency-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp for emergency"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;