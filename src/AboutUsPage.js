import React from 'react';
import Navbar from './Navbar';
import ResponsibleFooter from './ResponsibleFooter';

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-us bg-white max-w-5xl mx-auto py-12 px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>

        <section className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            At Social Recoveries, we believe in the power of digital transformation. Our mission is to help businesses
            unlock their full potential in an increasingly digital world. With creative design, strategic thinking, and a
            results-driven approach, we create unique solutions that set our customers apart.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            From creating an easy-to-use and visually appealing website to increasing your online visibility with SEO, we
            focus on creating an online presence that truly reflects your brand. Our team takes a holistic approach,
            combining innovative website design with a thoughtful digital strategy that drives growth and increases
            customer engagement.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            We understand that every brand is unique, so we tailor our strategy to your specific goals. Whether it's
            creating a strong brand identity through logo design or developing an SEO plan that drives organic traffic, we
            are dedicated to providing solutions that create meaningful impact.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            With a combination of creativity, expertise, and data-driven insights, Social Recoveries is your partner in
            navigating the complexities of the digital landscape. We don't just provide service; instead, we build long-term
            relationships that help your brand succeed.
          </p>
        </section>
      </div>
      <ResponsibleFooter />
    </>
  );
};

export default AboutUsPage;
