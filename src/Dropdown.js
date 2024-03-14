import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button className="dropbtn">Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <a key={index} href="#" onClick={handleItemClick}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
