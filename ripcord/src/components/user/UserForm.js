import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import toastr from 'toastr';
import { withRouter } from "react-router";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormDirty: false,
    };
  }
  onHandleChange = event => {
    this.setState({ isFormDirty: true });
    this.props.onChange(event);
  };
  onHandleSave = event => {
    this.setState({ isFormDirty: false });
    this.props.onSave(event);
  };
  //task 2
  redirectToUsers = () => {
    this.props.history.push('/users');
  };

  render() {
    const { user, saving, errors } = this.props;
    return (
      <form>
        <Prompt
          when={this.state.isFormDirty}
          message={location =>
            `Are you sure you want to go to ${location.pathname} without saving the changes?`}
        />

        <h1>Manage User</h1>
        <TextInput
          name="firstName"
          label="First Name"
          value={user.firstName}
          onChange={this.onHandleChange}
          error={errors.firstName}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          value={user.lastName}
          onChange={this.onHandleChange}
          error={errors.lastName}
        />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={this.onHandleSave}
        />
        <input
          type="cancel"
          value={'Cancel'}
          className="btn btn-primary"
          onClick={this.redirectToUsers}
        />
      </form>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
};

export default withRouter(UserForm);
