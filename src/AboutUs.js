import React, { useEffect, useRef } from "react";
import MarQuee from "./Marquee";
import aboutbg from "./assets/aboutbg.png";
import aboutvideo from "./assets/about.mp4"; // Import the video
import mask from "./assets/mask.svg"; // Import the mask
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const videoRef = useRef(null);
  const aboutHeaderRef = useRef(null);
  const contentRef = useRef(null);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 9; // Set video to start at 9 seconds
    }
  };

  useEffect(() => {
    // Animation for fade-in effect on the header
    gsap.fromTo(
      aboutHeaderRef.current,
      { opacity: 0 }, // Start with opacity 0
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutHeaderRef.current,
          start: "top 80%", // When the top of the element hits 80% of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );

    // Animation for slide-in effect on the content
    gsap.fromTo(
      contentRef.current,
      { x: -100, opacity: 0 }, // Start position and opacity
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%", // When the top of the element hits 80% of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );
  }, []);

  return (
    <>
      <MarQuee />
      <div className="relative transform rotate-[-3deg] bg-black text-center border-b-2 border-white border-t-2 py-4">
        <h1
          className="text-white text-3xl md:text-5xl font-semibold whitespace-nowrap"
          ref={aboutHeaderRef}
        >
          4 STAGES ART COLLECTIVE
        </h1>
      </div>
      <div
        className="min-h-screen flex items-center justify-center overflow-hidden bg-black relative"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Flex container with two child divs */}
        <div className="z-10">
          <div className="relative ml-8 mt-8" id="abouth1">
            <h1
              className="text-6xl md:text-[90px] font-bold text-transparent absolute -bottom-1 md:-bottom-2"
              style={{ WebkitTextStroke: "1px white" }}
            >
              About Us
            </h1>
            <h1
              className="text-6xl md:text-[90px] font-bold text-white relative z-10 transition-transform duration-300 ease-in-out hover:translate-x-3"
              ref={aboutHeaderRef}
            >
              About Us
            </h1>
          </div>

          <div
            className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16"
            id="content"
            ref={contentRef}
          >
            {/* Left side content */}
            <div className="text-white text-xl leading-relaxed md:px-8 flex flex-col raleway font-semibold justify-start items-center">
              <p className="font-bold">
                We’re a leading art collective based in Kuala Lumpur, Malaysia &
                Singapore, with our roots spread internationally.
              </p>
              <br />
              <p>
                Deriving from artists, we understand the difficulty in getting
                your name or brand out there, the hardships you face to grow your
                fan base or getting exposure, not even talking about getting paid
                fairly for the work you do — which is a whole other ballgame in
                itself.
              </p>
              <br />
              <p>
                That is where 4-Stages can help. We will help build and groom you
                & your IP alongside you, design creative campaigns with global
                brands, and create exposure and networking opportunities so your
                name and brand can grow and get more international recognition. We
                bring the business to you instead of the other way around.
              </p>
              <br />
              <p>Our mission is to empower all artists and creatives.</p>
            </div>

            {/* Right side video with mask */}
            <div className="relative flex justify-center items-center">
              <video
                className="w-full h-auto"
                src={aboutvideo}
                ref={videoRef}
                onLoadedMetadata={handleVideoLoad}
                autoPlay
                loop
                muted
                style={{
                  WebkitMaskImage: `url(${mask})`,
                  maskImage: `url(${mask})`,
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
