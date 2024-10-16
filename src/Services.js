import React, { useEffect, useRef } from "react";
import serv1 from "./assets/serv1.mp4";
import serv2 from "./assets/serv2.mp4";
import serv3 from "./assets/serv3.mp4";
import serv4 from "./assets/serv4.mp4";
import serv5 from "./assets/serv5.m4v";
import serv6 from "./assets/serv6.m4v";
import serv7 from "./assets/serv7.m4v";
import serv8 from "./assets/serv8.m4v";
import bgimage from "./assets/wallpaper.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      serviceRefs.current.forEach((ref, index) => {
        const direction = index % 2 === 0 ? -100 : 100; // Alternating left-right animation

        gsap.fromTo(
          ref,
          {
            opacity: 0,
            x: direction,
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: ref,
              start: "top bottom",
              end: "bottom center",
              scrub: true,
              onLeaveBack: () => gsap.to(ref, { opacity: 0, x: direction }),
            },
          }
        );
      });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  const services = [
    {
      title: "Digital Strategies & Branding",
      description: "Integrating brand strategy with digital initiatives to improve customer experience online & offline.",
      details: ["Digital Strategy", "Brand Strategy", "Brand Identity", "Logo Design"],
      video: serv1,
    },
    {
      title: "Web Design & Development",
      description: "Custom web & app development with strategic insights for brand engagement and conversions.",
      details: ["Custom Web Design", "Information Architecture & UX", "eCommerce Design", "App Development"],
      video: serv2,
    },
    {
      title: "Results-Driven Digital Marketing",
      description: "Multichannel marketing approaches to increase conversions and visibility.",
      details: ["Digital Marketing Strategy", "SEO", "Social & Paid Media", "Content Marketing"],
      video: serv3,
    },
    {
      title: "Custom Development",
      description: "Agile approach to building scalable software with dynamic user experience.",
      details: ["Custom Software Development", "Next Generation AI", "Wearable Technology", "Internet of Things"],
      video: serv4,
    },
    {
      title: "Full-Service eCommerce Development",
      description: "Custom eCommerce sites designed for superior performance and engagement.",
      details: ["eCommerce Design", "eCommerce Development", "eCommerce SEO", "eCommerce Marketing"],
      video: serv5,
    },
    {
      title: "High-Performance Shopify Websites",
      description: "Custom Shopify sites developed and optimized for performance and higher conversion.",
      details: ["Customized Design", "Shopify Development", "eCommerce SEO", "eCommerce Marketing"],
      video: serv6,
    },
    {
      title: "Enterprise Resource Planning",
      description: "Customizing enterprise solutions for deeper insights and better decision-making.",
      details: ["HR Management", "Business Process Management", "Enterprise CRM", "Facility Management"],
      video: serv7,
    },
    {
      title: "B2B Lead Generation",
      description: "Data-driven strategies to optimize sales pipeline and generate high-quality leads.",
      details: ["Lead Generation Strategy", "Sales Pipeline Optimization", "SEO", "Digital Marketing"],
      video: serv8,
    },
  ];

  return (
    <div
      className="py-10 md:py-20 services-section"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-center">
        <div className="relative mt-14 md:mt-3">
          <div className="relative z-10">
            html
            Copy code
            <h1
              className="text-3xl md:text-[70px] font-bold text-white relative z-20 service-h1"
              style={{
                lineHeight: 'normal',
              }}
            >
              Social recoveries Specializes in the Following Services:
            </h1>

            
          </div>
        </div>

        <p className="text-lg md:text-xl mb-10 px-4 text-white my-10 raleway">
          With extensive experience working with some very respected brands, delivering brand experiences people love.
        </p>

        {/* Grid layout for services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 border border-gray-300 rounded-lg shadow-lg py-4 px-4 flex flex-col items-center"
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <video
                src={service.video}
                autoPlay
                loop
                muted
                className="w-40 h-40 mb-4" // Increased size of the video
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white mb-4"> {/* Text color changed to white */}
                {service.description}
              </p>
              <div className="mx-auto text-left">
                <ul className="text-white list-disc list-inside space-y-1 triangle-list" > {/* Updated text color and added list styles */}
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm" style={{ textAlign: 'left' }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
