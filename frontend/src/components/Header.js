import React from 'react';
import icon from '../assets/img/weathericon.png';

const Header = () => {
  return (
    <section className="header d-flex justify-content-center">
      <h1>Weatherly</h1>
      <img
        style={{ width: '50px', height: '50px', marginLeft: '10px' }}
        src={icon}
        alt="weather"
      />
    </section>
  );
};

export default Header;
