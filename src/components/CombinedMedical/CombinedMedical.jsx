import './CombinedMedical.css';

const phoneNumber = "8009979128";

const CombinedMedical = () => {
  const doctorTreatments = [
    "General Medical Consultation", "Fever & Common Cold", "Respiratory Infections",
    "Gastrointestinal Issues", "Skin Diseases", "Allergy Management",
    "Diabetes Management", "Hypertension Care", "Thyroid Disorders",
    "Joint Pains & Arthritis", "Headaches & Migraines", "Anemia & Nutritional Deficiencies",
    "Urinary Tract Infections", "Infectious Diseases", "Preventive Health Checkups",
    "Vaccination Advice", "Weight Management", "Mental Health Counseling",
    "Sleep Disorders", "Chronic Fatigue", "Geriatric Care",
    "Pediatric Care", "Women's Health", "Men's Health",
    "Travel Medicine", "Post-Operative Follow-up", "Health Education",
    "Emergency Medical Guidance", "Second Opinion", "Home Visit Consultations"
  ];

  const physioTreatments = [
    'Lower Back Pain',
    'Frozen Shoulder',
    'Knee Pain',
    'Muscle Pain',
    'Neck Pain',
    'Sciatica',
    'Paralysis',
    'Cerebral Palsy',
    'Arthritis',
    'Post Fracture Rehabilitation',
    'Post Surgery Rehabilitation',
    'Slip Disc',
    'Joint Stiffness',
    'Muscle Strain',
    'Tennis Elbow',
    'Post TKR (Total Knee Replacement)',
    'Brain Injury Rehabilitation',
    'Post THR (Total Hip Replacement)'
  ];

  const additionalServices = [
    'ICU Nursing Staff',
    'Baby & Elder Care', 
    'Home Physiotherapy',
    'Equipment Rental',
    'Ambulance Service'
  ];

  return (
    <section className="combined-medical-section" id="doctor">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h1>Medical & Physiotherapy Services</h1>
          <p className="section-subtitle">
            Comprehensive healthcare and physiotherapy services at your doorstep in Lucknow
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="services-grid">
          
          {/* Doctor Profile Card - Left Side */}
          <div className="service-card doctor-card">
            <div className="doctor-profile-header">
              <div className="doctor-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="doctor-info">
                <h2>Dr. A.K. Verma</h2>
                <div className="doctor-qualifications">
                  <span className="qualification">B.A.M.S.</span>
                  <span className="qualification">MD(AM)</span>
                </div>
                <p className="doctor-specialty">GENERAL PHYSICIAN</p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-briefcase"></i>
                Professional Experience
              </h3>
              <ul className="experience-list">
                <li>
                  <strong>Emergency Medical Officer</strong>
                  <p>Avadh Hospital, Lucknow</p>
                </li>
                <li>
                  <strong>Emergency Medical Officer</strong>
                  <p>Autar Hospital, Lucknow</p>
                </li>
                <li>
                  <strong>Intern</strong>
                  <p>District Hospital, Barabanki</p>
                </li>
              </ul>
            </div>

            {/* Address Section */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-map-marker-alt"></i>
                Clinic Address
              </h3>
              <p className="address-text">
                361/13, Kare Wali Gali, Saadatganj, Lucknow
              </p>
            </div>

            {/* Contact Section */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-calendar-check"></i>
                Book Appointment
              </h3>
              <div className="contact-actions">
                <a
                  href={`https://wa.me/91${phoneNumber}?text=Hi,%20I'd%20like%20to%20book%20a%20medical%20consultation%20with%20Dr.%20A.K.%20Verma`}
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
                <a href={`tel:+91${phoneNumber}`} className="call-btn">
                  <i className="fas fa-phone-alt"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Treatments Card - Right Side */}
          <div className="service-card treatments-card">
            <div className="treatments-header">
              <h2>Medical Conditions We Treat</h2>
              <p className="treatments-subtitle">
                Comprehensive care for a wide range of health conditions
              </p>
            </div>
            
            <div className="treatments-list">
              {doctorTreatments.map((treatment, index) => (
                <div key={index} className="treatment-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{treatment}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Physiotherapy Section Grid */}
        <div className="services-grid" style={{marginTop: '3rem'}}>
          
          {/* Physiotherapist Profile Card */}
          <div className="service-card physio-card">
            <div className="doctor-profile-header">
              <div className="doctor-icon physio-icon">
                <i className="fas fa-hand-holding-medical"></i>
              </div>
              <div className="doctor-info">
                <h2>Dr. Shankara C. Maurya</h2>
                <div className="doctor-qualifications">
                  <span className="qualification">PT.</span>
                  <span className="qualification">DPT.</span>
                  <span className="qualification">BPT.</span>
                </div>
                <p className="doctor-specialty">PHYSIOTHERAPIST</p>
              </div>
            </div>

            {/* Clinic Information */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-clinic-medical"></i>
                Clinic Information
              </h3>
              <div className="clinic-info">
                <strong>Dr. Shankara's Physio Rehabilitation Clinic</strong>
                <p>24/7 Home Physiotherapy Services in Lucknow</p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-concierge-bell"></i>
                Additional Services
              </h3>
              <ul className="experience-list">
                {additionalServices.map((service, index) => (
                  <li key={index}>
                    <strong>{service}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Area */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-map-marked-alt"></i>
                Service Area
              </h3>
              <p className="address-text">Lucknow & Surrounding Areas</p>
            </div>
            
            {/* Contact Section */}
            <div className="section-block">
              <h3 className="section-title">
                <i className="fas fa-calendar-check"></i>
                Book Appointment
              </h3>
              <div className="contact-actions">
                <a
                  href={`https://wa.me/91${phoneNumber}?text=Hi,%20I'd%20like%20to%20book%20a%20medical%20consultation%20with%20Dr.%20A.K.%20Verma`}
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
                <a href={`tel:+91${phoneNumber}`} className="call-btn">
                  <i className="fas fa-phone-alt"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Physio Treatments Card */}
          <div className="service-card physio-treatments-card">
            <div className="treatments-header">
              <h2>Physiotherapy Conditions We Treat</h2>
              <p className="treatments-subtitle">
                Expert treatment for musculoskeletal conditions
              </p>
            </div>
            
            <div className="treatments-list">
              {physioTreatments.map((treatment, index) => (
                <div key={index} className="treatment-item">
                  <i className="fas fa-heartbeat"></i>
                  <span>{treatment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedMedical;