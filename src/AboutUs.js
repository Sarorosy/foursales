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
      <div className="relative transform rotate-[-3deg] bg-black text-center border-b-2 border-white border-t-2 py-4" id="about-us">
        <h1
          className="text-white text-3xl md:text-5xl font-semibold whitespace-nowrap"
          ref={aboutHeaderRef}
        >
          SOCIAL RECOVERIES
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
          <div className=" hidden md:block relative ml-8 mt-8" id="abouth1">
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
          <h1 className="md:hidden mt-10 text-5xl font-bold slideanimate text-white text-left ml-8">
          About Us
          </h1>

          <div
            className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16"
            id="content"
            ref={contentRef}
          >
            {/* Left side content */}
            <div className="text-white text-xl leading-relaxed md:px-8 flex flex-col raleway font-semibold justify-start items-center">
              
              <p className="text-gray-600 leading-relaxed">
                At Social Recoveries, we believe in the power of digital transformation. Our mission is to help businesses
                unlock their full potential in an increasingly digital world. With creative design, strategic thinking, and a
                results-driven approach, we create unique solutions that set our customers apart.
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed">
            From creating an easy-to-use and visually appealing website to increasing your online visibility with SEO, we
            focus on creating an online presence that truly reflects your brand. Our team takes a holistic approach,
            combining innovative website design with a thoughtful digital strategy that drives growth and increases
            customer engagement.
          </p>
              <br />
              <a 
              href="https://socialrecoveries.com/about-us" 
              className="text-black bg-white rounded px-4 py-2 mt-4 hover:bg-gray-200 transition duration-300"
            >
              Read More
            </a>
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
