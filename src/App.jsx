import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './frontend/Home';
import About from './frontend/About';
import Services from './frontend/Services';
import Packages from './frontend/Packages';
import Pages from './frontend/Pages';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Designation from './frontend/Destination';
import Testimonial from './frontend/Testimonial';
import Booking from './frontend/Booking';
import Contact from './frontend/Contact';
import TravelGuide from './frontend/TravelGuide';
import Page from './frontend/404page';
import './assets/Style.css';







function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/destination" element={<Designation />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/travelGuide" element={<TravelGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/navbar" element={<Navbar />} />
       
      </Routes>
      
    </Router>
  );
}

export default App;
