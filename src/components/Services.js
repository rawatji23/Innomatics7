import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DesignService from './DesignService';
import DevelopmentService from './DevelopmentService';

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>

      <Routes>
        <Route path="design" element={<DesignService />} />
        <Route path="development" element={<DevelopmentService />} />
      </Routes>
    </div>
  );
}

export default Services;
