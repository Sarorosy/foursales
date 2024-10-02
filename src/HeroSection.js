import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgvideo from "./assets/herobgvideo.mp4";
import visualimg from './assets/visual3.png';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const imgRef = useRef(null); // Ref for the image

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top center-=10", // When the top of the image hits the bottom of the viewport
          end: "center cente-=25", // When the bottom of the image hits the top of the viewport
          scrub: true, // Smooth scrubbing, takes a duration to fade out
        },
      });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          style={{ width: "100%" }}
          src={bgvideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000000a0] to-[#1032489c] bg-opacity-70"></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white text-center px-4 ">
        <div className="relative mt-14 md:mt-2 slideanimate">
          <h1
            className="text-6xl md:text-[150px]  font-bold text-transparent absolute  -bottom-1 md:-bottom-3"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Street Art To Build
          </h1>
          <h1 className="text-6xl md:text-[150px]  font-bold text-white relative z-10">
            Street Art To Build
          </h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center  md:mt-14">
          <p className="text-lg mt-10 md:mt-0 md:text-2xl mb-8 max-w-lg text-center md:text-left md:mr-8 raleway">
            An art collective of worldwide talent, incorporating modern
            stylistic designs to bring your brand and intellectual property to
            the next level.
          </p>
          <div className="relative slideanimate">
            <h1
              className="text-6xl md:text-[150px] font-bold text-transparent absolute -bottom-1 md:-bottom-3"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Your Brand
            </h1>
            <h1 className="text-6xl md:text-[150px] font-bold text-white relative z-10 transition-transform duration-300 ease-in-out hover:translate-x-3">
              Your Brand
            </h1>
          </div>
        </div>

        {/* Image with fade-out effect */}
        <div className="relative">
          <img
            ref={imgRef}
            src={visualimg}
            alt="Visual Representation"
            className="w-full h-auto" // Full width, auto height
          />
        </div>
      </div>
    </div>
  );
}
