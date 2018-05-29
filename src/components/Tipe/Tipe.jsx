import React from 'react';
import Logo from '../../assets/tipeLogo.png';

export default () => {
  return (
    <a className="sidebar-item" href="https://tipe.io/?ref=webpack">
      <img
        src="https://cdn.tipe.io/tipe/tipe-ad.png"
        alt="Tipe Logo"
        style={{
          width: '50%',
          height: '50%'
        }}
      />
    </a>
  );
};
