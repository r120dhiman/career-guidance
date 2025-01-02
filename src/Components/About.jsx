import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 sm:py-20 bg-[#f1f1f1]">
      {/* About Section */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2c3a43] mb-6 sm:mb-8 text-center">
        About Us
      </h2>
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl text-center px-4 sm:px-0">
        Welcome to our platform! We are dedicated to helping students make informed career decisions and secure their placements in top companies.
        Our team consists of experienced professionals who are passionate about guiding students through their academic and professional journey.
      </p>

      {/* Mission Section */}
      <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#2c3a43]">Our Mission</h3>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mt-5">
          Our mission is to provide students with the necessary resources, guidance, and support to navigate their career paths successfully.
          We believe in empowering students with knowledge and tools to make informed decisions about their future.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-16 sm:mt-20 text-center px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#2c3a43]">Meet the Team</h3>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Team Member 1 */}
          <div className="team-member flex flex-col items-center">
            <img className="w-32 h-32 rounded-full" src="/team-member1.jpg" alt="Team Member 1" />
            <h4 className="mt-4 text-lg font-semibold">John Doe</h4>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="team-member flex flex-col items-center">
            <img className="w-32 h-32 rounded-full" src="/team-member2.jpg" alt="Team Member 2" />
            <h4 className="mt-4 text-lg font-semibold">Jane Smith</h4>
            <p className="text-sm text-gray-500">Head of Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
