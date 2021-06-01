import React from 'react';
import './styles.scss';

const Button = ({ children, ...other }) => {
  return (
    <button className="btn" {...other}>
      {children}
    </button>
  );
};

export default Button;
