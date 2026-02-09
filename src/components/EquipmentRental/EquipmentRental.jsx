import './EquipmentRental.css';

const EquipmentRental = () => {
  const equipment = [
    {
      name: 'Ventilators',
      icon: 'fas fa-lungs',
      description: 'ICU-grade ventilators for respiratory support'
    },
    {
      name: 'Oxygen Concentrators',
      icon: 'fas fa-wind',
      description: 'Portable oxygen delivery systems'
    },
    {
      name: 'Hospital Beds',
      icon: 'fas fa-bed',
      description: 'Electric/manual beds with side rails'
    },
    {
      name: 'Wheelchairs',
      icon: 'fas fa-wheelchair',
      description: 'Manual and electric wheelchairs'
    },
    {
      name: 'Patient Monitors',
      icon: 'fas fa-heartbeat',
      description: 'Multi-parameter vital sign monitors'
    },
    {
      name: 'Suction Machines',
      icon: 'fas fa-tint',
      description: 'Portable suction units for airway management'
    },
    {
      name: 'Nebulizers',
      icon: 'fas fa-cloud',
      description: 'Portable nebulization machines'
    },
    {
      name: 'BP Monitors',
      icon: 'fas fa-stethoscope',
      description: 'Digital blood pressure monitors'
    }
  ];

  const handleInquiry = () => {
    const equipmentList = equipment.map(item => `• ${item.name}`).join('\n');
    const message = `Hi, I'm interested in medical equipment rental/purchase. Please provide details for:\n\n${equipmentList}`;
    const phoneNumber = "8009979128";
    window.open(`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="equipment" className="section" aria-labelledby="equipment-heading">
      <div className="container">
        <header className="section-title">
          <h2 id="equipment-heading">Medical Equipment on Rent/Sale</h2>
          <p>High-quality medical equipment available for rent or purchase with delivery across Lucknow</p>
        </header>
        
        {/* Combined Equipment Card */}
        <div className="combined-equipment-card" role="region" aria-label="All medical equipment">
          <div className="equipment-header">
            <h3>Available Medical Equipment</h3>
            <p className="equipment-subtitle">Complete range of medical equipment for home care and hospital use</p>
          </div>
          
          <div className="equipment-grid">
            {equipment.map((item, index) => (
              <div key={index} className="equipment-item" role="listitem">
                <div className="equipment-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="equipment-details">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Combined Inquiry Button */}
          <div className="inquiry-section">
            <div className="inquiry-info">
              <i className="fas fa-info-circle"></i>
              <p>All equipment available with delivery, setup, and maintenance support</p>
            </div>
            <button 
              className="combined-inquiry-btn"
              onClick={handleInquiry}
              aria-label="Inquire about all medical equipment"
            >
              <i className="fab fa-whatsapp"></i>
              <span>Inquire About Equipment</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        {/* Ambulance Notice */}
        <div className="equipment-notice">
          <div className="notice-header">
            <i className="fas fa-ambulance"></i>
            <h3>Advance Life Support (ACLS) Ambulance - ICCU on Wheels</h3>
          </div>
          <p>
            Our fully equipped ICU ambulance is available 24/7 with trained paramedics, 
            ventilator support, cardiac monitor, and emergency medications.
          </p>
          <div className="ambulance-contact">
            <a 
              href="tel:+918009979128"
              className="btn-primary"
              aria-label="Call for ambulance service"
            >
              <i className="fas fa-phone-alt"></i> 
              <span>Call Ambulance: +91 8009979128</span>
            </a>
            <a 
              href={`https://wa.me/918009979128?text=Hi,%20I%20need%20ambulance%20service%20with%20ICCU%20facilities`}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp for ambulance service"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRental;