import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './output.css';
import './styles.css';
import Navbar from './Navbar';
import WavyLine from './WavyLine';
import HeroSection from './HeroSection';
import Services from './Services';

import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ArtistShowcase from './ArtistShowcase';
import OurClients from './OurClients';
import ContactForm from './ContactForm';
import ResponsibleFooter from './ResponsibleFooter';
import LeadCaptureModal from './LeadCaptureModal';

function App() {

  const [isModalOpen, setModalOpen] = useState(false); // Initially set to false

  useEffect(() => {
    // Set a timer to open the modal after 5 seconds
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 5000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setModalOpen(false);

  return (
    <div className="mainsection w-full overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <Gallery />
      <ContactForm />
      <ResponsibleFooter />
      <LeadCaptureModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
