import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import one from "./assets/one.jpg";
import two from "./assets/two.webp";
import three from "./assets/three.jpg";
import four from "./assets/four.jpg";
import five from "./assets/five.png";

import six from './assets/six.webp';
import seven from './assets/seven.png';
import eight from './assets/eight.webp';
import nine from './assets/nine.png';
import ten from './assets/ten.jpg';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    // Create the animation
    const gcard = document.getElementById("gcard");
    const gcardtwo = document.getElementById("gcardtwo");
    const gallery = document.getElementById("gallery");

    gsap.fromTo(
      gcard,
      {
        rotate: -3,
      },
      {
        scrollTrigger: {
          trigger: gallery,
          start: "center center", // Start when the top of gcard hits 75% of the viewport height
          end: "bottom top", // End when the bottom of gcard hits the top of the viewport
          scrub: true, // Smoothly animate based on scroll position
          toggleActions: "play none none reverse",
        },
        rotate:40
      }
    );
    gsap.fromTo(
        gcardtwo,
        {
          rotate: 10,
          top:-20
        },
        {
          scrollTrigger: {
            trigger: gallery,
            start: "center center", // Start when the top of gcard hits 75% of the viewport height
            end: "bottom top", // End when the bottom of gcard hits the top of the viewport
            scrub: true, // Smoothly animate based on scroll position
            toggleActions: "play none none reverse",
          },
          rotate:0,
          scale:1

        }
      );


        gsap.fromTo(
            gallery,
            {
              scale: 0.75,
              left: 50,
              bottom: 20,
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: gallery,
                start: "top 75%", // Start when the top of gcard hits 75% of the viewport height
                end: "bottom top", // End when the bottom of gcard hits the top of the viewport
                scrub: true, // Smoothly animate based on scroll position
                toggleActions: "play none none reverse",
              },
              scale: 1,
              left: 0,
              bottom: 0,
              opacity: 1,
              duration: 1,
            }
          );

    // Cleanup function to kill the ScrollTrigger
    return () => {
     
    };
  }, []);

  return (
    <div className="container mx-auto py-8" id="gallery" style={{overflowX:"hidden"}}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="gcard">
        <div className="flex justify-center">
          <img src={one} alt="Image 1" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center">
          <img src={two} alt="Image 2" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center">
          <img src={three} alt="Image 3" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center">
          <img src={four} alt="Image 4" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center hidden md:block">
          <img src={five} alt="Image 5" className="object-cover w-full h-auto rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="gcardtwo">
        <div className="flex justify-center">
          <img src={six} alt="Image 6" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center">
          <img src={seven} alt="Image 7" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center">
          <img src={eight} alt="Image 8" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center">
          <img src={nine} alt="Image 9" className="object-cover w-full h-auto rounded-md" />
        </div>
        <div className="flex justify-center hidden md:block">
          <img src={ten} alt="Image 10" className="object-cover w-full h-auto rounded-md " />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
