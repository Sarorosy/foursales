import { useState } from 'react';
import { ShoppingBag, Rocket, Menu, X } from 'lucide-react'; // Menu and X icons for mobile
import logo from './assets/logo.jpeg';

export default function Navbar() {
  const [hovered, setHovered] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white p-4 md:py-8 md:px-8 overflow-y-hidden border-b-2 border-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <img 
            src={logo} 
            alt="logo" 
            className="h-12 md:h-12 lg:h-16 w-auto"  // Responsive logo size
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['SERVICES', 'ABOUT', 'CLIENTS',].map((item) => (
            <div
              key={item}
              className="relative py-2"
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered('')}
            >
              {/* Static div at the top of each link */}
              <div className="w-full h-[1px] bg-white" />
              
              <a 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-gray-300 transition-colors raleway font-semibold"
              >
                {item}
              </a>

              {/* Static div at the bottom of each link */}
              <div className="w-full h-[1px] bg-white" />

              {/* Dynamic div (absolute) at the top of each link */}
              <div 
                className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${
                  hovered === item ? 'top-[18%]' : 'top-[-120%]'
                }`}
              />
              
              {/* Dynamic div (absolute) at the bottom of each link */}
              <div 
                className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${
                  hovered === item ? 'bottom-[18%]' : 'bottom-[-120%]'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center space-x-4">
          <ShoppingBag className="h-8 w-8" />
          <button
            className="bg-white text-black px-6 py-3 text-lg flex items-center space-x-3 border border-black hover:scale-75 hover:bg-black hover:text-white hover:border-white transition-transform duration-300 ease-in-out"
            style={{ boxShadow: '4px 4px 0px white' }}
          >
            <Rocket className="h-5 w-5" />
            <span>CONTACT US</span>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <Menu className="h-8 w-8 cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 flex justify-between items-center">
            <img 
              src={logo} 
              alt="logo" 
              className="h-16 w-auto"
            />
            <X className="h-8 w-8 cursor-pointer" onClick={toggleMenu} />
          </div>

          <div className="flex flex-col items-start mt-8 space-y-4">
            {['SERVICES', 'ABOUT', 'CLIENTS', ].map((item) => (
                <>
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl hover:text-gray-300 transition-colors raleway font-semibold"
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                {item}
              </a>
              <hr className="w-full h-1 bg-gray-800 border-none my-2" />

              </>
            ))}
            <button
              className="bg-white text-black px-6 py-3 text-lg flex items-center ml-8 space-x-3 border border-black hover:scale-75 hover:bg-black hover:text-white hover:border-white transition-transform duration-300 ease-in-out"
              style={{ boxShadow: '4px 4px 0px white' }}
            >
              <Rocket className="h-5 w-5" />
              <span>CONTACT US</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
