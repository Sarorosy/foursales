import React, { useState } from 'react';
import videoBg from './assets/da-funk.mp4'; // Ensure the video path is correct

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative md:min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      {/* Form Container */}
      <div className="relative z-10 w-full max-w-5xl p-8">
      <div className="hidden md:block relative mb-4">
            <h1
              className="text-6xl md:text-[70px] font-bold text-transparent absolute -bottom-1 md:-bottom-2"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Interested? Drop Us a Line
            </h1>
            <h1 className="text-6xl md:text-[70px] font-bold text-white relative z-10 transition-transform duration-300 ease-in-out hover:translate-x-3">
              Interested? Drop Us a Line
            </h1>
          </div>
          <h1 className="md:hidden mt-10 text-5xl font-bold slideanimate text-white text-left ml-8 mb-10 ">
          Interested? Drop Us a Line
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:mb-3">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      className="bg-black w-full p-4 border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-blue-300"
      required style={{margin:"20px 0"}}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="bg-black w-full p-4 border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-blue-300"
      required style={{margin:"20px 0"}}
    />
  </div>
  <textarea
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
    rows={3}
    className="bg-black w-full p-4 my-1 md:my-3 border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-blue-300 resize-none"
    required style={{marginBottom:"20px"}}
  ></textarea>
  <button
    type="submit"
    className="w-full py-3 px-6 text-lg font-semibold text-black bg-white hover:bg-black text-black hover:text-white border border-black hover:border-white transition-colors duration-300 ease-in-out"
  >
    SEND
  </button>
</form>

      </div>
    </div>
  );
}
