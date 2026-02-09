import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'icu-nursing',
      icon: 'fas fa-hospital-user',
      title: 'ICU/ICU Trained Nursing Staff',
      description: 'Professional ICU-trained nurses for critical care at home with ventilator support and continuous monitoring.',
      features: [
        'Ventilator care specialists',
        'Critical care monitoring',
        'Medication administration',
        'Emergency response trained',
        '24/7 nurse availability'
      ],
      featured: true
    },
    {
      id: 'elder-care',
      icon: 'fas fa-user-friends',
      title: 'Elder Care & Baby Care Staff',
      description: 'Compassionate caregivers for senior citizens and infants with personalized care plans.',
      features: [
        'Daily assistance & companionship',
        'Medication management',
        'Personal hygiene care',
        'Feeding assistance',
        'Activity monitoring'
      ]
    },
    {
      id: 'neuro-care',
      icon: 'fas fa-brain',
      title: 'Neuro Patient Care at Home',
      description: 'Specialized care for stroke, paralysis, Parkinson’s, and other neurological conditions.',
      features: [
        'Stroke rehabilitation',
        'Paralysis care',
        'Mobility assistance',
        'Speech therapy support',
        'Cognitive exercises'
      ]
    },
    {
      id: 'tracheotomy',
      icon: 'fas fa-lungs',
      title: 'Tracheotomy Care',
      description: 'Expert care for tracheostomy patients including tube changing and suctioning.',
      features: [
        'Tracheostomy tube care',
        'Suctioning procedures',
        'Stoma site care',
        'Emergency protocol',
        'Infection prevention'
      ]
    },
    {
      id: 'attendants',
      icon: 'fas fa-users',
      title: 'Male & Female Attendants',
      description: 'Trained male and female attendants for patient care and assistance.',
      features: [
        'Personal care assistance',
        'Mobility support',
        'Household help',
        'Companionship',
        'Patient monitoring'
      ]
    },
    {
      id: 'doctor-visit',
      icon: 'fas fa-user-md',
      title: 'On-Call Doctor Visits',
      description: 'Qualified doctors available for home visits across Lucknow.',
      features: [
        'General physician visits',
        'Specialist consultations',
        'Health checkups',
        'Prescription services',
        'Follow-up care'
      ]
    }
  ];

  const additionalServices = [
    'IV Injection at Home',
    'ICU Setup at Home',
    'Medical Equipment Rental',
    'X-Ray at Home',
    'Lab Tests at Home',
    'Physiotherapy at Home',
    'Post-Operative Care',
    'Palliative Care'
  ];

  const handleServiceInquiry = () => {
    const serviceList = services.map(service => `• ${service.title}`).join('\n');
    const additionalList = additionalServices.map(service => `• ${service}`).join('\n');
    const message = `Hi, I'm interested in healthcare services. Please provide details for:\n\nMain Services:\n${serviceList}\n\nAdditional Services:\n${additionalList}`;
    const phoneNumber = "8009979128";
    window.open(`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-title">
          <h2 id="services-heading">Our Home Healthcare Services</h2>
          <p>Comprehensive medical care services delivered at your home by certified professionals</p>
        </header>
        
        {/* Combined Services Card */}
        <div className="combined-services-card" role="region" aria-label="All healthcare services">
          <div className="services-header">
            <h3>Complete Healthcare Services</h3>
            <p className="services-subtitle">Professional medical care services available 24/7 at your doorstep</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item" role="listitem">
                <div className="service-item-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-item-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <ul className="service-features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="additional-services-section">
            <div className="additional-header">
              <i className="fas fa-plus-circle"></i>
              <h4>Additional Services</h4>
            </div>
            <div className="additional-tags">
              {additionalServices.map((service) => (
                <span key={service} className="service-tag">
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* Combined Inquiry Button */}
          <div className="services-inquiry-section">
            <div className="inquiry-info">
              <i className="fas fa-info-circle"></i>
              <p>All services include certified professionals, regular monitoring, and emergency support</p>
            </div>
            <button 
              className="services-inquiry-btn"
              onClick={handleServiceInquiry}
              aria-label="Inquire about all healthcare services"
            >
              <i className="fab fa-whatsapp"></i>
              <span>Get Healthcare Services</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Services;