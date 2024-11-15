import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Pages() {
  return (
    <div>
      <h1>Main Pages</h1>
      <nav>
        <ul>
          <li><Link to="destination">Destination</Link></li>
          <li><Link to="booking">Booking</Link></li>
          <li><Link to="travel-guide">Travel Guide</Link></li>
          <li><Link to="testimonial">Testimonial</Link></li>
        </ul>
      </nav>
      {/* Renders the nested route content here */}
      <Outlet />
    </div>
  );
}

export default Pages;
