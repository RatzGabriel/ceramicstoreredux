import React from 'react';
import One from '../../assets/One.jpg';
import Two from '../../assets/Two.jpg';
import './styles.scss';

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${One})` }}>
          <a href="">Shop One</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Two})` }}>
          <a href="">Shop Two</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
