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
        <a href="https://socialrecoveries.com" className="text-2xl font-bold">
          <img 
            src={logo} 
            alt="logo" 
            className="h-12 md:h-12 lg:h-16 w-auto"  // Responsive logo size
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <div
            className="relative py-2"
            onMouseEnter={() => setHovered('ABOUT US')}
            onMouseLeave={() => setHovered('')}
          >
            <div className="w-full h-[1px] bg-white" />
            <a
              href="https://socialrecoveries.com/about-us"
              className="hover:text-gray-300 transition-colors raleway font-semibold"
            >
              ABOUT US
            </a>
            <div className="w-full h-[1px] bg-white" />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'ABOUT US' ? 'top-[18%]' : 'top-[-120%]'}`} />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'ABOUT US' ? 'bottom-[18%]' : 'bottom-[-120%]'}`} />
          </div>

          <div
            className="relative py-2"
            onMouseEnter={() => setHovered('CONTACT US')}
            onMouseLeave={() => setHovered('')}
          >
            <div className="w-full h-[1px] bg-white" />
            <a
              href="https://socialrecoveries.com/#contact-us"
              className="hover:text-gray-300 transition-colors raleway font-semibold"
            >
              CONTACT US
            </a>
            <div className="w-full h-[1px] bg-white" />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'CONTACT US' ? 'top-[18%]' : 'top-[-120%]'}`} />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'CONTACT US' ? 'bottom-[18%]' : 'bottom-[-120%]'}`} />
          </div>

          <div
            className="relative py-2"
            onMouseEnter={() => setHovered('PRIVACY POLICY')}
            onMouseLeave={() => setHovered('')}
          >
            <div className="w-full h-[1px] bg-white" />
            <a
              href="https://socialrecoveries.com/privacy-policy"
              className="hover:text-gray-300 transition-colors raleway font-semibold"
            >
              PRIVACY POLICY
            </a>
            <div className="w-full h-[1px] bg-white" />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'PRIVACY POLICY' ? 'top-[18%]' : 'top-[-120%]'}`} />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'PRIVACY POLICY' ? 'bottom-[18%]' : 'bottom-[-120%]'}`} />
          </div>

          <div
            className="relative py-2"
            onMouseEnter={() => setHovered('TERMS OF SERVICE')}
            onMouseLeave={() => setHovered('')}
          >
            <div className="w-full h-[1px] bg-white" />
            <a
              href="https://socialrecoveries.com/terms-of-service"
              className="hover:text-gray-300 transition-colors raleway font-semibold"
            >
              TERMS OF SERVICE
            </a>
            <div className="w-full h-[1px] bg-white" />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'TERMS OF SERVICE' ? 'top-[18%]' : 'top-[-120%]'}`} />
            <div className={`absolute w-full h-[1px] bg-white transition-all duration-300 ease-in-out ${hovered === 'TERMS OF SERVICE' ? 'bottom-[18%]' : 'bottom-[-120%]'}`} />
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center space-x-4">
          <ShoppingBag className="h-8 w-8" />
          <button
            className="bg-white text-black px-6 py-3 text-lg flex items-center space-x-3 border border-black hover:scale-75 hover:bg-black hover:text-white hover:border-white transition-transform duration-300 ease-in-out"
            style={{ boxShadow: '4px 4px 0px white' }}
            onClick={() => window.location.href = "https://socialrecoveries.com/#contact-us"}
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

          <div className="flex flex-col items-start mt-8 space-y-4 ml-8">
            <a
              href="https://socialrecoveries.com/#about-us"
              className="text-2xl hover:text-gray-300 transition-colors raleway font-semibold"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              ABOUT US
            </a>
            <hr className="w-full h-1 bg-gray-800 border-none my-2" />

            <a
              href="https://socialrecoveries.com/#contact-us"
              className="text-2xl hover:text-gray-300 transition-colors raleway font-semibold"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              CONTACT US
            </a>
            <hr className="w-full h-1 bg-gray-800 border-none my-2" />

            <a
              href="https://socialrecoveries.com/privacy-policy"
              className="text-2xl hover:text-gray-300 transition-colors raleway font-semibold"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              PRIVACY POLICY
            </a>
            <hr className="w-full h-1 bg-gray-800 border-none my-2" />

            <a
              href="https://socialrecoveries.com/terms-of-service"
              className="text-2xl hover:text-gray-300 transition-colors raleway font-semibold"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              TERMS OF SERVICE
            </a>
            <hr className="w-full h-1 bg-gray-800 border-none my-2" />

            <button
              className="bg-white text-black px-6 py-3 text-lg flex items-center space-x-3 border border-black hover:scale-75 hover:bg-black hover:text-white hover:border-white transition-transform duration-300 ease-in-out"
              style={{ boxShadow: '4px 4px 0px white' }}
              onClick={() => window.location.href = "https://socialrecoveries.com/#contact-us"}
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
