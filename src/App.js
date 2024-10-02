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

function App() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Services />
      
      <AboutUs />
      <Gallery />
      <ArtistShowcase />
      <OurClients />
      <ContactForm />
      <ResponsibleFooter />
    </div>
  );
}

export default App;
