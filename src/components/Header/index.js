import React from 'react';
import testLogo from '../../assets/testLogo.jpeg';
import './styles.scss';
import { Link } from 'react-router-dom';
import Registration from '../../pages/registration';
import { auth } from '../../firebase/Utils';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={testLogo} alt="Machua Peru Logo"></img>
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              {' '}
              <li>
                {' '}
                <span onClick={() => auth.signOut()}>Logout</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
