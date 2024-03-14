import React from 'react';
import Navbar from '../Organism/Navbar';

const MainTemplate = () => {
  const navbarItems = [
    { text: 'Home', onClick: () => console.log('Home clicked') },
    { text: 'About', onClick: () => console.log('About clicked') },
    { text: 'Contact', onClick: () => console.log('Contact clicked') },
  ];

  return (
    <div>
      <Navbar items={navbarItems} />
      {/* Other content */}
      
    </div>
  );
};

export default MainTemplate;
