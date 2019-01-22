import React from 'react';
import './Footer.scss';

const getDate = new Date();
const getYear = getDate.getFullYear();


const Footer = () => {
  return <footer> &copy;Vanessa Henson {getYear} </footer>;
};

export default Footer;
