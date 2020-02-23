import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import HomePage from './home/HomePage';
import UsersPage from './user/UsersPage';
import Header from './common/Header';
import ManageUserPage from './user/ManageUserPage';

const NoMatch = ({ location }) =>
  <div>
    <h3>
      No match for
      <code>{location.pathname}</code>
    </h3>
  </div>;

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <Provider store={this.props.store}>
        <Router>
          <div className="container-fluid">
            <Header
              loading={this.props.loading}
            />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/users" component={UsersPage} />
              <Route exact path="/user" component={ManageUserPage} />
              <Route path="/user/:id" component={ManageUserPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallInProgress > 0
  };
};

export default connect(mapStateToProps)(App);
