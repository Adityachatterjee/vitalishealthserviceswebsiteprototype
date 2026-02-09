import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import CombinedMedical from './components/CombinedMedical/CombinedMedical';
import Contact from './components/Contact/Contact';
import EmergencyBanner from './components/EmergencyBanner/EmergencyBanner';
import EquipmentRental from './components/EquipmentRental/EquipmentRental';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SEOHead from './components/SEOHead/SEOHead';
import Services from './components/Services/Services';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Track page views
    console.log('VITALIS Healthcare Website Loaded');

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <HelmetProvider>
      <div className="App" itemScope itemType="https://schema.org/MedicalBusiness">
        <SEOHead />

        <meta itemProp="name" content="VITALIS Home Healthcare Services" />
        <meta itemProp="description" content="24/7 Home Healthcare Services in Lucknow" />

        <Navbar />

        <Hero />
        <Services />
        <CombinedMedical />
        <EquipmentRental />
        <Contact />
        <EmergencyBanner />
        <WhatsAppButton />
      </div>
      <Footer/>
    </HelmetProvider>
  );
}

export default App;
