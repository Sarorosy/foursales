import React, { useEffect, useRef } from 'react';
import serv1 from './assets/serv1.webp';
import serv2 from './assets/serv2.webp';
import serv3 from './assets/serv3.webp';
import serv4 from './assets/serv4.webp';
import bgimage from './assets/wallpaper.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      serviceRefs.current.forEach((ref, index) => {
        const direction = index < 2 ? -100 : 100; // Left for first two, right for second two

        gsap.fromTo(ref, 
          {
            opacity: 0,
            x: direction, 
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: ".services-section",
              start: "top center", // When the top of the element is near the bottom of the viewport
              end: "center top", // When the top of the element is near the top of the viewport
              scrub: true, // Smooth scrubbing
              onLeaveBack: () => gsap.to(ref, { opacity: 0, x: direction }), // Back to original on scroll up
            },
          });
      });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  const backgroundSize =
    window.innerWidth >= 768 ? 'calc(100% * 1.3)' : 'cover';
  return (
    <div
      className="py-10 md:py-20 services-section"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: backgroundSize
      }}
    >
      <div className="container mx-auto text-center">
        <div className="relative mt-14 md:mt-3">
          {/* Container for both headings */}
          <div className="relative z-10">
            <h1
              className={`text-3xl md:text-[70px] font-bold bottom-1 md:bottom-3 text-transparent absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out`}
              style={{ WebkitTextStroke: "0.5px white" }}
            >
              4-Stages Specializes in the <br /><br /> Following Services:
            </h1>
            <h1 className="text-3xl md:text-[70px] font-bold text-white relative z-20">
              4-Stages Specializes in the <br /><br /> Following Services:
            </h1>
          </div>
        </div>

        <p className="text-lg md:text-xl mb-10 px-4 text-white my-10 raleway">
          With extensive experience working with some very respected brands,
          delivering brand experiences people love.
        </p>

        {/* Grid layout for services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex justify-center" ref={(el) => (serviceRefs.current[0] = el)}>
            <img src={serv1} alt="Service 1" className="w-96 h-auto max-w-[250px] md:max-w-[400px]" />
          </div>
          <div className="flex justify-center" ref={(el) => (serviceRefs.current[1] = el)}>
            <img src={serv2} alt="Service 2" className="w-96 h-auto max-w-[250px] md:max-w-[400px]" />
          </div>
          <div className="flex justify-center" ref={(el) => (serviceRefs.current[2] = el)}>
            <img src={serv3} alt="Service 3" className="w-96 h-auto max-w-[250px] md:max-w-[400px]" />
          </div>
          <div className="flex justify-center" ref={(el) => (serviceRefs.current[3] = el)}>
            <img src={serv4} alt="Service 4" className="w-96 h-auto max-w-[250px] md:max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
