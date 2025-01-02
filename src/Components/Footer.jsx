import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const Footer = () => {
  return (
    <footer className="bg-[#2c3a43] text-white py-10 mt-20">
      <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <h4 className="text-2xl font-bold">Our Company</h4>
          <ul className="mt-4">
            <li><Link to="/about-us" className="text-lg hover:underline">About Us</Link></li>
            <li><Link to="/contact-us" className="text-lg hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl font-bold">Follow Us</h4>
          <div className="mt-4 flex gap-6">
            <a href="https://facebook.com" className="text-lg hover:underline">Facebook</a>
            <a href="https://twitter.com" className="text-lg hover:underline">Twitter</a>
            <a href="https://linkedin.com" className="text-lg hover:underline">LinkedIn</a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl font-bold">Legal</h4>
          <ul className="mt-4">
            <li><Link to="/terms" className="text-lg hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="text-lg hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm">&copy; 2025 Our Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
