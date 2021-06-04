import './default.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

//pages
import Registration from './pages/registration';
import Homepage from './pages/homepage';
import Login from './pages/Login';
import Recovery from './pages/Recovery';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import { auth, handleUserProfile } from './firebase/Utils';
import React from 'react';

const initialState = {
  currentUser: null,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomepageLayout currentUser={currentUser}>
                  <Homepage />
                </HomepageLayout>
              )}
            ></Route>
            <Route
              path="/registration"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <MainLayout currentUser={currentUser}>
                    <Registration />
                  </MainLayout>
                )
              }
            ></Route>
            <Route
              path="/login"
              render={() =>
                currentUser ? (
                  <Redirect to="/"></Redirect>
                ) : (
                  <MainLayout currentUser={currentUser}>
                    <Login />
                  </MainLayout>
                )
              }
            ></Route>
            <Route
              path="/recovery"
              render={() => (
                <MainLayout>
                  <Recovery />
                </MainLayout>
              )}
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
