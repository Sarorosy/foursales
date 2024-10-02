import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clientsImage from './assets/clients.webp'; // Ensure the image path is correct

gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
  const clientsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        clientsRef.current,
        {
          x: '100%', // Start from the left off-screen
          opacity: 0 // Initially hidden
        },
        {
          scrollTrigger: {
            trigger: clientsRef.current,
            start: 'top bottom', // Start animation when top of the element is 80% from the top of the viewport
            end: 'center center', // End animation when the bottom of the element is 20% from the top of the viewport
            scrub: true // Smooth scrubbing, takes the scroll position into account
          },
          x: '0%', // Move to its final position
          opacity: 1, // Fade in
          duration: 1 // Duration of the animation
        }
      );
    });

    // Cleanup function to kill ScrollTrigger on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      
      className=" bg-black text-black p-4 md:p-8 mx-auto w-full mx-4"
    >
      <div className="relative mb-4 md:mb-8">
        <h1
          className="text-6xl md:text-[90px] font-bold text-transparent absolute -bottom-1 md:-bottom-2"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Our Clients
        </h1>
        <h1 className="text-6xl md:text-[90px] font-bold text-white relative z-10 transition-transform duration-300 ease-in-out hover:translate-x-3">
          Our Clients
        </h1>
      </div>
      <img 
      ref={clientsRef}
        src={clientsImage} 
        alt="Our Clients" 
        className="w-full h-auto rounded-lg" 
      />
    </div>
  );
};

export default OurClients;
