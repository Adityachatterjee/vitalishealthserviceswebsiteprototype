import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // ADD THIS
  const lastScrollY = useRef(0); // ADD THIS

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // For scrolled state (for styling changes)
      setScrolled(currentScrollY > 50);
      
      // ADD THIS: Hide/show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN and past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP - show navbar
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScrollCloseMenu = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScrollCloseMenu);
    return () => window.removeEventListener('scroll', handleScrollCloseMenu);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`} // ADD visible/hidden classes
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container nav-content">
        <a href="/" className="logo" aria-label="VITALIS Home Healthcare Services">
          {!logoError ? (
            <div className="logo-image">
              <img 
                src="/images/logowithnobackground.png" 
                alt="VITALIS Home Healthcare" 
                width="180"
                height="50"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : null}
          <div className="logo-text">
            <span className="logo-main">VITALIS</span>
            <span className="logo-sub">HOME HEALTHCARE SERVICES</span>
          </div>
        </a>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
          <li><a href="#doctor" onClick={(e) => scrollToSection(e, 'doctor')}>Doctor</a></li>
          <li><a href="#equipment" onClick={(e) => scrollToSection(e, 'equipment')}>Equipment</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        </ul>

        <a 
          href="tel:+918009979128" 
          className="nav-cta"
          aria-label="Call emergency number"
        >
          <i className="fas fa-phone"></i> Emergency Call
        </a>
      </div>
    </nav>
  );
};

export default Navbar;