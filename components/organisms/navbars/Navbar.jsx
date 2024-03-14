import React from 'react';
import NavbarItem from '../Molecule/navbarItems/NavbarItem';

const Navbar = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <NavbarItem key={index} text={item.text} onClick={item.onClick} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
