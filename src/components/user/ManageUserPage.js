import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';
import toastr from 'toastr';

class ManageUserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, props.user),
      errors: {},
      saving: false,
    };
  }

  userFormIsValid = () => {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.user.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.user.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.props.users.map(user => {
    	if (user.firstName === this.state.user.firstName && user.lastName === this.state.user.lastName) {
    		this.state.errors.lastName = 'This user has already been created';
		    formIsValid = false;
	    }
    });

    this.setState({ errors: this.state.errors });
    return formIsValid;
  };

  updateUserState = event => {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  };

  saveUser = event => {
    event.preventDefault();
    if (!this.userFormIsValid()) {
      return;
    }
    this.setState({ saving: true });
    this.props.actions
      .saveUser(this.state.user)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  };

  redirect = () => {
    this.setState({ saving: false });
    toastr.success('User saved!');
    this.props.history.push('/users');
  };

  render() {
    return (
      <UserForm
        user={this.state.user}
        onSave={this.saveUser}
        onChange={this.updateUserState}
        saving={this.state.saving}
        errors={this.state.errors}
      />
    );
  }
}

ManageUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const getUserById = (users, id) => {
  const user = users.find(user => user.id === id);
  return user;
};

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  let user = {
    id: '',
    firstName: '',
    lastName: '',
  };
  if (userId && state.users.length > 0) {
    user = getUserById(state.users, userId);
  }
  return {
  	user,
	  users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
