import React, { Component } from 'react';
import './styles.scss';

import AuthWrapper from '../Authwrapper';
import FormInput from '../forms/formInput';
import Button from '../forms/Button';
import { auth } from '../../firebase/Utils';
import { withRouter } from 'react-router-dom';

const initialState = {
  emai: '',
  errors: [],
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email } = this.state;
      const config = {
        // change this later to live environment
        url: 'http://localhost:3000/login',
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found. Please try again'];
          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, errors } = this.state;
    const configAuthWrapper = {
      headline: 'Email Password',
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          )}

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
