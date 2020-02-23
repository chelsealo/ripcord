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
    this.state = {
      //checkedItems: new Map(),
      checkboxes: [
        {id: 'cory-house', isChecked: false},
        {id: 'scott-allen', isChecked: false},
        {id: 'dan-wahlin', isChecked: false}
      ]
    }
  }

  handleChange = (event) => {
    // const item = event.target.id;
    // const isChecked = event.target.checked;
    // this.setState(prevState => ({ 
    //   checkedItems: prevState.checkedItems.set(item, !isChecked) 
    // }));


    // this.setState(initialState => ({
    //   isChecked: !initialState.isChecked,
    // }));
    let checkboxes = this.state.checkboxes
    checkboxes.forEach(box => {
       if (box.value === event.target.value)
          box.isChecked =  event.target.checked
    })
    this.setState({checkboxes: checkboxes})
  }

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

  deleteAll = (event, id) => {
    event.preventDefault();
    let checkboxes = this.state.checkboxes
    checkboxes.forEach(box => {
       if (box.isChecked === true)
        this.props.actions.deleteUser(id)
    })
      // .then(() => toastr.success('Users deleted!'))
      // .catch(error => toastr.error(error));
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
        <input
          className="btn btn-primary"
          type="delete"
          value="Delete Selected"
          onClick={this.deleteAll}
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
