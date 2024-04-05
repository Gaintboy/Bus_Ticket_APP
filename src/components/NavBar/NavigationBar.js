
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Navbar.css";

const NavigationBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item) => {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <h2 id="headerTitle">Bus Ticket Booking</h2>
      <div>
        <div className="dropdown-container">
          <button className="dropdown-button" onClick={() => toggleDropdown()}>
            MENU
          </button>
          {isOpen && (
            <ul className="dropdown-list">
              <li>
                <Link to="/" onClick={() => handleClick()}>Reservation</Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => handleClick()}>Dashboard</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;



