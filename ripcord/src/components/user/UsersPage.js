import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import toastr from 'toastr';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    //task 1
    this.state = {
      checkboxes: [
        {id: 'cory-house', isChecked: false},
        {id: 'scott-allen', isChecked: false},
        {id: 'dan-wahlin', isChecked: false}
      ],
      users: this.props.users 
    }
  }

  //task 1
  handleChange = (event, id) => {
    let checkboxes = this.state.checkboxes
    checkboxes.forEach(box => {
      if (id === box.id) {
        box.isChecked =  event.target.checked
      }
    })
    this.setState({checkboxes: checkboxes})
  };

  redirectToAddUserPage = () => {
    this.props.history.push('/user');
  };

  deleteUser = (event, id) => {
    event.preventDefault();
    this.props.actions
      .deleteUser(id)
      .then(() => toastr.success('User deleted!'))
      .catch(error => toastr.error(error));
  };

  //task 1
  deleteAll = event => {
    let checkboxes = this.state.checkboxes
    checkboxes.forEach(box => {
       if (box.isChecked == true)
        this.props.actions
          .deleteUser(box.id)
          .then(() => toastr.success('User deleted!'))
          .catch(error => toastr.error(error));
    })
  };

  sortUsers = event => {
      let users = this.state.users
      users = this.props.users.sort((a, b) => a.lastName > b.lastName ? 1 : -1)
      this.setState({users: users})
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <input
          className="btn btn-primary"t
          type="submit"
          value="Add User"
          onClick={this.redirectToAddUserPage}
        />
        <input
          className="btn btn-primary"
          type="delete"
          value="Delete Selected"
          onClick={this.deleteAll}
        />
        <input
          className="btn btn-primary"
          type="sort"
          value="Sort"
          onClick={this.sortUsers}
        />
        <UserList users={users} deleteUser={this.deleteUser} handleChange={this.handleChange} />
      </div>
    );
  }
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
