import React from 'react';
import './styles.scss';

const FormInput = ({ handleCHange, label, type, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}
      <input
        className="formInput"
        onChange={handleCHange}
        {...otherProps}
        type={type}
      />
    </div>
  );
};

export default FormInput;
