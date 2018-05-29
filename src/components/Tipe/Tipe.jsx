import React from 'react';
import Logo from '../../assets/tipeLogo.png';

export default () => {
  return (
    <img
      className="sidebar-item"
      src={ Logo }
      style={{
        width: '50%'
      }}
    />
  );
};
