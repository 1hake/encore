// react component for text logo
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = (props) => {
  let location = useLocation();

  return (
    <Link to={location === "/" ? "/" : "/associes"}>
      <a className='navbar-brand page-scroll' href='#page-top'>
        ENCORE
      </a>
      <div style={{ height: '20px', width: '100px', backgroundColor: '#FF194E', marginTop: '22px', marginLeft: '20px' }}></div>
    </Link>
  );
};

export default Logo;