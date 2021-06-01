import React from 'react';
import testLogo from '../../assets/testLogo.jpeg';
import './styles.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={testLogo} alt="Machua Peru Logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
