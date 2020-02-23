import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import UserListRow from './UserListRow';
import toastr from 'toastr';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: [
        { id: 1, label: 'Reading', value: false },
        { id: 2, label: 'Playing game', value: false },
        { id: 3, label: 'Listening to music', value: false },
      ]
    };
  }

  handleChange = e => {
    const id = e.target.id;
    this.setState(prevState => {
      return {
        list: prevState.list.map(
          li => (li.id === +id ? { ...li,
            value: !li.value
          } : li)
        )
      };
    });
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        list: prevState.list.filter(li => !li.value)
      };
    });
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

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <input
          className="btn btn-primary"
          type="submit"
          value="Add User"
          onClick={this.redirectToAddUserPage}
        />
        <UserList users={users} deleteUser={this.deleteUser} />
        <UserListRow users={users} handleChange={this.handleChange} handleClick={this.handleClick} />
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
