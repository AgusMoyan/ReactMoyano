import React from 'react';
import { Link } from 'react-router-dom';
import './brand.css';

const  logo = "../logo1.png";

const Brand = () => {
  return (
    <Link className='brand' to="/"> 
      <img src= {logo} alt="logo"></img>
    </Link>      
  );
};

export default Brand;
