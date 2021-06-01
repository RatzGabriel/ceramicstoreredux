import React from 'react';
import Button from '../forms/Button';
import './styles.scss';
import { signInWithGoogle, auth } from './../../firebase/Utils';

import FormInput from './../forms/formInput';

const initialState = {
  email: '',
  password: '',
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signIn">
        <div className="wrap">
          <h2>Login</h2>
          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="email"
                handleCHange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="password"
                handleCHange={this.handleChange}
              />
              <Button type="submit">Login</Button>
              <div className="socialSignIn">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
