import React from 'react'

const NavbarItem = ({ text, onClick }) => {
  return <li><a href="#" onClick={onClick}>{text}</a></li>;
};

export default NavbarItem;
