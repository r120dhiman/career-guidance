import React, { useState } from 'react';
import placementdetails from '../assets/placementdetails.json'; // Your placement data
import map from '/map.webp'

const Placement = () => {
  const [placementStatus, setPlacementStatus] = useState(''); // For filtering by placement status
  const [selectedCompany, setSelectedCompany] = useState(''); // For filtering by company
  const [filteredData, setFilteredData] = useState(placementdetails); // Filtered placement data

  // Get unique companies from placement data
  const companies = Array.from(new Set(placementdetails.map(student => student.company).filter(company => company)));

  // Handle placement status change (filter by "Placed", "Not Placed", "In-Process")
  const handlePlacementStatusChange = (e) => {
    const status = e.target.value;
    setPlacementStatus(status);
    filterData(status, selectedCompany);
  };

  // Handle company change (filter by company name)
  const handleCompanyChange = (e) => {
    const company = e.target.value;
    setSelectedCompany(company);
    filterData(placementStatus, company);
  };

  // Filter data based on placement status and company
  const filterData = (status, company) => {
    let filtered = placementdetails;

    if (status) {
      filtered = filtered.filter(student => student.placementStatus === status);
    }

    if (company) {
      filtered = filtered.filter(student => student.company === company);
    }

    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className='absolute top-0 object-fill'>
        <img src={map} className='w-full h-full z-[-10] fixed top-0 left-0 ' alt="" />
      </div>
      <h2 className="text-5xl font-extrabold text-[#2c3a43] z-10">Placement Assistance</h2>

      {/* Dropdown to select placement status */}
      <div className='dropdown z-10'>
        <label htmlFor="placement_status" className="text-xl px-10">
          Choose Placement Status
        </label>
        <select 
          id="placement_status" 
          value={placementStatus} 
          onChange={handlePlacementStatusChange}
        >
          <option value="">--All Placements--</option>
          <option value="Placed">Placed</option>
          <option value="Not Placed">Not Placed</option>
          <option value="In-Process">In-Process</option>
        </select>
      </div>

      {/* Dropdown to select company */}
      <div className='dropdown z-10 mt-5'>
        <label htmlFor="company_filter" className="text-xl px-10">
          Choose Company
        </label>
        <select 
          id="company_filter" 
          value={selectedCompany} 
          onChange={handleCompanyChange}
        >
          <option value="">--All Companies--</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered placement information */}
      <div className="students-container">
        <h3 className="py-10 text-lg z-10">
          {placementStatus || selectedCompany ? (
            <>
              Showing students with {placementStatus && `"${placementStatus}"`} {selectedCompany && `from "${selectedCompany}"`}
            </>
          ) : (
            <>All Placement Status and Companies</>
          )}
        </h3>

        {/* Iterate through the filtered placement data */}
        <div className="cards-container flex flex-wrap gap-10">
          {filteredData.map((student, index) => (
            <div
              key={index}
              className="card flex flex-col w-[300px] hover:scale-[1.1] transition-all duration-300 justify-center items-center gap-5 mx-auto bg-gradient-to-br shadow-amber-100 shadow-2xl p-5 rounded-3xl drop-shadow-2xl from-[#fed0c5] to-[#8b47b5]"
            >
              <h1 className="text-3xl font-bold text-orange-600">{student.studentName}</h1>
              <h2 className="text-xl font-semibold text-lime-700">{student.course}</h2>
              <div className="lower flex flex-col gap-2">
                <div className="placement-status">
                  <h3 className="text-lg font-semibold text-lime-700">Placement Status</h3>
                  <p className="text-zinc-600 font-semibold">{student.placementStatus}</p>
                </div>
                {student.placementStatus === "Placed" && (
                  <div className="company">
                    <h3 className="text-lg font-semibold text-lime-700">Company</h3>
                    <p className="text-zinc-600 font-semibold">{student.company}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* If no data available for the selected status and company */}
      {filteredData.length === 0 && (
        <p>No students found for the selected filters.</p>
      )}
    </div>
  );
};

export default Placement;
