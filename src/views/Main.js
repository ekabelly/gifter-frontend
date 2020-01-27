import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Store from './Store';
import i18n from '../i18n';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

  function PrivateRoute({ children, user }) {
    return (
      <Route
        render={({ location }) =>
          user.token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  const mapStateToProps = (state) => ({
    user: state.userData
})

const ConnectedPrivateRoute = connect(mapStateToProps, {})(PrivateRoute)

const Main = props => {
    return (
        <Router>
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <ConnectedPrivateRoute path="/store">
                        <header className="header">
                            <div className="user">
                                {i18n('hello')}, { props.user.name }
                            </div>
                        </header>
                        <Store />
                    </ConnectedPrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}

export default connect(mapStateToProps, {})(Main)
