import React, { useState } from 'react';
import careerheading from '../assets/careeroptions.json';  
import careerdetails from '../assets/careerdetails.json'; 
import map from '/map.webp';

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    // Find the selected category's subcategories in the careerdetails data
    const categoryDetails = careerdetails.find(
      (category) => category.category === selectedCategory
    );

    // Update subcategories if category found
    if (categoryDetails) {
      setSubCategories(categoryDetails.sub_categories);
    } else {
      setSubCategories([]); // Reset if no subcategories found
    }
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      {/* Background Map Image */}
      <div className='absolute top-0 object-fill'>
        <img src={map} className='w-full h-full z-[-10] fixed top-0 left-0 object-cover' alt="Map background" />
      </div>

      {/* Sticky Section for Career Guidance Heading and Dropdown */}
      <div className="sticky top-20 bg-white rounded-3xl z-10 p-5 shadow-md w-full sm:max-w-4xl md:max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c3a43]">Career Guidance</h2>

        {/* Dropdown to select category */}
        <div className='dropdown mt-5'>
          <label htmlFor="career_options" className="text-lg sm:text-xl px-5 sm:px-10">
            Choose the Category 
          </label>
          <select 
            id="career_options" 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-1/2"
          >
            <option value="">--Select Category--</option>
            {careerheading.career_options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Subcategories and Career Cards */}
      <div className="subcategories-container w-full px-5 sm:px-10 py-5">
        <h3 className="text-lg sm:text-xl sticky top-[220px] w-full sm:w-fit px-4 py-1 z-10 bg-white rounded-2xl">
          {selectedCategory ? (
            <>Possible Career Options under <strong>"{selectedCategory}"</strong></>
          ) : (
            <>All Possible Career Options</>
          )}
        </h3>

        {/* Iterate through all categories or only selected category */}
        <div className="cards-container flex flex-wrap justify-center gap-10 mt-5">
          {(selectedCategory ? [careerdetails.find(category => category.category === selectedCategory)] : careerdetails).map((category, index) => (
            <div key={index} className='flex flex-wrap gap-10 justify-center'>
              {category.sub_categories.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  className="card flex flex-col w-full sm:w-[80%] md:w-[45%] lg:w-[30%] hover:scale-[1.05] transition-all duration-300 justify-center items-center gap-5 mx-auto bg-gradient-to-br shadow-amber-100 shadow-2xl p-5 rounded-3xl drop-shadow-2xl from-[#fed0c5] to-[#8b47b5]"
                >
                  <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">{subCategory.name}</h1>
                  <div className="lower flex flex-col gap-2 mt-4">
                    <div className="qualification">
                      <h2 className="text-lg font-semibold text-lime-700">Qualification Required</h2>
                      <p className="text-zinc-600 font-semibold">{subCategory.qualification_required}</p>
                    </div>
                    <div className="experience">
                      <h2 className="text-lg font-semibold text-lime-700">Experience Required</h2>
                      <p className="text-zinc-600 font-semibold">{subCategory.experience_required}</p>
                    </div>
                    <div className="Exams">
                      <h2 className="text-lg font-semibold text-lime-700">Competitive Exams Needed</h2>
                      <p className="text-zinc-600 font-semibold">{subCategory.competitive_exams_needed}</p>
                    </div>
                    <div className="tips">
                      <br />
                      <p className="text-zinc-600 font-semibold">{subCategory.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* If no subcategories available for the selected category */}
      {selectedCategory && subCategories.length === 0 && (
        <p className="text-center mt-5">No subcategories available for this category.</p>
      )}
    </div>
  );
};

export default Career;
