import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Career from './Components/Career';
import Home from './Components/Home';
import Placement from './Components/Placement';
import AboutUs from './Components/About';
import ContactUs from './Components/Contactus';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      {/* Navbar stays at the top for all pages */}
      <Navbar />
      
      {/* Main content */}
      <div className='container mx-auto '>
        <Routes>
          <Route path="/career-guidance" element={<Career />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path="/placement" element={<Placement />} />
          <Route path="/" element={<Home />} />  {/* This will handle the home page */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
