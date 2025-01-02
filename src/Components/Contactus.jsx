import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col justify-center items-center py-12 sm:py-20 bg-[#f9f9f9]">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2c3a43] mb-6 sm:mb-8">Contact Us</h2>
      
      <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-3xl px-4">
        We would love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out to us.
      </p>

      <div className="w-full max-w-lg px-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 sm:p-8 shadow-lg rounded-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
          <button
            type="submit"
            className="p-4 bg-blue-600 text-white rounded-md mt-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 sm:mt-10 text-center px-4">
        <h3 className="text-lg sm:text-xl font-semibold">You can also reach us at:</h3>
        <p className="text-base sm:text-lg text-gray-700">Email: contact@ourcompany.com</p>
        <p className="text-base sm:text-lg text-gray-700">Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
