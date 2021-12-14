// react component for text logo
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = (props) => {
  let location = useLocation();

  return (
    <Link to={location.pathname === "/" ? "/#header" : "/associes#header"}>
      <img style={{ width: '150px' }} src={'img/logoEncore.png'} alt="logo" />
    </Link>
  );
};

export default Logo;